'use client';

import { motion } from 'framer-motion';
import { Circle, Handshake, MessageCircle, Sparkles, Trophy } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

const iconMap: Record<string, React.ElementType> = {
  circle: Circle,
  handshake: Handshake,
  'message-circle': MessageCircle,
  sparkles: Sparkles,
  trophy: Trophy,
};

export function HouseRules() {
  const { houseRules } = siteData;

  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <Reveal className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
            {houseRules.heading}
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {houseRules.rules.map((rule, i) => {
            const Icon = iconMap[rule.icon] ?? Circle;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-center gap-3 rounded-xl border border-border/30 bg-card/30 p-4 backdrop-blur-sm transition-colors hover:border-accent/30 sm:gap-4 sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-lg text-foreground">
                    {rule.text}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
