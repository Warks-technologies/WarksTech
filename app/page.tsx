import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { benefits, programs } from '@/lib/site-data';
import { Hero } from '@/components/Hero';
import { ProgramCard } from '@/components/ProgramCard';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page py-8 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="section-title">Why choose Warks</h2>
          <p className="section-copy mt-3">A clean, focused experience designed to help students start building with confidence.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="glass-panel rounded-3xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white dark:bg-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 dark:bg-white/5">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Programs preview</h2>
              <p className="section-copy mt-3">Three focused cohorts built to give students practical skills and visible outcomes.</p>
            </div>
            <Link href="/programs" className="hidden items-center gap-2 text-sm font-semibold text-navy-700 md:inline-flex dark:text-navy-100">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="glass-panel grid gap-8 rounded-3xl p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Ready to start building?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Apply to the next Warks cohort and begin learning with a clear path, a practical project, and guided support.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Apply Now
              <CheckCircle2 className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
