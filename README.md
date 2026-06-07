# Rajat Jain - Interactive Portfolio

<div align="center">
  <p><strong>A high-performance, physics-enabled portfolio experience built for the modern web.</strong></p>
  
  [![Website](https://img.shields.io/badge/Website-rajat.pages.dev-charcoal?style=for-the-badge&logo=cloudflare)](https://rajat.pages.dev)
  [![Tech Stack](https://img.shields.io/badge/Stack-Vanilla_JS-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)]()
</div>

---

## Overview

This repository contains the source code for the personal portfolio of **Rajat Jain**, Product Builder & Designer, and Google Student Ambassador '25 & '26.

Designed with a focus on absolute performance, fluidity, and premium interactive aesthetics, this site pushes the boundaries of a standard static website. It leverages advanced DOM manipulation, high-performance animation frames, and 2D physics engines-all without the overhead of heavy frontend frameworks.

## Key Features

- **Interactive Physics Sandbox:** An integrated 2D physics environment built with Matter.js, allowing users to physically drag, drop, and interact with UI elements in real-time within the Capabilities section.
- **Scrollytelling Architecture:** A highly optimized scroll-linked animation system using GSAP ScrollTrigger and Lenis smooth scrolling for a seamless, app-like narrative flow.
- **Context-Aware Custom Cursor:** A high-framerate, GSAP `quickTo`-powered cursor that morphs intelligently based on DOM context (e.g., expanding into interactive, context-aware pills over projects, or inverting colors over large typography).
- **Zero-Build Pipeline:** Pure HTML, CSS, and Vanilla JavaScript. Styling is handled via Tailwind CSS, ensuring immediate local execution without `npm install` or complex build steps.

## Tech Stack

- **Core:** HTML5, Vanilla JavaScript (ES6+), CSS3
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CDN)
- **Animation Ecosystem:** 
  - [GSAP](https://greensock.com/gsap/) (Core, ScrollTrigger, Draggable)
  - [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
  - [SplitType](https://github.com/lukePeeters/SplitType) (Typography Animation)
- **Physics Engine:** [Matter.js](https://brm.io/matter-js/) (2D Rigid Body Physics)

## Project Structure

```text
📦 portfolio-website
├── 📄 index.html              # Main application entry point
├── 📂 assets/
│   ├── 📂 css/
│   │   └── 📄 style.css       # Typography, Tailwind overrides, and base styles
│   ├── 📂 js/
│   │   └── 📄 script.js       # Core logic, GSAP timelines, physics initialization
│   └── 📂 images/             # Optimized visual assets
├── 📂 lib/                    # Self-hosted vendor scripts for maximum performance
│   ├── gsap.min.js
│   ├── matter.min.js
│   └── ...
└── 📂 docs/                   # Internal documentation
```

## Local Development

Because this project relies entirely on vanilla web technologies, getting started takes seconds.

1. Clone the repository:
   ```bash
   git clone https://github.com/therajatjain/portfolio-website.git
   cd portfolio-website
   ```
2. Serve the directory locally (using any basic HTTP server):
   ```bash
   # Using npx (Node.js)
   npx serve .
   
   # Or using Python
   python3 -m http.server
   ```
3. Open the provided `localhost` port in your browser.

## Deployment

This project is deployed on **Cloudflare Pages**. It utilizes an automated CI/CD pipeline where every push to the `main` branch automatically triggers a highly optimized global edge deployment.

🔗 **Live Environment:** [rajat.pages.dev](https://rajat.pages.dev)

---

<div align="center">
  <p>Designed and engineered by Rajat Jain.</p>
</div>
