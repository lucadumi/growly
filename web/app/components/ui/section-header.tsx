import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

const SectionHeader = ({ title, description, className }: SectionHeaderProps) => {
  return (
    <div className={className}>
      <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
