"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { services } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function BeautyServices() {
  return (
    <section id="sluzby" className="relative overflow-hidden bg-surface px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 font-display text-[18rem] leading-none text-primary/[0.035] sm:text-[25rem]">B</div>

      <div className="relative mx-auto max-w-[90rem]">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              badge="Naše služby"
              title="Rituály pre vašu krásu."
              description="Každé ošetrenie prispôsobujeme vašim potrebám a výsledku, ktorý chcete dosiahnuť. Uvedené ceny sú súčasťou ukážkového konceptu."
            />

            <a href="#galeria" className="mt-9 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary transition hover:text-primary-hover">
              Objaviť atmosféru <ArrowDownRight className="size-4" />
            </a>
          </motion.div>

          <div className="border-t border-foreground/20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group grid gap-5 border-b border-foreground/15 py-8 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6 lg:py-10"
                >
                  <span className="font-display text-2xl font-medium italic text-primary/65">0{index + 1}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="size-4 text-primary" aria-hidden="true" />
                      <h3 className="font-display text-3xl font-medium tracking-[-0.025em] text-foreground transition-colors group-hover:text-primary sm:text-4xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{service.description}</p>
                  </div>
                  <p className="justify-self-start whitespace-nowrap border border-primary/25 px-4 py-2 text-xs font-semibold text-primary sm:justify-self-end">
                    {service.price}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
