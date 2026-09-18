'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Home } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels./photos/12730846/pexels-photo-12730846.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Pool table under warm light"
          className="h-full w-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* Felt tint */}
        <div className="absolute inset-0 felt-tint opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center pt-16 sm:pt-20">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-2 backdrop-blur-sm"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/80 text-[10px] font-bold text-accent-foreground">
            8
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            {siteData.name}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl"
        >
          {siteData.heroHeading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {siteData.heroSubheading}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
        >
          <button
            onClick={() => scrollTo('#house')}
            className="group flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/20"
          >
            <Home className="h-4 w-4" />
            Explore the House
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('#players')}
            className="group flex items-center gap-2 rounded-md border border-border/60 bg-background/30 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-background/50"
          >
            <Users className="h-4 w-4" />
            Meet the Players
          </button>
        </motion.div>

        {/* Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-3 text-xs tracking-widest text-muted-foreground sm:mt-14"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border/50 text-sm">🎱</span>
          <span className="uppercase">{siteData.heroIndicator}</span>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border/40 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-muted-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
}
