# Rajat Jain — Portfolio

Personal portfolio website of Rajat Jain — Product Builder & Designer, Google Student Ambassador '25 & '26.

🔗 **Live:** [rajat.pages.dev](https://rajat.pages.dev)

## Stack

Pure **HTML · CSS · JS** — no frameworks, no build step, no dependencies.

## Structure

```
portfolio-website/
├── index.html              # Main page
├── assets/
│   ├── css/
│   │   └── style.css       # All styles + light/dark theme
│   ├── js/
│   │   └── script.js       # Interactions, scroll reveal, theme toggle
│   └── images/
│       └── favicon.svg     # SVG favicon
└── docs/
    ├── DESIGN.md           # Design system reference
    ├── MEMORY.md           # Project notes
    └── Frontend-SKILL.md   # Skill reference
```

## Running Locally

No build step needed. Just open `index.html` in a browser.

Or use a local server:
```bash
npx serve .
```

## Deploying

Hosted on **Cloudflare Pages** — every `git push` to `main` auto-deploys.
