/* Andreas Steger – Forst- und Gartenservice GmbH
   Front-end interactions (vanilla JS, no dependencies) */
(function () {
  'use strict';

  /* ---- Sticky header state ---- */
  var header = document.querySelector('.header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var backdrop = document.querySelector('.nav-backdrop');
  function closeNav() { document.body.classList.remove('nav-open'); }
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
      var open = document.body.classList.contains('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeNav);
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Active sub-nav highlight (Leistungen) ---- */
  var sections = document.querySelectorAll('.anchor[id]');
  var subnavLinks = document.querySelectorAll('.subnav a');
  if (sections.length && subnavLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          subnavLinks.forEach(function (l) {
            l.style.color = l.getAttribute('href') === '#' + id ? 'var(--forest-800)' : '';
            l.style.background = l.getAttribute('href') === '#' + id ? 'var(--sand)' : '';
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Demo form handling (no backend) ---- */
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = form.querySelector('.form__ok');
      if (ok) {
        ok.classList.add('show');
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
      var fileName = form.querySelector('.filedrop span[data-file]');
      if (fileName) fileName.textContent = fileName.getAttribute('data-default');
    });
  });

  /* ---- File input label ---- */
  document.querySelectorAll('.filedrop input[type=file]').forEach(function (input) {
    input.addEventListener('change', function () {
      var label = input.closest('.filedrop').querySelector('span[data-file]');
      if (label && input.files.length) {
        label.textContent = input.files.length === 1
          ? input.files[0].name
          : input.files.length + ' Dateien ausgewählt';
      }
    });
  });

  /* ---- Footer year ---- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
