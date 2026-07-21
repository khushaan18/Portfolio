"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Reveal from "./Reveal";

// Get a free access key at https://web3forms.com — paste it below.
const WEB3FORMS_ACCESS_KEY = "0f81b27b-0a7d-41c4-850a-2350d84deef2";

const SOCIALS = [
  { label: "Email", value: "khushaansaini62@gmail.com", href: "mailto:khushaansaini62@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/khushaan18", href: "https://github.com/khushaan18", icon: Github },
  {
    label: "LinkedIn",
    value: "khushaan-saini",
    href: "https://www.linkedin.com/in/khushaan-saini-86a0ba275/",
    icon: Linkedin,
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">07 · Contact</span>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Let&apos;s build something
          </h2>
          <p className="mt-2 max-w-xl font-body text-sm text-text-muted">
            Open to internships and SDE roles.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal delay={0.05}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New message from portfolio site" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-md border border-surface-border bg-surface px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-faint focus:border-signal"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="mt-2 w-full rounded-md border border-surface-border bg-surface px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-faint focus:border-signal"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="mt-2 w-full resize-none rounded-md border border-surface-border bg-surface px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-faint focus:border-signal"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-opacity disabled:opacity-60"
              >
                <Send className="h-3.5 w-3.5" />
                {status === "sending" ? "Sending…" : "Send message"}
              </motion.button>

              {status === "success" && (
                <p className="font-mono text-xs text-signal">Sent. I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="font-mono text-xs text-amber">
                  Something went wrong — add your Web3Forms access key in Contact.tsx, then try again.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-4 lg:w-72">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="card-glow flex items-center gap-3 rounded-xl border border-surface-border bg-surface p-4 transition-colors hover:border-signal/40"
              >
                <span className="rounded-full border border-surface-border p-2 text-signal">
                  <s.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-faint">{s.label}</p>
                  <p className="mt-0.5 font-body text-sm text-text-primary">{s.value}</p>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
