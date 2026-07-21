"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { fetchLeetcodeStats, LeetcodeStats, LEETCODE_USERNAME } from "@/lib/leetcode";

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "#2FE6C7",
  Medium: "#F5A85B",
  Hard: "#F45B69",
};

function DifficultyBar({
  label,
  solved,
  total,
  delay,
}: {
  label: string;
  solved: number;
  total: number;
  delay: number;
}) {
  const percent = total > 0 ? Math.min(100, Math.round((solved / total) * 100)) : 0;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between font-mono text-xs">
        <span style={{ color: DIFFICULTY_COLORS[label] }}>{label}</span>
        <span className="text-text-muted">
          {solved} / {total}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: DIFFICULTY_COLORS[label] }}
        />
      </div>
    </div>
  );
}

export default function DsaJourney() {
  const [stats, setStats] = useState<LeetcodeStats | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchLeetcodeStats();
        setStats(data);
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  const circumference = 2 * Math.PI * 54;
  const solvedPercent = stats && stats.totalQuestions ? stats.totalSolved / stats.totalQuestions : 0;

  return (
    <section id="dsa" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">05 · My DSA Journey</span>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-balance font-display text-2xl font-semibold text-text-primary sm:text-3xl">
              Practicing the same muscle SQL &amp; systems design uses
            </h2>
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <Code2 className="h-3.5 w-3.5" /> LeetCode profile
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </Reveal>

        {status === "error" && (
          <p className="mt-8 rounded-xl border border-surface-border bg-surface p-6 font-mono text-sm text-text-muted">
            Live LeetCode stats are temporarily unavailable. Check the{" "}
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noreferrer"
              className="text-signal hover:underline"
            >
              profile directly
            </a>
            .
          </p>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal
            delay={0.05}
            className="flex flex-col items-center justify-center rounded-2xl border border-surface-border bg-surface p-8"
          >
            {status === "loading" && (
              <div className="h-40 w-40 animate-pulse rounded-full bg-surface-2" />
            )}
            {stats && (
              <div className="relative h-40 w-40">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#121A2C" strokeWidth="10" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#2FE6C7"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference * (1 - solvedPercent) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-3xl font-semibold text-text-primary">
                    <AnimatedCounter value={stats.totalSolved} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
                    solved
                  </span>
                </div>
              </div>
            )}
            <p className="mt-6 text-center font-mono text-xs text-text-faint">
              @{LEETCODE_USERNAME}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-faint">
              Topic-wise progress
            </h3>
            {status === "loading" && (
              <div className="space-y-5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-3 w-full animate-pulse rounded bg-surface-2" />
                ))}
              </div>
            )}
            {stats && (
              <div className="space-y-5">
                <DifficultyBar label="Easy" solved={stats.easySolved} total={stats.totalEasy} delay={0} />
                <DifficultyBar label="Medium" solved={stats.mediumSolved} total={stats.totalMedium} delay={0.15} />
                <DifficultyBar label="Hard" solved={stats.hardSolved} total={stats.totalHard} delay={0.3} />
              </div>
            )}

            {stats?.ranking && (
              <div className="mt-6 flex items-center gap-6 border-t border-surface-2 pt-5 font-mono text-xs">
                <div>
                  <p className="text-text-faint">Global rank</p>
                  <p className="mt-1 text-signal">#{stats.ranking.toLocaleString()}</p>
                </div>
                {stats.acceptanceRate !== null && (
                  <div>
                    <p className="text-text-faint">Acceptance rate</p>
                    <p className="mt-1 text-signal">{stats.acceptanceRate.toFixed(1)}%</p>
                  </div>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
