import type { SVGProps } from "react";
import Image from "next/image";

const appName = "FolloView";

const features = [
  {
    title: "Follow without the noise",
    description:
      "Track the sources you care about, then get a clean, focused view—no infinite feeds."
  },
  {
    title: "Organize with intent",
    description:
      "Save highlights, attach notes, and group items into lightweight collections you can revisit."
  },
  {
    title: "Stay in control",
    description:
      "See what changed, when it changed, and why it matters—so you can act at the right moment."
  },
  {
    title: "Built for calm",
    description:
      "Thoughtful defaults, accessible UI, and a pace that respects your attention."
  }
] as const;

const steps = [
  {
    title: "Pick what to follow",
    description: "Choose the updates you want to keep an eye on (products, creators, topics)."
  },
  {
    title: "FolloView keeps watch",
    description:
      "We surface meaningful changes and summarize what’s new—so you don’t have to check constantly."
  },
  {
    title: "Review and decide",
    description: "Scan the essentials, save what matters, and move on with confidence."
  }
] as const;

const timeline = [
  {
    label: "Now",
    title: "Design + core experience",
    description: "Refining the landing flow, information architecture, and interaction patterns."
  },
  {
    label: "Next",
    title: "Private alpha",
    description: "Small cohort testing, performance tuning, and accessibility checks."
  },
  {
    label: "Later",
    title: "Public launch (TBD)",
    description: "Timing will depend on quality and stability—no hard dates yet."
  }
] as const;

const faqs = [
  {
    q: "Is FolloView available yet?",
    a: "Not yet. This is a “coming soon” page while we build and validate the experience."
  },
  {
    q: "Will you collect emails for early access?",
    a: "No. This site doesn’t include any email capture or forms."
  },
  {
    q: "What platforms will Follo support?",
    a: "We’re starting with the core product and will share platform details closer to launch."
  },
  {
    q: "Is there a pricing plan?",
    a: "Pricing is still being explored. The goal is to keep the basics simple and accessible."
  },
  {
    q: "How can I contact you?",
    a: "Use the contact link in the footer (mailto placeholder)."
  }
] as const;

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 5l7 7-7 7M20 12H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <header className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Image
                src="/logo.svg"
                alt={`${appName} logo`}
                width={28}
                height={28}
                priority
                className="size-7"
              />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              {appName}
            </span>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
            {[
              ["Features", "#features"],
              ["How it works", "#how-it-works"],
              ["Status", "#status"],
              ["FAQ", "#faq"]
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="focus-ring text-sm text-white/70 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6">
        <section aria-labelledby="hero-title" className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-indigo-500/20 blur-3xl motion-safe:animate-float"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-emerald-400/10 blur-3xl motion-safe:animate-float"
            style={{ animationDelay: "1.2s" }}
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
            <span className="inline-block size-1.5 rounded-full bg-emerald-300/80" />
            Coming soon
          </div>

          <h1
            id="hero-title"
            className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
          >
            Follow what matters—without losing your focus.
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {appName} helps you keep an eye on important updates, organize what you’re tracking,
            and take action when the time is right—without constant checking.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-2 ring-1 ring-white/10">
              <ArrowRightIcon className="size-4 text-emerald-200" />
              Modern, accessible UI
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-2 ring-1 ring-white/10">
              <ArrowRightIcon className="size-4 text-pink-200" />
              Launch timing: quality first
            </span>
          </div>
        </section>

        <section id="features" aria-labelledby="features-title" className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 id="features-title" className="text-2xl font-semibold text-white">
                Features
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
                A few pillars we’re building around. The exact set may evolve as we learn.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="card p-5">
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" aria-labelledby="how-title" className="mt-16">
          <h2 id="how-title" className="text-2xl font-semibold text-white">
            How it works
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
            A simple loop: choose, monitor, review.
          </p>

          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((s, idx) => (
              <li key={s.title} className="card p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="status" aria-labelledby="status-title" className="mt-16">
          <div className="card p-6">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h2 id="status-title" className="text-2xl font-semibold text-white">
                  Status & timeline
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
                  No hard dates. We’ll ship when it feels fast, polished, and calm.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.03] px-3 py-2 text-xs text-white/60 ring-1 ring-white/10">
                Dates are intentionally non-committal
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {timeline.map((t) => (
                <div key={t.title} className="rounded-2xl bg-white/[0.02] p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-indigo-200">{t.label}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="mt-16">
          <h2 id="faq-title" className="text-2xl font-semibold text-white">
            FAQ
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
            Quick answers. If something isn’t here yet, it’s probably still being decided.
          </p>

          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="card group p-5">
                <summary className="focus-ring cursor-pointer list-none select-none text-sm font-semibold text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 place-items-center rounded-xl bg-white/[0.03] ring-1 ring-white/10 transition group-open:rotate-45"
                    >
                      <span className="text-lg leading-none text-white/70">+</span>
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="mt-16">
          <div className="hairline" />
          <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} {appName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="focus-ring text-sm text-white/60 hover:text-white"
                href="https://x.com/VexlsGG"
                target="_blank"
                rel="noreferrer"
              >
                X/Twitter
              </a>
              <a
                className="focus-ring text-sm text-white/60 hover:text-white"
                href="https://github.com/VexlsGG"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="focus-ring text-sm text-white/60 hover:text-white"
                href="mailto:hello@follo.example"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

