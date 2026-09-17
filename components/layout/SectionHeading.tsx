type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverted?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto text-center" : ""}>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className={`h-px w-9 ${inverted ? "bg-white/45" : "bg-primary"}`} />
        <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.3em] ${inverted ? "text-white/65" : "text-primary"}`}>
          {badge}
        </p>
      </div>

      <h2 className={`mt-6 max-w-3xl font-display text-[clamp(2.75rem,5vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.045em] ${centered ? "mx-auto" : ""} ${inverted ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${centered ? "mx-auto" : ""} ${inverted ? "text-white/62" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
