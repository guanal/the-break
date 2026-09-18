'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

export function OwnerCorner() {
  const { owner } = siteData;

  return (
    <section id="owner" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 spotlight opacity-50" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-10">
        {/* Section title */}
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            {owner.sectionTitle}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
            {owner.subtitle}
          </h2>
        </Reveal>

        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photos grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {owner.photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  'group relative overflow-hidden rounded-lg border border-border/30',
                  i === 0 && 'col-span-2 row-span-2 aspect-square',
                  i !== 0 && 'aspect-[3/4]'
                )}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover grayscale-[30%] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>

          {/* Bio + quote */}
          <div>
            <Reveal>
              <h3 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                {owner.name}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {owner.bio}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 border-l-2 border-accent/60 pl-6">
                <Quote className="mb-3 h-6 w-6 text-accent/70" />
                <p className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
                  {owner.quote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-border/40" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  The Owner
                </span>
                <div className="h-px flex-1 bg-border/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
