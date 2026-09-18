'use client';

import { siteData } from '@/lib/site-data';

export function Footer() {
  const { location, navLinks, name, shortTagline } = siteData;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/40 py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 border border-primary/40 text-xs font-bold text-primary">
                8
              </span>
              <span className="font-serif text-xl font-bold tracking-wider text-foreground">
                {name}
              </span>
            </div>
            <p className="mt-4 font-serif text-base italic text-muted-foreground">
              {shortTagline}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              Explore
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="group flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <p className="text-sm text-muted-foreground">{location.address}</p>
            <p className="mt-2 text-sm text-muted-foreground">{location.phone}</p>
            <div className="mt-4 flex flex-wrap gap-2">
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

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 {name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Good games. Good people. Good memories.
          </p>
        </div>
      </div>
    </footer>
  );
}
