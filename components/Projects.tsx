"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, RefreshCw, Star, GitFork } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";
import { fetchGithubRepos, GithubRepo, GITHUB_USERNAME } from "@/lib/github";

function FeaturedCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-glow group rounded-xl border border-surface-border bg-surface p-6 transition-colors hover:border-signal/30"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-faint">{project.tagline}</p>
          <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">{project.title}</h3>
        </div>
        <div className="shrink-0 rounded-md border border-signal/30 px-2.5 py-1 text-right">
          <p className="font-mono text-[9px] uppercase tracking-widest text-text-faint">
            {project.metric.label}
          </p>
          <p className="font-mono text-sm text-signal">{project.metric.value}</p>
        </div>
      </div>

      <p className="mt-4 font-body text-sm leading-relaxed text-text-muted">{project.description}</p>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pt-4">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2 font-body text-sm leading-relaxed text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/60" />
                  {point}
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded((e) => !e)}
        className="mt-3 flex items-center gap-1.5 font-mono text-xs text-signal transition-opacity hover:opacity-80"
      >
        {expanded ? "Show less" : "Show details"}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 border-t border-surface-2 pt-4">
        {project.stack.map((s, idx) => (
          <span key={s} className="flex items-center gap-2 font-mono text-[11px] text-text-faint">
            {s}
            {idx < project.stack.length - 1 && <span className="text-text-faint/40">·</span>}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4 border-t border-surface-2 pt-4">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-primary transition-colors hover:text-signal"
        >
          <Github className="h-3.5 w-3.5" /> Code
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-text-primary transition-colors hover:text-signal"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

function LiveRepoCard({ repo, index }: { repo: GithubRepo; index: number }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="card-glow block rounded-xl border border-surface-border bg-surface p-5 transition-colors hover:border-signal/30"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-sm font-semibold text-text-primary">{repo.name}</h4>
        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-text-faint" />
      </div>
      <p className="mt-2 line-clamp-2 font-body text-xs leading-relaxed text-text-muted">
        {repo.description || "No description provided."}
      </p>
      <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-text-faint">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-signal" />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="h-3 w-3" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-3 w-3" /> {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  async function loadRepos() {
    setStatus("loading");
    try {
      const data = await fetchGithubRepos();
      setRepos(data.filter((r) => !r.fork).slice(0, 6));
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <section id="projects" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">03 · Projects</span>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Featured builds
          </h2>
          <p className="mt-2 max-w-xl font-body text-sm text-text-muted">
            Click a card to expand implementation details. Every card links straight to the code.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-20 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal">Live</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-text-primary">
              Straight from GitHub
            </h3>
            <p className="mt-1 font-body text-sm text-text-muted">
              live from{" "}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="text-signal hover:underline"
              >
                @{GITHUB_USERNAME}
              </a>
            </p>
          </div>
          <button
            onClick={loadRepos}
            className="hidden shrink-0 items-center gap-2 rounded-full border border-surface-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:border-signal hover:text-signal sm:flex"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${status === "loading" ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        <div className="mt-8">
          {status === "loading" && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-40 animate-pulse rounded-xl border border-surface-border bg-surface" />
              ))}
            </div>
          )}
          {status === "error" && (
            <p className="rounded-xl border border-surface-border bg-surface p-6 font-mono text-sm text-text-muted">
              Couldn&apos;t reach the GitHub API right now — check back shortly, or view the{" "}
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="text-signal hover:underline"
              >
                repositories directly
              </a>
              .
            </p>
          )}
          {status === "ready" && repos && repos.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((r, i) => (
                <LiveRepoCard key={r.id} repo={r} index={i} />
              ))}
            </div>
          )}
          {status === "ready" && repos && repos.length === 0 && (
            <p className="rounded-xl border border-surface-border bg-surface p-6 font-mono text-sm text-text-muted">
              No public repositories found yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
