# reposafety-website

Public site for **RepoSafety**, a lightweight safety layer for coding-interview repositories.

- Site: https://www.reposafety.com/
- Logo (stable URL): https://www.reposafety.com/logo.png
- Skill: https://github.com/naval200/interview-repo-safety

## Layout

```text
content/cases/                 source case studies (markdown)
public/                        GitHub Pages publish root
  index.html                   long-form landing
  logo.png                     keep this path — published logo URL
  404.html
  assets/site.css
  assets/site.js
  assets/fonts/                Geist Sans + Geist Mono (self-hosted)
  cases/<slug>/index.html      full report
```

GitHub Pages serves `public/` from the `gh-pages` branch. Pushing changes under `public/` on `main` redeploys automatically.

`public/logo.png` must stay at the site root so existing hotlinks keep working.
