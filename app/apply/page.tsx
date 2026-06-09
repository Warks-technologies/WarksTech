import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf04AzCUxONAEM7Jh_ANlR0mN4mqdcQc4z64bJ-IzWqqsClSA/viewform?usp=header';

export default function ApplyPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Apply for Cybersecurity Foundations Internship
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Applications are open only for the Cybersecurity Foundations Internship. All other programs are currently closed.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Application steps</h2>
          <ol className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            <li>1. Open the internship form below.</li>
            <li>2. Share your basic details and interest in cybersecurity.</li>
            <li>3. Wait for the next intake update.</li>
          </ol>

          <Link
            href={formUrl}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            target="_blank"
            rel="noreferrer"
          >
            Open Google Form
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="glass-panel flex min-h-[650px] items-center justify-center rounded-3xl p-8 text-center">
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Cybersecurity internship form</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Use the button on the left to open the live application form for the internship.
            </p>
            <Link href="/programs" className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-navy-300 hover:text-navy-700 dark:border-white/15 dark:text-slate-200">
              View all programs
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
