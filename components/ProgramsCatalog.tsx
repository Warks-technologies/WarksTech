'use client';

import { useMemo, useState } from 'react';
import { Search, ShieldCheck } from 'lucide-react';
import { ProgramCard } from '@/components/ProgramCard';
import type { Program } from '@/lib/site-data';

type ProgramsCatalogProps = {
  programs: Program[];
};

export function ProgramsCatalog({ programs }: ProgramsCatalogProps) {
  const [query, setQuery] = useState('');

  const filteredPrograms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...programs]
      .sort((left, right) => Number(right.applicationStatus === 'open') - Number(left.applicationStatus === 'open'))
      .filter((program) => {
        if (!normalizedQuery) return true;

        return [program.title, program.description, program.duration, program.applicationStatus, ...program.skills]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);
      });
  }, [programs, query]);

  const openProgram = programs.find((program) => program.applicationStatus === 'open');
  const openProgramUrl = openProgram?.applyUrl;

  return (
    <div className="mt-12 space-y-8">
      <div className="glass-panel rounded-3xl border border-emerald-200/60 bg-emerald-50/70 p-6 dark:border-emerald-500/20 dark:bg-emerald-950/20">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Accepting applications now
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Cybersecurity Foundations Internship is open
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              All other programs are currently closed. Search below to explore the catalog and review the available options.
            </p>
          </div>
          {openProgramUrl ? (
            <a
              href={openProgramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Apply for internship
            </a>
          ) : null}
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-4 sm:p-5">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <Search className="h-4 w-4 shrink-0" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search by program, skill, duration, or status"
            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
          />
        </label>
        <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Showing {filteredPrograms.length} program{filteredPrograms.length === 1 ? '' : 's'}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </div>
  );
}
