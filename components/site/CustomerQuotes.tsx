'use client';

import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

export function CustomerQuotes() {
  const { quotes } = siteData;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 felt-tint opacity-30" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-4xl">
            {quotes.heading}
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {quotes.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group glass-card relative h-full rounded-xl p-6 transition-all hover:border-accent/30 sm:p-8">
                <QuoteIcon className="mb-4 h-7 w-7 text-accent/40" />
                <p className="font-serif text-lg italic leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{item.text}&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-muted-foreground">
                  — {item.author}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
