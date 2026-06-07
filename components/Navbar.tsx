'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/site-data';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-navy-950/85">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-950 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-navy-900 text-sm font-bold text-white">
            W
          </span>
          <span>Warks</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-navy-700 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Open navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200/70 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-navy-950">
          <div className="container-page flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-navy-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
