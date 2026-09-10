"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { Heart, LayoutTemplate, Sparkles } from "lucide-react";

const goals = [
  { icon: Sparkles, title: "Prémiový prvý dojem", text: "Jemná paleta, kvalitné fotografie a čistá typografia vytvárajú profesionálny charakter značky." },
  { icon: LayoutTemplate, title: "Prehľadná ponuka", text: "Služby a dôležité informácie sú usporiadané tak, aby sa v nich návštevníčka rýchlo zorientovala." },
  { icon: Heart, title: "Príjemný zážitok", text: "Responzívny návrh pôsobí pokojne a zrozumiteľne na mobile aj veľkej obrazovke." },
];

export default function BeautyReviews() {
  return (
    <section id="recenzie" className="bg-surface/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <SectionHeading badge="Ciele návrhu" title="Web postavený na dôvere a atmosfére." description="Táto sekcia predstavuje dizajnové ciele demo projektu. Neobsahuje recenzie skutočných klientiek." centered />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {goals.map((item, index) => { const Icon = item.icon; return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div>
                <h3 className="mt-7 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-4 leading-7 text-muted">{item.text}</p>
              </motion.article>
            ); })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
