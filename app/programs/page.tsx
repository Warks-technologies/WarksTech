import { programs } from '@/lib/site-data';
import { ProgramCard } from '@/components/ProgramCard';

export default function ProgramsPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Programs</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Every Warks program runs for four weeks and focuses on practical, portfolio-friendly learning.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </div>
  );
}
