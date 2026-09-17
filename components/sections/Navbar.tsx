"use client";

import Logo from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const portfolioUrl = "https://www.samuelzeliska.sk/#projekty";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-[60] border-b border-[#3e292e] bg-[#2b2021] px-5 py-2.5 text-center text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-[0.65rem]">
        Ukážkový projekt — nejde o skutočné beauty štúdio ani rezervačný web
      </div>

      <header className="absolute left-0 right-0 top-[35px] z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[82px] max-w-[90rem] items-center justify-between px-6 sm:px-10 lg:px-14" aria-label="Hlavná navigácia">
          <Logo />

          <div className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 border border-foreground/20 px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground transition hover:border-primary hover:bg-primary hover:text-white sm:inline-flex"
            >
              Autor projektu <ArrowUpRight className="size-3.5" />
            </a>

            <button
              type="button"
              aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex size-11 items-center justify-center border border-foreground/20 text-foreground lg:hidden"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div id="mobile-navigation" className="border-t border-foreground/10 bg-background px-6 py-7 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between border-b border-foreground/10 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground"
                >
                  {item.label}
                  <span className="font-display text-lg font-medium text-primary">0{index + 1}</span>
                </a>
              ))}
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Autor projektu <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
