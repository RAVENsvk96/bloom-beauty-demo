import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="#"
      aria-label="Bloom Beauty Studio — domov"
      className={`group inline-flex items-baseline gap-2 leading-none ${className}`}
    >
      <span className="font-display text-[2rem] font-medium tracking-[-0.035em] text-foreground transition-colors group-hover:text-primary sm:text-[2.2rem]">
        Bloom
      </span>
      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-primary">
        Beauty Studio
      </span>
    </Link>
  );
}
