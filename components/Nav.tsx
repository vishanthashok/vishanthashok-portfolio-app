'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-edge bg-bg/70 backdrop-blur-[12px]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-xl font-bold text-fg">
          VA
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-mute transition-colors hover:text-fg"
              {...(link.href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-sage/25 px-3.5 py-1.5 font-mono text-xs text-sage"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
          Open to Roles
        </a>
      </nav>
    </header>
  );
}
