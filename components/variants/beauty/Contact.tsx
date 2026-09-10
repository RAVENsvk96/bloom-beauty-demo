"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function BeautyContact() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-surface/50 px-6 py-24">
      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <SectionHeading badge="Demo projekt" title="Páči sa vám tento beauty koncept?" description="Toto je ukážka dizajnu a vývoja, nie stránka skutočného štúdia. Rezervácie ani osobné údaje tu neprijímame." centered />
          <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-border bg-surface p-8 text-center shadow-xl shadow-primary/5 sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><ShieldCheck className="h-6 w-6" /></div>
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Bez fiktívnych rezervácií a kontaktov</h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">Telefón, email, adresa a mapa sú v demo verzii zámerne vypnuté. Ak hľadáte autora projektu, pokračujte na jeho portfólio.</p>
            <a href="https://www.samuelzeliska.sk/#kontakt" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-hover">
              <Sparkles className="h-5 w-5" /> Kontaktovať autora <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
