/**
 * Site JavaScript — inlined at build time. Keep it tiny and defensive:
 * every feature here is an enhancement, and the page must be fully usable
 * with JS disabled.
 */
(function () {
  'use strict';

  /* ---- Mobile navigation ------------------------------------------------ */
  var toggle = document.getElementById('navToggle');
  var list = document.getElementById('navList');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    list.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && list.classList.contains('open')) {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Reveal on scroll ------------------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reveals.length && 'IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('in');
    });
  }

  /* ---- Video facade -----------------------------------------------------
     The YouTube player is ~1.5 MB and blocks nothing until the visitor
     actually asks for it. Clicking swaps the poster for the real iframe. */
  document.querySelectorAll('.video-facade').forEach(function (facade) {
    facade.addEventListener('click', function () {
      var id = facade.getAttribute('data-video');
      var title = facade.getAttribute('data-title') || 'Video';
      if (!id || facade.querySelector('iframe')) return;
      var frame = document.createElement('iframe');
      frame.src =
        'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      frame.title = title;
      frame.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      frame.loading = 'lazy';
      facade.innerHTML = '';
      facade.appendChild(frame);
    });
  });

  /* ---- Application form -------------------------------------------------
     Posts to the form's own `action` (Formspree), so there is one source of
     truth and the no-JS native submit goes to exactly the same place. On
     failure the inline error tells the visitor to email instead, so a lead
     is never silently lost. */
  var form = document.getElementById('applyForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = document.getElementById('formOk');
      var err = document.getElementById('formErr');
      var button = form.querySelector('button[type="submit"]');
      if (ok) ok.classList.remove('show');
      if (err) err.classList.remove('show');
      if (button) {
        button.disabled = true;
        button.dataset.label = button.textContent;
        button.textContent = button.getAttribute('data-sending') || 'Sending…';
      }

      function restore() {
        if (button) {
          button.textContent = button.dataset.label;
          button.disabled = false;
        }
      }

      var data = new FormData(form);
      data.append('page', location.pathname);

      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      })
        .then(function (res) {
          if (!res.ok) throw new Error('bad status ' + res.status);
          if (ok) ok.classList.add('show');
          form.reset();
          restore();
        })
        .catch(function () {
          if (err) err.classList.add('show');
          restore();
        });
    });
  }
})();
