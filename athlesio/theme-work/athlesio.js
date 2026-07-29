/* Athlesio — theme JS. No dependencies. Motion respects prefers-reduced-motion. */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile nav */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-nav-toggle]');
    if (!t) return;
    var nav = document.getElementById('main-nav');
    if (!nav) return;
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    t.setAttribute('aria-expanded', String(!open));
  });

  /* Scroll reveal */
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        setTimeout(function () { en.target.classList.add('is-in'); }, i * 60);
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Tiger watermark parallax — 0.3x scroll speed, one band per page */
  var band = document.querySelector('[data-tiger]');
  if (band && !reduced) {
    var mark = band.querySelector('.tiger-band__mark');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var r = band.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          var p = (window.innerHeight - r.top) * 0.08;
          mark.style.transform = 'translate(-50%, calc(-50% - ' + p.toFixed(1) + 'px))';
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* Variant picker.

     The radios are named "id", so the browser submits the selected variant on its own.
     This code only mirrors the selection into the display: it must never write to the
     radio's value, or re-selecting the first option would submit a stale id.
     Both the buy box and the sticky bar carry [data-price] / [data-add], so every
     matching element is updated, not just the first one. */
  var form = document.querySelector('[data-product-form]');
  if (form) {
    var rows = form.querySelectorAll('[data-variant]');
    var priceEls = document.querySelectorAll('[data-price]');
    var compareEl = document.querySelector('[data-compare]');
    var addBtns = document.querySelectorAll('[data-add]');

    var select = function (row) {
      var input = row.querySelector('input');
      if (input && input.disabled) return;
      if (input) input.checked = true;

      rows.forEach(function (r) { r.setAttribute('data-selected', String(r === row)); });

      var price = row.getAttribute('data-variant-price');
      if (price) priceEls.forEach(function (el) { el.textContent = price; });

      if (compareEl) {
        var cmp = row.getAttribute('data-variant-compare');
        compareEl.textContent = cmp || '';
        compareEl.hidden = !cmp;
      }

      var avail = row.getAttribute('data-available') === 'true';
      addBtns.forEach(function (b) {
        b.disabled = !avail;
        b.textContent = avail ? (b.getAttribute('data-label') || 'Add to cart') : 'Sold out';
      });
    };

    rows.forEach(function (row) {
      row.addEventListener('click', function () { select(row); });
      var input = row.querySelector('input');
      if (input) {
        input.addEventListener('change', function () { if (input.checked) select(row); });
      }
    });
  }

  /* Gallery */
  var mainImg = document.querySelector('[data-main-image]');
  if (mainImg) {
    document.querySelectorAll('[data-thumb]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        mainImg.src = btn.getAttribute('data-full');
        mainImg.alt = btn.getAttribute('data-alt') || '';
        document.querySelectorAll('[data-thumb]').forEach(function (b) {
          b.setAttribute('aria-current', String(b === btn));
        });
      });
    });
  }
})();
