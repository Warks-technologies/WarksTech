import { programs } from '@/lib/site-data';
import { ProgramsCatalog } from '@/components/ProgramsCatalog';

export default function ProgramsPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Programs</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Warks programs are short, focused cohorts built around practical, portfolio-friendly learning.
        </p>
      </div>

      <ProgramsCatalog programs={programs} />
    </div>
  );
}
