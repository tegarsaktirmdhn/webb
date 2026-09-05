import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import {
  useScrollProgress,
  useCursorGlow,
  useSmoothAnchors,
} from "@/hooks/use-scroll-interactions";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Najwa Fadiyah Rahmah — HR Development & I/O Psychology" },
      {
        name: "description",
        content:
          "Personal portfolio of Najwa Fadiyah Rahmah, HR Development practitioner focused on industrial & organizational psychology, recruitment, and onboarding.",
      },
      {
        property: "og:title",
        content: "Najwa Fadiyah Rahmah — HR Development & I/O Psychology",
      },
      {
        property: "og:description",
        content:
          "Recruitment, psychotest administration, onboarding and talent development — rooted in industrial & organizational psychology.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const experience = [
  {
    role: "Human Resources Development",
    org: "Rumah Sakit An-Nisa Tangerang · Full-time · On-site",
    period: "Nov 2025 — Present",
    points: [
      "CV screening & recruitment: initial applicant screening, qualification assessment, and coordination of hiring stages with each department.",
      "Interview & psychotest administration: organizing and facilitating candidate interviews and psychological tests for competency and values fit.",
      "Employee onboarding: administration, document verification, and introduction to workplace culture and regulations.",
      "New employee orientation: planning and delivering programs that help new hires adapt to the hospital environment.",
      "Employee database management: maintaining accurate records to support HR reporting.",
      "HR administrative support: documentation, correspondence, and cross-department coordination.",
    ],
  },
  {
    role: "Student Employee",
    org: "Ahmad Dahlan University, Yogyakarta · Contract · Hybrid",
    period: "May 2024 — Feb 2025",
    points: [
      "Tracing university graduates to learn about their employment status, place of employment, and post-graduation activities.",
    ],
  },
  {
    role: "Human Resources Development · Internship",
    org: "Rumah Sakit An-Nisa Tangerang · On-site",
    period: "Oct 2024 — Dec 2024",
    points: ["Assisted in recruitment and selection processes."],
  },
];

const certifications = [
  {
    issuer: "Talenesia",
    title: "Dasar Admin HR: Strategi Rekrutmen & Seleksi Karyawan",
    note: "Effective recruitment and selection strategy.",
  },
  {
    issuer: "Ioda Academy",
    title: "Merancang OKR & KPI untuk Praktisi HR",
    note: "Designing OKR and KPI frameworks for HR practitioners.",
  },
  {
    issuer: "MySkill",
    title: "Talent Management",
    note: "Identifying, developing, and retaining potential talent.",
  },
];

const organizations = [
  {
    name: "Ikatan Mahasiswa Muhammadiyah",
    role: "Secretary of Media and Documentation",
    period: "Feb 2023 — Jan 2024",
    detail:
      "Designed visual content, managed organizational correspondence, and supported event planning, report writing, and administrative documentation.",
  },
  {
    name: "Ikatan Pelajar Muhammadiyah",
    role: "General Secretary",
    period: "Dec 2019 — Nov 2020",
    detail:
      "Managed organizational administration, official correspondence, documentation, meeting agendas and minutes, and supported programme continuity.",
  },
  {
    name: "Ikatan Pelajar Muhammadiyah",
    role: "Member of Caderization",
    period: "Dec 2018 — Oct 2019",
    detail:
      "Organized cadre training, mentored members, and supported leadership regeneration and Islamic & Muhammadiyah values.",
  },
];

function PortraitTilt() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
      });
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      className="relative mx-auto max-w-[20rem] animate-float-soft will-change-transform [transition:transform_0.4s_cubic-bezier(0.2,0.7,0.2,1)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-warm opacity-70 blur-2xl"
      />
      <img
        src="/hgy.jpeg"
        width={768}
        height={960}
        alt="Portrait of Najwa Fadiyah Rahmah"
        className="aspect-4/5 w-full rounded-3xl object-cover shadow-lift"
      />
    </div>
  );
}

function Home() {
  useReveal();
  useSmoothAnchors();
  const progress = useScrollProgress();
  const glowRef = useCursorGlow();

  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-petal"
        style={{ transform: `scaleX(${progress})` }}
      />
      {/* Cursor-following glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden size-[400px] rounded-full bg-rose/20 blur-[90px] md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -left-40 top-[-10%] -z-10 size-[42rem] rounded-full bg-blush blur-[120px] animate-bloom"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-48 bottom-[-15%] -z-10 size-[38rem] rounded-full bg-gold/40 blur-[130px] animate-bloom [animation-delay:3s]"
      />

      <div className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-plum">
            Najwa Fadiyah Rahmah
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground sm:inline">
            Tangerang, Indonesia
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="anim-rise text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Najwa Fadiyah
              <span className="block italic text-gradient-petal">Rahmah</span>
            </h1>
            <p className="anim-rise [animation-delay:0.15s] mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              HR Recruitment at Rumah Sakit An-Nisa Kota Tangerang | Recruiter |
            </p>
            <div className="anim-rise [animation-delay:0.3s] mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                Get in touch <span aria-hidden>↗</span>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-secondary-foreground transition-colors duration-300 hover:border-rose hover:text-rose"
              >
                View experience
              </a>
            </div>
          </div>

          <div className="anim-rise [animation-delay:0.2s] md:col-span-5">
            <PortraitTilt />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-rose">
              About
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
              A gentle eye for
              <span className="italic text-rose"> people at work</span>
            </h2>
          </div>
          <div className="reveal [transition-delay:150ms] md:col-span-8">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              I have a deep interest in developing expertise in industrial and
              organizational psychology. I&apos;m committed to understanding the dynamics
              of workplace behaviour and applying psychological knowledge to improve
              individual and team performance — enthusiastic to learn and contribute to
              projects around human resource development and a positive work environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["I/O Psychology", "HR Development", "Psychometrics", "Onboarding"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-plum"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-y border-border/70 bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="reveal mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-rose">
              Pengalaman
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Experience
            </h2>
          </div>
          <ol className="relative ml-3 space-y-14 border-l border-border">
            {experience.map((item, i) => (
              <li
                key={item.role + item.period}
                className="reveal relative pl-8"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="absolute -left-[11px] top-1.5 size-5 rounded-full bg-gradient-warm ring-4 ring-card" />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold md:text-2xl">{item.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1.5 text-sm italic text-rose">{item.org}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-pretty text-sm leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="shrink-0 text-rose">
                        ✦
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-rose">
              Education
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Foundation
            </h2>
          </div>
          <div className="reveal [transition-delay:150ms] md:col-span-8">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              <h3 className="text-xl font-semibold">Ahmad Dahlan University</h3>
              <p className="mt-1 italic text-muted-foreground">Yogyakarta, Indonesia</p>
              <p className="mt-5 inline-block rounded-full bg-blush px-4 py-1.5 font-mono text-xs text-plum">
                Bachelor of Arts · Psychology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-plum text-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="reveal mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
              Licenses &amp; certifications
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Certifications
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <article
                key={cert.title}
                className="reveal rounded-3xl border border-background/15 bg-background/10 p-7 transition-transform duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                  {cert.issuer}
                </span>
                <h3 className="mt-4 text-balance text-lg font-semibold leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-3 text-pretty text-sm text-background/70">{cert.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-rose">
            Organizations
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {organizations.map((org, i) => (
            <article
              key={org.role + org.period}
              className="reveal rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform duration-500 hover:-translate-y-2 hover:shadow-lift"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="font-mono text-xs text-muted-foreground">{org.period}</p>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{org.name}</h3>
              <p className="mt-1 text-sm italic text-rose">{org.role}</p>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {org.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-warm">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
          <p className="reveal font-mono text-xs uppercase tracking-[0.32em] text-plum">
            Let&apos;s build better workplaces
          </p>
          <h2 className="reveal [transition-delay:120ms] mx-auto mt-6 max-w-[18ch] text-balance text-4xl font-semibold leading-[1] text-plum sm:text-6xl">
            Working <span className="italic">together</span>
          </h2>
          <a
            href="mailto:najwafadiyah772@email.com"
            className="reveal [transition-delay:240ms] mt-10 inline-flex items-center gap-2 rounded-full bg-plum px-8 py-4 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
          >
            najwafadiyah772@email.com <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            © 2026 Najwa Fadiyah Rahmah
          </span>
        </div>
      </footer>
    </main>
  );
}
