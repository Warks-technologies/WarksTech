import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { programs, whyChooseCards, whyChooseQuote } from '@/lib/site-data';
import { Hero } from '@/components/Hero';
import { ProgramCard } from '@/components/ProgramCard';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page py-8 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Why Choose <span className="text-navy-600 dark:text-navy-300">Warks?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Practical learning, guided support, and portfolio-ready outcomes for students who want to build real skills.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="glass-panel relative overflow-hidden rounded-3xl p-6">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl"
                  style={{ background: card.accent }}
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-white shadow-soft dark:bg-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.description}</p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-16 max-w-4xl text-center text-base italic leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {whyChooseQuote}
        </p>
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
