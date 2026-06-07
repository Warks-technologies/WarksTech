import { benefits, highlights } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">About Warks</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Warks exists to make practical learning simple, structured, and outcome-driven for Pakistani students.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Our mission</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            We help students build confidence through project-based learning that feels approachable, relevant, and useful.
          </p>
        </section>

        <section className="glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">What makes us different</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Warks keeps the experience focused: short cohorts, practical work, and a minimal interface that gets straight to the point.
          </p>
        </section>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {benefits.slice(0, 2).map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="glass-panel rounded-3xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white dark:bg-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-navy-700 dark:text-navy-100" />
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
