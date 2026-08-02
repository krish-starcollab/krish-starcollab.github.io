// ==========================================
// Portfolio JavaScript — Interactions
// ==========================================

(function () {
  'use strict';

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // --- Mobile menu toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // --- Scroll reveal ---
  function initScrollReveal() {
    var revealTargets = document.querySelectorAll(
      '.about-grid, .about-text, .about-details, ' +
      '.skill-category, .project-card, .cert-card, ' +
      '.contact-card, .detail-card'
    );

    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Staggered reveal for grid children ---
  function initStaggeredReveal() {
    var grids = document.querySelectorAll(
      '.skills-grid, .projects-grid, .cert-grid, .contact-links'
    );

    grids.forEach(function (grid) {
      var children = grid.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.transitionDelay = (i * 0.08) + 's';
      }
    });
  }

  // --- Active nav link highlight ---
  function initActiveNavLink() {
    var sections = document.querySelectorAll('.section, .hero');
    var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            navAnchors.forEach(function (anchor) {
              anchor.style.color = '';
              if (anchor.getAttribute('href') === '#' + id) {
                anchor.style.color = 'var(--color-text)';
              }
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-72px 0px -50% 0px',
      }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // --- Initialise ---
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initStaggeredReveal();
    initActiveNavLink();
  });
})();
