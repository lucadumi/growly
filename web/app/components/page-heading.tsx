import { Shrub } from "lucide-react";
import type React from "react";

type PageHeadingProps = {
  badgeLabel: string;
  title: React.ReactNode;
  description: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  actions?: React.ReactNode;
  className?: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({
  badgeLabel,
  title,
  description,
  actions,
  className,
}) => {
  return (
    <div
      className={`flex lg:gap-3 xl:gap-4 items-center justify-between ${
        className ?? ""
      }`}
    >
      <div className="space-y-2">
        <div className="space-y-1">
          <h1
            className={`font-bold ${
              className ?? "lg:text-lg xl:text-xl 2xl:text-2xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-muted-foreground lg:max-w-3xl xl:max-w-4xl ${
              className ?? "lg:text-[11px] xl:text-xs 2xl:text-sm"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
};

export default PageHeading;
