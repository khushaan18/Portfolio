"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

const EDUCATION = [
  {
    school: "Thapar Institute of Engineering and Technology",
    degree: "B.E. Electronics and Computer Engineering",
    score: "8.5 / 10 CGPA",
    period: "Jul 2023 — Jul 2027",
  },
  {
    school: "MDS Senior Secondary School",
    degree: "Higher Secondary (12th, CBSE)",
    score: "81%",
    period: "Jun 2022 — Jul 2023",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">01 · About</span>
        </Reveal>

        <div className="mt-6 grid gap-14 md:grid-cols-2">
          <Reveal delay={0.05}>
            <h2 className="text-balance font-display text-2xl font-semibold leading-snug text-text-primary sm:text-3xl">
              Backend-first, with a fluency in how modern AI systems are wired together.
            </h2>
            <p className="mt-6 text-balance font-body leading-relaxed text-text-muted">
              I design, develop, and integrate scalable, maintainable systems using modern
              software engineering principles and design patterns. My core strength is RESTful
              API development, backend architecture, and Agile-based product development
              always with an eye on scalability, performance, and clean code.
            </p>
            <p className="mt-4 text-balance font-body leading-relaxed text-text-muted">
              Alongside that, I&apos;ve built applied experience in AI/ML pipelines and LLM
              orchestration using LangChain and Retrieval-Augmented Generation to turn language
              models into dependable, production-shaped services rather than demos.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { k: "Focus", v: "Backend & Agentic AI" },
                { k: "Status", v: "Open to internships" },
                { k: "Stack", v: "Python · FastAPI" },
              ].map((item) => (
                <div key={item.k} className="border-l border-surface-border pl-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-faint">{item.k}</p>
                  <p className="mt-1 font-body text-sm text-text-primary">{item.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <div className="mb-6 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-signal" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-text-faint">Education</h3>
              </div>

              <div className="relative space-y-8 border-l border-surface-border pl-6">
                {EDUCATION.map((ed, i) => (
                  <motion.div
                    key={ed.school}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-ink" />
                    <h4 className="font-display text-base font-semibold text-text-primary">{ed.school}</h4>
                    <p className="mt-1 font-body text-sm text-text-muted">{ed.degree}</p>
                    <div className="mt-2 flex items-center gap-3 font-mono text-xs">
                      <span className="text-signal">{ed.score}</span>
                      <span className="text-text-faint">{ed.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
