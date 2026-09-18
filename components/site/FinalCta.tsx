'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

export function FinalCta() {
  const { finalCta } = siteData;

  const scrollToLocation = () => {
    const el = document.querySelector('#location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden py-20 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={finalCta.backgroundImage}
          alt="Pool tables in the house"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 felt-tint opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {finalCta.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {finalCta.subheading}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <motion.button
            onClick={scrollToLocation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:shadow-xl hover:shadow-accent/30 sm:px-9 sm:py-4"
          >
            {finalCta.buttonText}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}
