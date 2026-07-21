"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ParticleField from "./ParticleField";
import AnimatedCounter from "./AnimatedCounter";

const ROLES = [
  "backend systems",
  "RESTful APIs",
  "RAG pipelines",
  "agentic AI",
  "LLM orchestration",
];

function useTypewriter(words: string[], typeSpeed = 65, deleteSpeed = 35, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="top" className="relative overflow-hidden bg-ink pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-cell opacity-[0.3] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0">
        <ParticleField />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-signal/15 blur-3xl animate-float-slow"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-64 h-64 w-64 rounded-full bg-violet/15 blur-3xl animate-float"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-signal"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          open to internships &amp; SDE roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-4xl font-semibold leading-[1.1] text-text-primary sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m <span className="gradient-text">Khushaan Saini</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 flex h-8 items-center justify-center font-mono text-lg text-text-muted sm:text-xl"
        >
          <span>I build&nbsp;</span>
          <span className="text-signal">{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-[2px] animate-blink bg-signal" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-balance font-body leading-relaxed text-text-muted"
        >
          Software Engineering undergraduate at Thapar Institute, focused on scalable backend
          architecture and clean design patterns — with applied work in LangChain, RAG, and
          agentic LLM pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
            View projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#resume"
            className="rounded-full border border-surface-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-text-primary transition-colors hover:border-signal hover:text-signal"
          >
            Resume
          </a>
          <div className="flex items-center gap-3 pl-2">
            <a
              href="https://github.com/khushaan18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-surface-border p-2.5 text-text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/khushaan-saini-86a0ba275/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-surface-border p-2.5 text-text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:khushaansaini62@gmail.com"
              aria-label="Email"
              className="rounded-full border border-surface-border p-2.5 text-text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-surface-border pt-6"
        >
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-text-faint">Precision</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-text-primary">
              <AnimatedCounter value={90} suffix="%+" />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-text-faint">Latency cut</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-text-primary">
              <AnimatedCounter value={70} suffix="%" />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-text-faint">CGPA</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-text-primary">8.5/10</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
