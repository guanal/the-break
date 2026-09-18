'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

export function HallOfFame() {
  const { hallOfFame } = siteData;

  return (
    <section id="players" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 spotlight opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Hall of Fame
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
            {hallOfFame.heading}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {hallOfFame.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hallOfFame.players.map((player, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl border border-border/30"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={player.photo}
                    alt={player.name}
                    className="h-full w-full object-cover grayscale-[40%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  {/* Ball number badge */}
                  <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background/60 font-serif text-sm font-bold text-accent backdrop-blur-sm">
                    {i + 1}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {player.name}
                  </h3>
                  <p className="mt-1 text-sm italic text-accent">
                    &ldquo;{player.nickname}&rdquo;
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
