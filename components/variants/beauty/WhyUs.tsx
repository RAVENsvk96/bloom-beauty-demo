"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { whyUs } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BeautyWhyUs() {
  return (
    <section className="overflow-hidden bg-background px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="relative">
          <div className="relative aspect-[4/5] w-[88%] overflow-hidden sm:w-[82%] lg:w-[88%]">
            <Image src="/images/beauty-gallery-1.jpg" alt="Profesionálna beauty starostlivosť" fill sizes="(max-width: 1023px) 88vw, 42vw" className="object-cover" />
          </div>
          <div className="absolute bottom-8 right-0 max-w-[13rem] bg-primary px-6 py-7 text-white sm:max-w-[15rem] sm:px-8">
            <p className="font-display text-3xl font-medium italic leading-none sm:text-4xl">Čas pre seba.</p>
            <p className="mt-4 text-[0.58rem] font-semibold uppercase leading-5 tracking-[0.18em] text-white/65">Pokoj · starostlivosť · detail</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <SectionHeading badge={whyUs.badge} title="Každý detail tvorí váš zážitok." description="Bloom spája odbornú starostlivosť s prostredím, v ktorom môžete spomaliť a cítiť sa prirodzene." />

          <div className="mt-12 border-t border-foreground/20">
            {whyUs.items.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-foreground/15 py-7 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-xl font-medium italic text-primary">0{index + 1}</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
