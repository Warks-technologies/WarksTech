import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { stats } from '@/lib/site-data';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(47,93,244,0.14),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:24px_24px] opacity-40 dark:opacity-20" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-sm font-medium text-navy-800 dark:border-navy-800 dark:bg-navy-950/60 dark:text-navy-100">
            <BadgeCheck className="h-4 w-4" />
            Project-based learning for Pakistani students
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Build Real Projects. Build Your Future.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Warks helps students learn practical web, AI, and cybersecurity skills through short, focused cohorts built around real outcomes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-navy-300 hover:text-navy-700 dark:border-white/15 dark:text-slate-200"
            >
              View details
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-4">
                <div className="text-2xl font-semibold text-slate-950 dark:text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8">
          <div className="rounded-2xl bg-navy-950 p-6 text-white shadow-soft">
            <div className="text-sm uppercase tracking-[0.2em] text-navy-200">Warks Cohort</div>
            <div className="mt-4 text-2xl font-semibold">Learn. Build. Ship.</div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Every cohort is built to keep students moving from concept to implementation without unnecessary complexity.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {['Guided lessons', 'Hands-on projects', 'Portfolio-ready output'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:text-slate-200">
                <span className="h-2.5 w-2.5 rounded-full bg-navy-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
