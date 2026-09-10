"use client";

import Logo from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

const portfolioUrl = "https://www.samuelzeliska.sk/#projekty";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-b border-primary/20 bg-primary/10 px-6 py-2.5 text-center text-xs font-semibold tracking-wide text-foreground">
        UKÁŽKOVÝ PROJEKT — nejde o skutočné beauty štúdio ani rezervačný web
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Hlavná navigácia">
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-muted transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-hover sm:inline-flex">
              Späť na portfólio <ExternalLink className="h-4 w-4" />
            </a>
            <button type="button" aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground md:hidden">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div id="mobile-navigation" className="border-t border-border bg-background px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-medium">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 text-muted hover:bg-primary/5 hover:text-primary">
                  {item.label}
                </a>
              ))}
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 px-3 py-2 font-semibold text-primary">
                Späť na portfólio <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
