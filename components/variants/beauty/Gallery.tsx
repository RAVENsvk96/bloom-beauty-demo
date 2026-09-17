"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { gallery } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BeautyGallery() {
  if (gallery.length < 3) return null;

  return (
    <section id="galeria" className="overflow-hidden bg-surface px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[90rem]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <SectionHeading badge="Galéria" title="Pokoj ukrytý v detailoch." />
            <p className="max-w-xl text-sm leading-7 text-muted lg:justify-self-end lg:text-right sm:text-base sm:leading-8">
              Svetlo, jemné materiály a pokojná atmosféra vytvárajú priestor, v ktorom sa profesionálna starostlivosť stáva zážitkom.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr_0.8fr] lg:items-end lg:gap-7">
            <figure className="group sm:mt-20 lg:mt-0 lg:pb-16">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={gallery[1].image} alt={gallery[1].alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 27vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted"><span>Detail starostlivosti</span><span className="font-display text-lg text-primary">01</span></figcaption>
            </figure>

            <figure className="group sm:col-span-2 lg:col-span-1">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">
                <Image src={gallery[0].image} alt={gallery[0].alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 40vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted"><span>Profesionálny prístup</span><span className="font-display text-lg text-primary">02</span></figcaption>
            </figure>

            <figure className="group lg:pb-16">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={gallery[2].image} alt={gallery[2].alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 27vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted"><span>Pokojná atmosféra</span><span className="font-display text-lg text-primary">03</span></figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
