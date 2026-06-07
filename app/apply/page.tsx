import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSco2URMRQ1TYZSwS8Igj5x3xL42xrnakmmnCw8FkeAvKCg-0A/viewform?usp=publish-editor';

export default function ApplyPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Apply to Warks</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Submit your application through the Google Form below and we’ll review your details for the next cohort.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Application steps</h2>
          <ol className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            <li>1. Open the form or use the embedded version below.</li>
            <li>2. Share your basic details and area of interest.</li>
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
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Google Form embed</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Connect your live Google Form link here to embed applications directly on this page.
            </p>
            <Link
              href={formUrl}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-navy-300 hover:text-navy-700 dark:border-white/15 dark:text-slate-200"
              target="_blank"
              rel="noreferrer"
            >
              Replace with live form
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
