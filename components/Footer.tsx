import Link from 'next/link';
import { navLinks } from '@/lib/site-data';

const socialLinks = [
  { label: 'Discord', href: 'https://discord.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 py-10 dark:border-white/10 dark:bg-white/5">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 text-lg font-semibold text-slate-950 dark:text-white">Warks</div>
          <p className="max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
            A project-based learning platform helping Pakistani students build real skills and real projects.
          </p>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">Pages</div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-navy-700 dark:text-slate-300 dark:hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">Social</div>
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-600 hover:text-navy-700 dark:text-slate-300 dark:hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-8 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Warks. All rights reserved.</p>
        <p>Built for focused learning.</p>
      </div>
    </footer>
  );
}
