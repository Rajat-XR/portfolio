# Rajat Jain - Portfolio

A production-grade, highly interactive personal portfolio showcasing the intersection of engineering and design craft.

Live: [rajatjain.pages.dev](https://rajat.pages.dev)

---

## Overview

This repository contains the source code for the personal portfolio of Rajat Jain (Product Builder, Designer, and Google Student Ambassador). The website is engineered to demonstrate premium performance, fluidity, and creative web interactions using native web standards.

## Key Architecture

*   **2D Physics Sandbox:** An integrated interactive canvas powered by Matter.js, enabling rigid-body physics, collisions, and drag/drop states for skills representation.
*   **Scroll-Linked Motion:** Syncs Lenis smooth-scrolling with GSAP ScrollTrigger timelines for a coordinated, frame-rate independent scrollytelling experience.
*   **Split-Type Typography:** Text rendering logic that splits headings into individual characters to animate them elegantly from behind masks.
*   **Fluid Custom Cursor:** A high-frequency follow cursor utilizing GSAP's quickTo API, programmatically morphing based on DOM element contexts.
*   **Zero-Compile Pipeline:** Built purely using HTML5, CSS3, and ES6+ JavaScript, styled with Tailwind CSS, eliminating compilation overhead.

## Tech Stack

*   **Foundation:** HTML5, CSS3, JavaScript (ES6)
*   **Styling:** Tailwind CSS (via CDN)
*   **Animation:** GSAP, ScrollTrigger, SplitType, Lenis
*   **Physics:** Matter.js

## Project Directory

```text
portfolio
├── index.html              # Main application document
├── assets/
│   ├── css/
│   │   └── style.css       # Custom stylesheets and animation overrides
│   ├── js/
│   │   └── script.js       # App controller, GSAP timelines, and physics engine setup
│   └── images/             # Optimized visual assets
├── lib/                    # Vendor library scripts hosted locally
└── docs/                   # Internal references
```

## Local Development

Start a local server to preview the site:

1. Clone the repository:
   ```bash
   git clone https://github.com/therajatjain/portfolio-website.git
   cd portfolio-website
   ```

2. Run a simple server:
   ```bash
   # Option A: Node.js
   npx serve .

   # Option B: Python
   python3 -m http.server
   ```

3. Open the localhost address in your browser.

## Deployment

The project is hosted on Cloudflare Pages. Push-to-deploy is enabled on the main branch for automated building and optimization across Cloudflare's global edge network.

---
Designed and developed by Rajat Jain.
