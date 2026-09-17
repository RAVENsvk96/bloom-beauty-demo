import Logo from "@/components/ui/Logo";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 py-12 sm:px-10 md:grid-cols-[1fr_auto] md:items-end lg:px-14">
        <div>
          <Logo />
          <p className="mt-5 max-w-xl text-xs leading-6 text-muted">Ukážkový webový koncept vytvorený Samuelom Zelískom. Nejde o skutočné beauty štúdio ani ponuku služieb.</p>
        </div>
        <a href="https://www.samuelzeliska.sk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary transition hover:text-primary-hover">
          www.samuelzeliska.sk <ArrowUpRight className="size-4" />
        </a>
      </div>
      <div className="border-t border-foreground/10 px-6 py-4 text-center text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-muted">© {new Date().getFullYear()} Samuel Zelíska · Portfolio demo projekt</div>
    </footer>
  );
}
