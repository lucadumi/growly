"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type FC } from "react";
import { RefreshCw } from "lucide-react";

type Location = {
  name: string;
  latitude: number;
  longitude: number;
};

const seasonalBackgrounds: Record<string, string> = {
  spring:
    "radial-gradient(circle at 20% 20%, #e3f9e5 0, #f6fff2 25%, transparent 40%), linear-gradient(135deg, #d4f4dd 0%, #a1e5b9 50%, #7fd1ae 100%)",
  summer:
    "radial-gradient(circle at 80% 10%, #fff3c5 0, #ffe8a3 28%, transparent 45%), linear-gradient(135deg, #ffd89b 0%, #fcb69f 50%, #ff9a9e 100%)",
  autumn:
    "radial-gradient(circle at 15% 15%, #fff2db 0, #ffdfb8 30%, transparent 48%), linear-gradient(135deg, #f7c978 0%, #f78ca0 50%, #f9748f 100%)",
  winter:
    "radial-gradient(circle at 80% 20%, #d8ebff 0, #bddbff 32%, transparent 48%), linear-gradient(135deg, #8ec5fc 0%, #e0c3fc 100%)",
};

const DEGREE_SYMBOL = "\u00B0";

const formatTemperature = (value: number) =>
  `${Math.round(value)}${DEGREE_SYMBOL}C`;

type WeatherApiResponse = {
  current_weather: {
    is_day: number;
    temperature: number;
    windspeed: number;
    weathercode: number;
    time: string;
  };
  hourly?: {
    time: string[];
    precipitation?: number[];
  };
};

type WeatherState = {
  temperature: number;
  windspeed: number;
  feelsLike: number;
  weatherCode: number;
  isDay: boolean;
  precipitation: number;
  time: string;
};

const getSeason = (month: number) => {
  if (month >= 2 && month <= 4) {
    return "spring";
  }
  if (month >= 5 && month <= 7) {
    return "summer";
  }
  if (month >= 8 && month <= 10) {
    return "autumn";
  }
  return "winter";
};

const getWeatherIcon = (code: number, isDay: boolean) => {
  if (!isDay) {
    return "/weather/night.png";
  }

  if (code === 0) {
    return "/weather/sunny.png";
  }

  if ([1, 2, 3, 51, 53, 55, 61, 63, 65, 66, 67].includes(code)) {
    return "/weather/partly-cloudy.png";
  }

  if ([45, 48].includes(code)) {
    return "/weather/foggy.png";
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "/weather/snow.png";
  }

  if ([95, 96, 99].includes(code)) {
    return "/weather/thunderstorm.png";
  }

  return "/weather/sunny.png";
};

const getWeatherLabel = (code: number) => {
  if (code === 0) {
    return "Clear skies";
  }

  if ([1, 2, 3].includes(code)) {
    return "Partly cloudy";
  }

  if ([45, 48].includes(code)) {
    return "Foggy";
  }

  if ([51, 53, 55, 61, 63, 65, 66, 67].includes(code)) {
    return "Light showers";
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "Snow";
  }

  if ([95, 96, 99].includes(code)) {
    return "Thunderstorm";
  }

  return "Changing conditions";
};

const fetchWeatherData = async (
  loc: Location,
  signal: AbortSignal
): Promise<WeatherState> => {
  const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true&hourly=precipitation&timezone=auto`;
  const response = await fetch(endpoint, { signal });

  if (!response.ok) {
    throw new Error("Weather endpoint returned an error");
  }

  const payload: WeatherApiResponse = await response.json();
  const current = payload.current_weather;
  const hourly = payload.hourly;
  const currentIndex =
    hourly?.time?.findIndex((time) => time === current.time) ?? -1;
  const precipitation =
    currentIndex >= 0 && hourly?.precipitation
      ? hourly.precipitation[currentIndex]
      : 0;
  const feelsLike = current.temperature - current.windspeed * 0.13;

  return {
    temperature: current.temperature,
    windspeed: current.windspeed,
    feelsLike,
    weatherCode: current.weathercode,
    isDay: current.is_day === 1,
    precipitation,
    time: current.time,
  };
};

const WeatherWidget: FC = () => {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [locationStatus, setLocationStatus] = useState<
    "default" | "pending" | "resolved" | "error" | "disabled"
  >("default");
  const [isManualRefreshing, setIsManualRefreshing] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      setLocationStatus("disabled");
      return;
    }

    setLocationStatus("pending");

    const handleSuccess = (position: GeolocationPosition) => {
      setLocation({
        name: "Your location",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLocationStatus("resolved");
    };

    const handleError = () => {
      setLocationStatus("error");
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 5 * 60 * 1000,
    });
  }, []);

  const loadWeather = useCallback(
    async (source: "interval" | "manual") => {
      if (locationStatus !== "resolved" || !location) {
        return;
      }

      if (source === "manual") {
        setIsManualRefreshing(true);
      }

      setStatus("loading");
      setError(null);
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const weatherState = await fetchWeatherData(
          location,
          controller.signal
        );
        if (controller.signal.aborted) {
          return;
        }

        setWeather(weatherState);
        setStatus("idle");
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }

        setStatus("error");
        setError("Unable to load weather right now.");
      } finally {
        if (source === "manual") {
          setIsManualRefreshing(false);
        }
      }
    },
    [location, locationStatus]
  );

  useEffect(() => {
    if (locationStatus === "error" || locationStatus === "disabled") {
      setWeather(null);
      setStatus("error");
      setError("Weather unavailable");
      return;
    }

    if (locationStatus !== "resolved" || !location) {
      setWeather(null);
      setStatus("loading");
      setError(null);
      return;
    }

    const intervalMs = 60_000;

    void loadWeather("interval");
    const intervalId = setInterval(() => {
      void loadWeather("interval");
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
      controllerRef.current?.abort();
    };
  }, [loadWeather, location, locationStatus]);

  const activeSeason = getSeason(new Date().getMonth());
  const backgroundImage = seasonalBackgrounds[activeSeason];
  const iconUrl = weather
    ? getWeatherIcon(weather.weatherCode, weather.isDay)
    : "/weather/sunny.png";
  const isLocationUnavailable =
    locationStatus === "disabled" || locationStatus === "error";
  const canRefresh = locationStatus === "resolved";
  const refreshTitle = isLocationUnavailable
    ? "Enable location access to refresh weather"
    : "Refresh weather";

  const weatherLabel = error
    ? error
    : weather
    ? getWeatherLabel(weather.weatherCode)
    : "Fetching current conditions...";
  const temperatureDisplay = weather
    ? formatTemperature(weather.temperature)
    : `--${DEGREE_SYMBOL}C`;
  const feelsLikeDisplay = weather
    ? formatTemperature(weather.feelsLike)
    : `--${DEGREE_SYMBOL}C`;
  const precipitationDisplay = weather
    ? `${weather.precipitation.toFixed(1)} mm`
    : "--";
  const windDisplay = weather
    ? `${Math.round(weather.windspeed)} km/h`
    : "-- km/h";

  return (
    <div className="lg:pt-2 2xl:pt-6 text-foreground">
      <div className="flex items-center justify-between lg:pb-2 xl:pb-3 2xl:pb-4">
        <div>
          <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
            Weather
          </h3>
        </div>
        <button
          type="button"
          onClick={() => void loadWeather("manual")}
          disabled={!canRefresh || isManualRefreshing}
          aria-label="Refresh weather"
          title={refreshTitle}
          className="inline-flex items-center justify-center rounded-full border border-white/60 bg-card/80 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 text-muted-foreground transition hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RefreshCw
            className={`lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 ${
              isManualRefreshing ? "animate-spin text-primary" : ""
            }`}
          />
        </button>
      </div>
      <div
        className="relative text-foreground flex flex-col justify-top shadow-md lg:h-48 xl:h-64 2xl:h-80 bg-cover bg-bottom bg-no-repeat lg:p-3 xl:p-4 2xl:p-6 lg:rounded-xl 2xl:rounded-2xl"
        style={{ backgroundImage }}
      >
        {status === "loading" && !weather && !isLocationUnavailable && (
          <div className="absolute inset-0 rounded-xl bg-card/90 flex flex-col items-center justify-center gap-2">
            <span className="lg:h-6 lg:w-6 xl:h-8 xl:w-8 animate-spin rounded-full border-4 border-white border-t-primary" />
            <p className="lg:text-[9px] xl:text-[11px] uppercase tracking-[0.4em] text-muted-foreground/80">
              Loading weather
            </p>
          </div>
        )}
        {isLocationUnavailable ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center gap-2">
            <p className="lg:text-[10px] xl:text-xs uppercase tracking-[0.4em] text-muted-foreground/80">
              Weather unavailable
            </p>
            <p className="lg:text-xs xl:text-sm text-muted-foreground/70 lg:px-2 xl:px-3">
              Allow location access or check your connection to see local
              conditions.
            </p>
          </div>
        ) : (
          <>
            <div className="absolute selecet-none pointer-events-none lg:top-2 lg:left-2 xl:top-3 xl:left-3 2xl:top-4 2xl:left-4 lg:rounded-xl 2xl:rounded-2xl lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 bg-card grid place-items-center">
              <Image
                src={iconUrl}
                width={100}
                height={100}
                alt={weatherLabel}
                className="lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 pointer-events-none"
              />
            </div>

            <p className="text-right lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold lg:mb-2 xl:mb-3">
              {temperatureDisplay}
            </p>
            <p className="text-right lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-[0.5em] text-muted-foreground/70">
              {weatherLabel}
            </p>
            {error && (
              <p className="text-right lg:text-[10px] xl:text-xs text-red-500/90 mt-1">
                {error}
              </p>
            )}

            <div className="flex items-center lg:gap-2 xl:gap-3 2xl:gap-5 lg:text-[10px] xl:text-xs 2xl:text-sm mt-auto">
              <div>
                <div className="text-yellow-soft-foreground/70 mb-1">
                  Feels like
                </div>
                <div className="font-semibold">{feelsLikeDisplay}</div>
              </div>
              <div>
                <div className=" text-yellow-soft-foreground/70 mb-1">Wind</div>
                <div className="font-semibold flex items-center gap-1">
                  <span className="whitespace-nowrap">{windDisplay}</span>
                </div>
              </div>
              <div>
                <div className="text-yellow-soft-foreground/70 mb-1">
                  Precipitation
                </div>
                <div className="font-semibold">{precipitationDisplay}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
