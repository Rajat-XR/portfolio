/* ═══════════════════════════════════════════════════════════════
   EDITORIAL PORTFOLIO — Script
   Ecosystem: GSAP + ScrollTrigger + Lenis
   ═══════════════════════════════════════════════════════════════ */

// ─── 1. ECOSYSTEM SETUP ───

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, Draggable);

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// Sync Lenis with GSAP's ticker
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Disable GSAP's default lag smoothing
gsap.ticker.lagSmoothing(0);

console.log("GSAP + Lenis Initialized");


// ─── 2. SMOOTH ANCHOR SCROLLING ───

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target, { offset: -80 });
    }
  });
});


// ─── 2b. MOBILE MENU TOGGLE ───

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburgerBtn.classList.toggle('is-open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-open');
      document.body.style.overflow = '';
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, { offset: -80 });
      }
    });
  });
}


// ─── 3. NAV SCROLL STATE ───

const nav = document.getElementById('nav');

ScrollTrigger.create({
  start: 'top -80',
  onUpdate: (self) => {
    if (self.scroll() > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});


// ─── 4. NAV ACTIVE STATE ───

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

sections.forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => setActiveNav(section.id),
    onEnterBack: () => setActiveNav(section.id),
  });
});

function setActiveNav(id) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}


// ─── 5. HERO ENTRANCE ANIMATION (SplitType + GSAP) ───

// Split the hero title into individual characters
const titleSplit = new SplitType('#hero-title', { types: 'chars' });

// Split subtitle and description into lines
const subtitleSplit = new SplitType('#hero-subtitle', { types: 'lines' });
const descSplit = new SplitType('#hero-desc', { types: 'lines' });

// CRITICAL: Wrap split lines/chars in overflow:hidden for the "rising from floor" effect
document.querySelectorAll('#hero-title .char').forEach(char => {
  const wrapper = document.createElement('span');
  wrapper.style.overflow = 'hidden';
  wrapper.style.display = 'inline-block';
  char.parentNode.insertBefore(wrapper, char);
  wrapper.appendChild(char);
});

document.querySelectorAll('#hero-subtitle .line, #hero-desc .line').forEach(line => {
  const wrapper = document.createElement('div');
  wrapper.style.overflow = 'hidden';
  line.parentNode.insertBefore(wrapper, line);
  wrapper.appendChild(line);
});

// Set initial states
gsap.set(titleSplit.chars, { y: '100%', opacity: 0 });
gsap.set(subtitleSplit.lines, { y: '100%', opacity: 0 });
gsap.set(descSplit.lines, { y: '100%', opacity: 0 });

// Build the hero timeline
const heroTL = gsap.timeline({ defaults: { ease: 'power4.out' } });

heroTL
  // Badge fades in
  .to('.hero-badge', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.3,
  })
  // Title characters stagger up from behind mask
  .to(titleSplit.chars, {
    y: '0%',
    opacity: 1,
    duration: 1.2,
    stagger: 0.05,
    ease: 'power4.out',
  }, '-=0.3')
  // Playground items float in right after title starts
  .to('.draggable-item', {
    opacity: 1,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power2.out',
  }, '-=0.6')
  // Subtitle lines rise up
  .to(subtitleSplit.lines, {
    y: '0%',
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  }, '-=0.8')
  // Description lines rise up
  .to(descSplit.lines, {
    y: '0%',
    opacity: 1,
    duration: 0.8,
    stagger: 0.08,
    ease: 'power3.out',
  }, '-=0.4')
  // Scroll cue fades in
  .to('.hero-scroll-cue', {
    opacity: 1,
    duration: 0.6,
  }, '-=0.2');


// ─── 5b. HERO PLAYGROUND — GSAP Draggable ───

let topZIndex = 10;
let hintAnimations = []; // Store hint tweens so we can kill them on first interact

Draggable.create('.draggable-item', {
  type: 'x,y',
  edgeResistance: 0.65,
  bounds: '#hero',
  inertia: false,
  cursor: 'grab',
  activeCursor: 'grabbing',
  allowNativeTouchScrolling: false,
  onPress: function () {
    // Kill any hint animation on this element
    hintAnimations.forEach(anim => anim.kill());
    hintAnimations = [];

    topZIndex++;
    const isSquiggle = this.target.classList.contains('hero-squiggle');

    gsap.to(this.target, {
      scale: 1.08,
      boxShadow: isSquiggle ? 'none' : '0 12px 40px rgba(26, 26, 26, 0.18), 0 4px 12px rgba(26, 26, 26, 0.1)',
      zIndex: topZIndex,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    this.target.classList.add('draggable-active');
  },
  onRelease: function () {
    const isSquiggle = this.target.classList.contains('hero-squiggle');

    gsap.to(this.target, {
      scale: 1,
      boxShadow: isSquiggle ? 'none' : '0 4px 16px rgba(26, 26, 26, 0.08), 0 1px 4px rgba(26, 26, 26, 0.05)',
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
      overwrite: 'auto',
    });
    this.target.classList.remove('draggable-active');
  },
});

// ─── 5c. DRAG HINT — Gentle floating nudge ───
// After entrance animation completes, gently float items to hint "I'm draggable"
heroTL.eventCallback('onComplete', () => {
  document.querySelectorAll('.draggable-item').forEach((item, i) => {
    const anim = gsap.to(item, {
      y: '-=8',
      duration: 1.6 + (i * 0.2),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: i * 0.3,
    });
    hintAnimations.push(anim);
  });
});

console.log('Hero Playground Draggable Initialized');


// ─── 6. SCROLL-TRIGGERED REVEALS ───

// Section headers
gsap.utils.toArray('.section-header').forEach(header => {
  gsap.to(header, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: header,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});

// About paragraphs
gsap.utils.toArray('.golden-col p').forEach((p, i) => {
  gsap.to(p, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    delay: i * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: p,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});

// About meta items
gsap.utils.toArray('.about-meta-item').forEach((item, i) => {
  gsap.to(item, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: i * 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none',
    }
  });
});

// Project cards
gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    delay: i * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});

// Experience items
gsap.utils.toArray('.exp-item').forEach((item, i) => {
  gsap.to(item, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    delay: i * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});

// Skill pills
gsap.utils.toArray('.skill-pill').forEach((pill, i) => {
  gsap.to(pill, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.4,
    delay: i * 0.02,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '.skills-flow',
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});

// Contact section
const contactSection = document.getElementById('contact');
if (contactSection) {
  gsap.to('#contact .section-header', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: contactSection,
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });
}
