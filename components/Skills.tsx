"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const PROFICIENCY = [
  { label: "Python", value: 90 },
  { label: "FastAPI / REST APIs", value: 88 },
  { label: "DSA & Problem Solving", value: 85 },
  { label: "LangChain / LangGraph", value: 85 },
  { label: "RAG & Vector Stores", value: 82 },
  { label: "SQL & Databases", value: 78 },
  { label: "C++", value: 75 },
];

const GROUPS = [
  {
    label: "Languages & Core CS",
    items: ["Python", "C++", "C", "SQL", "DSA", "OOP", "Git"],
  },
  {
    label: "Backend & Systems",
    items: ["FastAPI", "REST APIs", "Streamlit", "Jupyter Notebook"],
  },
  {
    label: "Data & ML",
    items: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    label: "Applied AI",
    items: [
      "LangChain",
      "LCEL",
      "LangGraph",
      "Hugging Face",
      "RAG",
      "FAISS",
      "ChromaDB",
      "Groq API",
      "Prompt Engineering",
      "LangSmith",
    ],
  },
];

function Bar({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between font-mono text-xs">
        <span className="text-text-primary">{label}</span>
        <span className="text-signal">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-signal to-violet"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">02 · Skills</span>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            The stack behind every pipeline
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_0.9fr]">
          <Reveal delay={0.05} className="space-y-6">
            {PROFICIENCY.map((p, i) => (
              <Bar key={p.label} label={p.label} value={p.value} delay={i * 0.08} />
            ))}
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            {GROUPS.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-text-faint">{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="cursor-default rounded-md border border-surface-border bg-surface px-3 py-1.5 font-mono text-xs text-text-primary transition-colors hover:border-signal/50 hover:text-signal"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
