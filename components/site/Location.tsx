'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink, Navigation } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';

export function Location() {
  const { location } = siteData;

  return (
    <section id="location" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Location
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
            {location.heading}
          </h2>
        </Reveal>

        <div className="mx-auto max-w-xl">
          {/* Contact info */}
          <Reveal>
            <div className="flex flex-col justify-center gap-6 rounded-2xl border border-border/30 bg-card/30 p-8 backdrop-blur-sm lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Address</p>
                  <p className="mt-1 text-base font-medium text-foreground">{location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="mt-1 text-base font-medium text-foreground">{location.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Social</p>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {location.social.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        className="rounded-full border border-border/40 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <motion.a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-2 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/20"
              >
                <Navigation className="h-4 w-4" />
                GET DIRECTIONS
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
