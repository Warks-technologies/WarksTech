import Link from 'next/link';
import type { Program } from '@/lib/site-data';

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  const Icon = program.icon;

  return (
    <article className="glass-panel flex h-full flex-col rounded-3xl p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white dark:bg-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{program.title}</h3>
        <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700 dark:bg-navy-950 dark:text-navy-100">
          {program.duration}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{program.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-200">
        {program.skills.map((skill) => (
          <li key={skill} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-600" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href="/apply"
          className="inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
        >
          Apply
        </Link>
      </div>
    </article>
  );
}
