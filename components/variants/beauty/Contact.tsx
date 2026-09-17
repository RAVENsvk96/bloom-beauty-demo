"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BeautyContact() {
  return (
    <section id="kontakt" className="overflow-hidden bg-background px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="mx-auto max-w-[90rem]">
        <div className="grid overflow-hidden border border-foreground/15 bg-surface lg:grid-cols-[1fr_0.78fr]">
          <div className="p-8 sm:p-12 lg:p-16 xl:p-20">
            <div className="flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-primary"><span className="h-px w-9 bg-primary" />Demo projekt</div>
            <h2 className="mt-7 max-w-4xl font-display text-[clamp(3.1rem,5.6vw,6.3rem)] font-medium leading-[0.92] tracking-[-0.05em] text-foreground">
              Páči sa vám tento <span className="italic text-primary">koncept?</span>
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Bloom je ukážka dizajnu a vývoja, nie stránka skutočného štúdia. Ak hľadáte podobnú prezentáciu pre svoju značku, kontaktujte autora projektu.
            </p>
            <a href="https://www.samuelzeliska.sk/#kontakt" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-primary-hover">
              Kontaktovať autora <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="flex flex-col justify-between bg-[#eadbd5] p-8 sm:p-12 lg:p-14">
            <p className="font-display text-4xl font-medium italic leading-[0.95] text-primary sm:text-5xl">Bez fiktívnych rezervácií a osobných údajov.</p>
            <div className="mt-16 border-t border-primary/20 pt-6 text-[0.6rem] font-semibold uppercase leading-6 tracking-[0.18em] text-primary/75">
              <p>Samostatný demo projekt</p>
              <p>Web dizajn · Frontend vývoj</p>
              <p>Samuel Zelíska · 2026</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
