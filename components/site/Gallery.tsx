'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

export function Gallery() {
  const { gallery } = siteData;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + gallery.images.length) % gallery.images.length
    );
  }, [gallery.images.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % gallery.images.length
    );
  }, [gallery.images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  // Masonry-like asymmetric layout using column spans
  const spanClasses = [
    'sm:col-span-2 sm:row-span-2',
    '',
    '',
    'sm:col-span-2',
    '',
    '',
    'sm:row-span-2',
    '',
    'sm:col-span-2',
    '',
    '',
    '',
  ];

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Gallery
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
            {gallery.heading}
          </h2>
        </Reveal>

        {/* Masonry grid */}
        <div className="grid auto-rows-[140px] grid-cols-2 gap-2.5 sm:auto-rows-[180px] sm:gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.images.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.06}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              className={cn('group relative cursor-pointer overflow-hidden rounded-lg border border-border/20', spanClasses[i % spanClasses.length])}
            >
              <motion.button
                onClick={() => setLightboxIndex(i)}
                className="h-full w-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-border/40 bg-background/60 px-2.5 py-1 text-[10px] font-medium tracking-wide text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {img.category}
                  </span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground transition-colors hover:border-accent/50"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground transition-colors hover:border-accent/50 sm:left-8 sm:h-11 sm:w-11"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={gallery.images[lightboxIndex].src}
              alt={gallery.images[lightboxIndex].alt}
              className="max-h-[80vh] max-w-[78vw] rounded-lg object-contain sm:max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground transition-colors hover:border-accent/50 sm:right-8 sm:h-11 sm:w-11"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Category + counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-xs uppercase tracking-widest text-accent">
                {gallery.images[lightboxIndex].category}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {lightboxIndex + 1} / {gallery.images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
