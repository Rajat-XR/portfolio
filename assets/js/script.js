document.addEventListener('DOMContentLoaded', () => {

  // ─── SCROLL REVEAL ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ─── NAV SCROLL STATE ───
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 80);
    lastScroll = y;
  }, { passive: true });

  // ─── ACTIVE NAV LINK ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-100px 0px -40% 0px' });

  sections.forEach(sec => activeObserver.observe(sec));

  // ─── MOBILE NAV TOGGLE ───
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── STAGGERED HERO REVEAL ───
  const heroEls = document.querySelectorAll('.hero .reveal');
  heroEls.forEach((el, i) => {
    el.style.transitionDelay = `${0.15 + i * 0.12}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('visible');
      });
    });
  });

  // ─── THEME TOGGLE ───
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Restore saved preference, fallback to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

});
