"use client";

import { company } from "@/content/company";
import { heroFeatures } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

function HeroImage({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={
        mobile
          ? "relative mt-8 lg:hidden"
          : "relative mx-auto hidden w-full max-w-[36rem] lg:mx-0 lg:ml-auto lg:block"
      }
    >
      <div
        className={
          mobile
            ? "relative aspect-[5/4] w-full overflow-hidden"
            : "relative ml-auto aspect-[4/5] w-full overflow-hidden"
        }
      >
        <Image
          src={company.heroImage}
          alt="Beauty ošetrenie v Bloom Beauty Studio"
          fill
          priority
          sizes={mobile ? "(max-width: 1023px) 100vw" : "42vw"}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2021]/25 via-transparent to-transparent" />
      </div>

      <div
        className={
          mobile
            ? "absolute -bottom-5 left-4 border border-foreground/10 bg-surface px-5 py-4 shadow-[0_16px_45px_rgba(43,32,33,0.12)]"
            : "absolute -bottom-7 -left-16 w-52 border border-foreground/10 bg-surface p-6 shadow-[0_20px_60px_rgba(43,32,33,0.12)]"
        }
      >
        <p className={`${mobile ? "text-3xl" : "text-4xl"} font-display font-medium leading-none text-primary`}>
          Bloom
        </p>
        <p className="mt-2 text-[0.54rem] font-semibold uppercase leading-4 tracking-[0.2em] text-muted">
          Priestor pre krásu a pokoj
        </p>
      </div>

      {!mobile && (
        <p className="absolute -right-16 top-1/2 origin-center rotate-90 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-primary">
          Beauty · Nitra · 2026
        </p>
      )}
    </div>
  );
}

export default function BeautyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 pb-16 pt-[9.5rem] sm:px-10 sm:pt-[10.5rem] lg:min-h-[100svh] lg:px-14 lg:pb-10 lg:pt-[9.5rem]">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-background lg:bg-[linear-gradient(105deg,#f7f1ec_0%,#f7f1ec_62%,#eadbd5_62%,#eadbd5_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 -z-20 hidden size-80 rounded-full border border-primary/15 lg:block" />

      <div className="mx-auto grid max-w-[90rem] items-center gap-12 lg:min-h-[calc(100svh-12rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 lg:py-10"
        >
          <div className="mb-7 flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-primary sm:text-[0.68rem]">
            <span className="h-px w-10 bg-primary" />
            Nitra · Beauty studio
          </div>

          <h1 className="max-w-4xl font-display text-[clamp(3.45rem,7.8vw,8.2rem)] font-medium leading-[0.9] tracking-[-0.055em] text-foreground sm:text-[clamp(3.9rem,7.8vw,8.2rem)] lg:leading-[0.86]">
            Krása, ktorá
            <span className="block italic text-primary">rozkvitá</span>
            <span className="block pl-[20vw] sm:pl-28 lg:pl-36">s vami.</span>
          </h1>

          <HeroImage mobile />

          <div className="mt-12 grid max-w-3xl gap-7 border-t border-foreground/20 pt-7 md:grid-cols-[1fr_auto] md:items-end lg:mt-10">
            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Jemná starostlivosť, profesionálny prístup a pokojný priestor,
              v ktorom môžete spomaliť a venovať čas sebe.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#sluzby" className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-primary-hover">
                Objaviť služby <ArrowDownRight className="size-4" />
              </a>
              <a href="#galeria" className="inline-flex min-h-12 items-center justify-center gap-3 border border-foreground/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition hover:border-primary hover:text-primary">
                Pozrieť galériu <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-0 border-t border-foreground/10 pt-3 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted sm:grid-cols-3 sm:gap-5 sm:pt-5">
            {heroFeatures.map((item, index) => (
              <div key={item.text} className="flex items-center gap-3 border-b border-foreground/10 py-3 sm:border-0 sm:py-0">
                <span className="font-display text-lg font-medium text-primary">0{index + 1}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
}
