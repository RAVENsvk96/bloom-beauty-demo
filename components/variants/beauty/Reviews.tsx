"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";

const goals = [
  { title: "Prémiový prvý dojem", text: "Editorial typografia, tlmená paleta a kvalitné fotografie vytvárajú zapamätateľný charakter značky." },
  { title: "Prehľadná ponuka", text: "Služby a ceny majú jasnú hierarchiu, vďaka ktorej sa návštevníčka rýchlo zorientuje." },
  { title: "Príjemný zážitok", text: "Rozloženie zostáva pokojné, čitateľné a prirodzené na mobile aj veľkej obrazovke." },
];

export default function BeautyReviews() {
  return (
    <section id="recenzie" className="relative overflow-hidden bg-[#2b2021] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
      <div className="pointer-events-none absolute -right-20 -top-36 font-display text-[26rem] italic leading-none text-white/[0.025]">B</div>
      <div className="relative mx-auto max-w-[90rem]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <SectionHeading badge="Ciele návrhu" title="Dizajn, ktorý buduje dôveru." description="Táto sekcia vysvetľuje zámer ukážkového projektu. Neobsahuje vymyslené hodnotenia ani recenzie klientiek." inverted />

            <div className="border-t border-white/20">
              {goals.map((item, index) => (
                <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-display text-2xl italic text-[#d6a7b2]">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
