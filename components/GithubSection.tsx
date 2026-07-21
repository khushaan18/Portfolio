"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Users, BookOpen } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import {
  fetchGithubUser,
  fetchGithubRepos,
  summarizeLanguages,
  GithubUser,
  GITHUB_USERNAME,
} from "@/lib/github";

export default function GithubSection() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [languages, setLanguages] = useState<ReturnType<typeof summarizeLanguages>>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    (async () => {
      try {
        const [u, repos] = await Promise.all([fetchGithubUser(), fetchGithubRepos()]);
        setUser(u);
        setLanguages(summarizeLanguages(repos).slice(0, 6));
        setTotalStars(repos.reduce((sum, r) => sum + r.stargazers_count, 0));
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  return (
    <section id="github" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">04 · GitHub</span>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-balance font-display text-2xl font-semibold text-text-primary sm:text-3xl">
              Live from @{GITHUB_USERNAME}
            </h2>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Github className="h-3.5 w-3.5" /> Full profile
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </Reveal>

        {status === "error" && (
          <p className="mt-8 rounded-xl border border-surface-border bg-surface p-6 font-mono text-sm text-text-muted">
            Couldn&apos;t reach the GitHub API right now. Try refreshing, or view the{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-signal hover:underline"
            >
              profile directly
            </a>
            .
          </p>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.05} className="rounded-2xl border border-surface-border bg-surface p-6">
            {status === "loading" && (
              <div className="animate-pulse space-y-4">
                <div className="h-16 w-16 rounded-full bg-surface-2" />
                <div className="h-4 w-2/3 rounded bg-surface-2" />
                <div className="h-3 w-full rounded bg-surface-2" />
              </div>
            )}
            {user && (
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={user.avatar_url}
                    alt={user.name ?? user.login}
                    width={64}
                    height={64}
                    className="rounded-full border border-surface-border"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {user.name ?? user.login}
                    </h3>
                    <p className="font-mono text-xs text-text-faint">@{user.login}</p>
                  </div>
                </div>
                {user.bio && <p className="mt-4 font-body text-sm text-text-muted">{user.bio}</p>}

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-surface-border pt-5">
                  <div>
                    <p className="font-display text-2xl font-semibold text-text-primary">
                      <AnimatedCounter value={user.public_repos} />
                    </p>
                    <p className="mt-1 flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-text-faint">
                      <BookOpen className="h-3 w-3" /> Repos
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-text-primary">
                      <AnimatedCounter value={user.followers} />
                    </p>
                    <p className="mt-1 flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-text-faint">
                      <Users className="h-3 w-3" /> Followers
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-text-primary">
                      <AnimatedCounter value={totalStars} />
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-faint">
                      Stars earned
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-faint">
              Languages I work with
            </h3>
            <div className="mt-5 space-y-4">
              {status === "loading" &&
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-3 w-full animate-pulse rounded bg-surface-2" />
                ))}
              {languages.map((lang, i) => (
                <div key={lang.language}>
                  <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                    <span className="text-text-primary">{lang.language}</span>
                    <span className="text-signal">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
                      className="h-full rounded-full bg-gradient-to-r from-signal to-violet"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6 overflow-hidden rounded-2xl border border-surface-border bg-surface p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-text-faint">
            Contribution heatmap
          </h3>
          <div className="mt-4 overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/2FE6C7/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
              className="min-w-[720px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
