"use client";

import { useCallback, useEffect, useState } from "react";

import Button from "@/app/components/ui/button";
import { Quote } from "lucide-react";

type DailyQuote = {
  text: string;
  author: string;
  date: string;
};

const DailyQuoteWidget: React.FC = () => {
  const [quote, setQuote] = useState<DailyQuote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/daily-quote");
      if (!response.ok) {
        throw new Error("Unable to load quote");
      }
      const data = (await response.json()) as { quote?: DailyQuote };
      if (!data.quote) {
        throw new Error("Malformed quote response");
      }
      setQuote(data.quote);
    } catch (fetchError) {
      console.error(fetchError);
      setError("Unable to load today's motivation.");
      setQuote(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="lg:p-2 2xl:p-6 text-foreground">
      <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl lg:mb-2 xl:mb-4">
        Daily motivation
      </h3>

      {loading ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-3 w-2/3 rounded-full bg-muted/70" />
          <div className="h-3 w-full rounded-full bg-muted/70" />
          <div className="h-3 w-5/6 rounded-full bg-muted/70" />
          <div className="h-3 w-1/2 rounded-full bg-muted/70" />
        </div>
      ) : error ? (
        <div className="flex flex-col items-start lg:gap-2 xl:gap-3">
          <p className="lg:text-[10px] xl:text-xs text-muted-foreground">{error}</p>
          <Button
            onClick={fetchQuote}
            className="rounded-full border border-gray-200 bg-white text-primary lg:text-[10px] xl:text-xs font-semibold shadow-sm hover:border-primary/40"
          >
            Try again
          </Button>
        </div>
      ) : quote ? (
        <div className="flex flex-col lg:gap-2 xl:gap-3">
          <p className="lg:text-[10px] xl:text-[12px] 2xl:text-sm text-foreground leading-relaxed">
            <Quote className="inline lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-primary/40 mr-1 -mt-0.5" />
            {quote.text}
          </p>
          <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground font-medium">
            — {quote.author}
          </p>
        </div>
      ) : (
        <p className="lg:text-[10px] xl:text-xs text-muted-foreground">
          No quote available right now.
        </p>
      )}
    </div>
  );
};

export default DailyQuoteWidget;
