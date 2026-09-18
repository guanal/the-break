'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

export function Regulars() {
  const { regulars } = siteData;

  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <Reveal className="mb-14 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-4xl">
            {regulars.heading}
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regulars.people.map((person, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group flex items-center gap-4 rounded-xl border border-border/30 bg-card/40 p-4 backdrop-blur-sm transition-colors hover:border-accent/30"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-border/40 transition-all group-hover:border-accent/50">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="h-full w-full object-cover grayscale-[40%] transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {person.name}
                  </h3>
                  <p className="mt-0.5 truncate text-sm text-muted-foreground">
                    {person.line}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
