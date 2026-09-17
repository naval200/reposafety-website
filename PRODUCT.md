# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS, published from `public/` to GitHub Pages (`gh-pages`). No build step. Confirmed by the existing deploy workflow and the request for a static GitHub Pages site.

## Users

Primary: a software-engineering candidate or developer who just received an unfamiliar coding-interview / take-home repository and is about to clone, install, run, or hand it to an AI coding agent.

Secondary: engineers evaluating the Cursor skill `/interview-repo-safety`.

## Product Purpose

RepoSafety is a lightweight safety layer for coding-interview repositories. It orchestrates existing repository-analysis and security tools (static inspection, optional Sonatype, optional Opsera) into one pre-execution workflow. It helps a human understand what they are about to run. It does not declare a repository safe.

Success: the visitor understands the inspection step, sees a real diagnosis, can copy `/interview-repo-safety`, and can open the implementation on GitHub.

## Positioning

Not a general-purpose cybersecurity platform, malware product, or vulnerability scanner. A focused engineering workflow: inspect an untrusted interview repository before executing it. Primary interface is the Cursor skill `/interview-repo-safety`. Phase 1 is static-only. Output is one categorical verdict plus a report. Conservative claims only.

## Operating Context

Typical scene: laptop, cloned take-home, about to install or ask an agent to work in it. Invoke `/interview-repo-safety` after clone, before install. Skill source: `https://github.com/naval200/interview-repo-safety`. Site: `https://naval200.github.io/reposafety-website/`.

## Capabilities and Constraints

- Static GitHub Pages. Asset URLs must be relative (project site under `/reposafety-website/`).
- `public/logo.png` is a stable published URL and must remain at that path. Do not redesign the logo.
- Case studies are written from real skill reports. Do not invent customers, pass rates, extra catches, or named tools that were not used.
- Never print secret values.
- Do not present exploit instructions.
- Do not claim complete security, guaranteed detection, malware protection, or that a repository is definitely safe.
- Optional tools: Sonatype (`audit-dependencies`, `check-dependency`, `dependency-advisor`) and Opsera (`security-scan`) when available. Custom static checks always run. Helper scripts: `inventory-node.mjs`, `scan-surfaces.sh`, `hash-hooks.sh`.
- Phase 2 is a Docker jail (`sandbox/reposafety-run`): folder-only FS, default-deny egress, allowlist starts at `registry.npmjs.org`. Not a TLS-intercepting malware sandbox.

## Brand Commitments

- Name: RepoSafety
- Mark: `public/logo.png` — dark rounded square, white terminal glyph, mint shield. Use as-is.
- Visual world (brief-pinned, 2026-09-17): light slightly off-white paper, near-black type, Geist + Geist Mono, subtle borders, logo mint as a quiet accent, black CTAs. Editorial developer-tool, not enterprise security SaaS. No neon, no stock photos, no extra shields/locks, no glowing graphics.
- Voice: calm, technically serious, slightly opinionated. Direct language. No “AI-powered”, “military-grade”, “zero-risk”.
- Primary message: Safely inspect untrusted repositories before you run them.

## Evidence on Hand

- Logo: `public/logo.png`
- Real Phase 1 report: coding-interview take-home presented as “Proof of Dev”; branch `original`; verdict **DO NOT INSTALL / RUN**; confidence **HIGH**. Source: `content/cases/antfarm-take-home.md`
- Skill repository: `https://github.com/naval200/interview-repo-safety`
- No testimonials, star counts, or other case studies. Do not fabricate them.

## Product Principles

1. Prove with a real report; never invent catches or safety guarantees.
2. The inspection step sits between receiving the repository and running it.
3. RepoSafety assists with inspection; the human decides.
4. Only claim checks the implementation actually performs.
5. Limits are part of the product: say what it cannot tell you.
