import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Contact</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Reach out for cohort questions, partnerships, or general information.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-3xl p-8">
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-navy-700 dark:text-navy-100" />
              <div>
                <div className="font-semibold text-slate-950 dark:text-white">Email</div>
                <a href="mailto:warkstech@gmail.com" className="text-sm text-slate-600 hover:text-navy-700 dark:text-slate-300 dark:hover:text-white">
                  warkstech@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-navy-700 dark:text-navy-100" />
              <div>
                <div className="font-semibold text-slate-950 dark:text-white">Location</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Pakistan-based, remote-friendly cohorts</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="mt-1 h-5 w-5 text-navy-700 dark:text-navy-100" />
              <div>
                <div className="font-semibold text-slate-950 dark:text-white">Response time</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Usually within 24 to 48 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Basic info</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-950 dark:text-white">Programs</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Web Dev, AI, Cybersecurity</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-950 dark:text-white">Format</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Static website, application-led</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-950 dark:text-white">Duration</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">4 weeks per cohort</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-950 dark:text-white">Status</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Applications open via Google Form</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
