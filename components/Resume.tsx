"use client";

import { Download, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">06 · Resume</span>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            One page, no fluff
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-2xl border border-surface-border bg-surface">
          <div className="flex items-center justify-between border-b border-surface-border px-5 py-3">
            <span className="font-mono text-xs text-text-faint">Khushaan_Saini_Resume.pdf</span>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-1.5 font-mono text-xs text-text-muted transition-colors hover:border-signal hover:text-signal"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Open
              </a>
              <a
                href="/resume.pdf"
                download="Khushaan_Saini_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-md bg-signal px-3 py-1.5 font-mono text-xs text-ink transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-3.5 w-3.5" /> Download
              </a>
            </div>
          </div>

          <div className="aspect-[8.5/11] w-full bg-white sm:aspect-[8.5/6]">
            <iframe
              src="/resume.pdf#toolbar=0&view=FitH"
              title="Khushaan Saini Resume"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
