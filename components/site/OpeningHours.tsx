'use client';

import { Clock } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

export function OpeningHours() {
  const { hours } = siteData;

  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-2xl p-6 text-center sm:p-10 lg:p-14">
            <div className="absolute inset-0 spotlight opacity-30" />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-4xl">
                {hours.heading}
              </h2>
              <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
                {hours.schedule}
              </p>
              <p className="mt-2 font-serif text-2xl font-bold text-accent sm:text-4xl">
                {hours.time}
              </p>
              <div className="mx-auto mt-8 h-px w-24 bg-border/40" />
              <p className="mt-6 text-base italic text-muted-foreground">
                {hours.note}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
