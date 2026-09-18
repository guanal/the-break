'use client';

import { motion } from 'framer-motion';
import { Circle, Users, Flame } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

const iconMap: Record<string, React.ElementType> = {
  circle: Circle,
  users: Users,
  flame: Flame,
};

export function TheHouse() {
  const { house } = siteData;

  return (
    <section id="house" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
            {house.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {house.description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {house.highlights.map((hl, i) => {
            const Icon = iconMap[hl.icon] ?? Circle;
            return (
              <Reveal key={i} delay={i * 0.15}>
                <div className="group glass-card h-full rounded-xl p-6 text-center transition-all hover:border-accent/30 sm:p-8">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:border-accent/50">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {hl.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {hl.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
