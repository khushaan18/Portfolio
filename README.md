<div align="center">

# ✨ Khushaan Saini — Portfolio ✨

### Backend-first engineer, wired into modern AI systems

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EF008F?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

🔴 **Live data** · GitHub stats and LeetCode progress refresh automatically, no manual updates needed

<img src="https://ghchart.rshah.org/2FE6C7/khushaan18" alt="Khushaan's GitHub contribution graph" width="100%"/>

</div>

---

## 🚀 Overview

A single-page portfolio built with **Next.js** and **TypeScript**, animated end-to-end with **Framer Motion**. Instead of hardcoding stats, it pulls live data straight from the GitHub and LeetCode APIs — so repos, stars, languages, and problem-solving progress stay current on every visit.

## 🎬 What Makes It Move

| Effect | Where |
|---|---|
| ⌨️ Typewriter cycling through roles | Hero |
| 🌌 Floating particle field + glowing orbs | Hero |
| 📊 Animated count-up numbers | Hero, GitHub, DSA sections |
| 🪄 Scroll-triggered reveal on every section | Throughout |
| 📈 Progressive skill & language bars | Skills, GitHub |
| 🔵 Animated circular progress ring | DSA Journey |
| 🖱️ Hover-lift cards & tag micro-interactions | Projects, Skills |
| 🧭 Scroll-spy nav with sliding underline | Navbar |

## ✅ Features

- 🎯 **Hero section** with a rotating typewriter effect cycling through roles (backend systems, RAG pipelines, agentic AI, etc.)
- 🎓 **About** section with education timeline
- 🧠 **Skills** section with proficiency bars and grouped tech tags
- 💼 **Projects** section combining hand-curated featured projects with a live feed of repositories pulled from the GitHub API
- 🐙 **GitHub section** showing profile stats (repos, followers, stars), a language breakdown, and a contribution heatmap
- 🧩 **DSA Journey** section showing live LeetCode stats (solved counts by difficulty, ranking, acceptance rate), with a fallback API in case the primary one is down
- 📄 **Resume** section with an embedded PDF viewer plus open/download actions
- 📬 **Contact** form wired to Web3Forms for email delivery, with inline success/error states

## 🛠️ Tech Stack

| Category       | Technology                          |
|----------------|--------------------------------------|
| ⚛️ Framework    | Next.js 14 (App Router), TypeScript |
| 🎨 Styling      | Tailwind CSS                         |
| 🎞️ Animation    | Framer Motion                        |
| 🧩 Icons        | Lucide React                         |
| 🔤 Fonts        | Space Grotesk, Inter, JetBrains Mono (via `next/font`) |
| 🔌 Live data    | GitHub REST API, LeetCode community APIs |
| 📮 Form handling| Web3Forms                            |

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, and page metadata
│   ├── page.tsx            # Assembles all sections into the home page
│   └── globals.css         # Global styles and Tailwind layers
├── components/
│   ├── Navbar.tsx          # Sticky nav with scroll-spy active link tracking
│   ├── Hero.tsx            # Landing section with typewriter effect
│   ├── About.tsx           # Bio and education timeline
│   ├── Skills.tsx          # Proficiency bars and skill tag groups
│   ├── Projects.tsx        # Featured projects + live GitHub repo feed
│   ├── GithubSection.tsx   # GitHub profile stats and language breakdown
│   ├── DsaJourney.tsx      # LeetCode stats and difficulty breakdown
│   ├── Resume.tsx          # Embedded resume viewer with download option
│   ├── Contact.tsx         # Contact form (Web3Forms) and social links
│   ├── Footer.tsx          # Site footer
│   ├── ParticleField.tsx   # Decorative particle background for Hero
│   ├── AnimatedCounter.tsx # Number count-up animation used across stats
│   └── Reveal.tsx          # Scroll-triggered reveal wrapper for sections
├── data/
│   └── projects.ts         # Hand-curated list of featured projects
├── lib/
│   ├── github.ts           # GitHub API fetch helpers and language summarizer
│   └── leetcode.ts         # LeetCode stats fetcher with primary/fallback APIs
└── public/
    └── resume.pdf           # Resume served to the Resume section
```

## 🔴 Live Data Sources

- **GitHub** 🐙 — Profile info and repositories are fetched directly from the public GitHub REST API (`api.github.com`) for the configured username, with no authentication required.
- **LeetCode** 🧩 — Since LeetCode has no official public API, stats are fetched through a community-maintained wrapper, with a second wrapper as a fallback if the first one fails.

Both integrations degrade gracefully — if a request fails, the UI shows a message pointing to the profile directly instead of breaking. ✨

## 🎛️ Customization

- Update featured projects in `data/projects.ts`.
- Update the GitHub username in `lib/github.ts` and the LeetCode username in `lib/leetcode.ts`.
- Replace `public/resume.pdf` to update the embedded resume.
- Set a valid access key in `components/Contact.tsx` for the contact form to send messages.

## 📜 License

This project is open source and available for personal use as a portfolio template.

<div align="center">

Made with ⚡ Next.js, 🎨 Tailwind CSS &amp; 🎞️ Framer Motion

</div>
