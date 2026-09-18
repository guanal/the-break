'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

export function TwoTables() {
  const { tables } = siteData;
  const table01 = tables.table01;
  const table02 = tables.table02;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            The Tables
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
            {tables.heading}
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Table 01 */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-2xl border border-border/30">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={table01.image}
                  alt={table01.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
                  {table01.badge}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background/60 font-serif text-sm font-bold text-accent backdrop-blur-sm">
                    {table01.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                    {table01.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-accent">{table01.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {table01.description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Table 02 */}
          <Reveal delay={0.15}>
            <div className={cn('group relative overflow-hidden rounded-2xl border border-accent/20')}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={table02.image}
                  alt={table02.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 felt-texture opacity-30" />
                <span className="absolute left-5 top-5 rounded-full border border-accent/50 bg-accent/20 px-3 py-1 text-xs font-semibold tracking-wide text-accent backdrop-blur-sm">
                  {table02.badge}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background/60 font-serif text-sm font-bold text-accent backdrop-blur-sm">
                    {table02.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                    {table02.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-accent">{table02.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {table02.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
