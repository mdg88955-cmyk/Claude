/* Athlesio — theme JS. No dependencies. All motion respects prefers-reduced-motion. */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Mobile nav ---- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-nav-toggle]');
    if (!t) return;
    var nav = document.getElementById('main-nav');
    if (!nav) return;
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    t.setAttribute('aria-expanded', String(!open));
  });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('[data-reveal]');
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        setTimeout(function () { en.target.classList.add('is-in'); }, i * 70);
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- Tiger watermark parallax ---- */
  var band = document.querySelector('[data-tiger]');
  if (band && !reduced) {
    var mark = band.querySelector('.tiger-band__mark');
    if (mark) {
      var t1 = false;
      window.addEventListener('scroll', function () {
        if (t1) return; t1 = true;
        requestAnimationFrame(function () {
          var r = band.getBoundingClientRect();
          if (r.bottom > 0 && r.top < window.innerHeight) {
            var p = (window.innerHeight - r.top) * 0.08;
            mark.style.transform = 'translate(-50%, calc(-50% - ' + p.toFixed(1) + 'px))';
          }
          t1 = false;
        });
      }, { passive: true });
    }
  }

  /* ---- Variant / bundle picker ---- */
  var form = document.querySelector('[data-product-form]');
  var priceEl = document.querySelector('[data-price]');
  var stickyPrice = document.querySelector('[data-sticky-price]');

  if (form) {
    var submits = document.querySelectorAll('[data-add]');

    form.querySelectorAll('[data-variant]').forEach(function (row) {
      row.addEventListener('click', function () {
        var input = row.querySelector('input');
        if (input) input.checked = true;

        form.querySelectorAll('[data-variant]').forEach(function (r) {
          r.setAttribute('data-selected', String(r === row));
        });

        var price = row.getAttribute('data-variant-price');
        if (priceEl) priceEl.textContent = price;
        if (stickyPrice) stickyPrice.textContent = price;

        var avail = row.getAttribute('data-available') === 'true';
        submits.forEach(function (b) {
          b.disabled = !avail;
          b.textContent = avail ? (b.getAttribute('data-label') || 'Add to cart') : 'Sold out';
        });
      });
    });
  }

  /* ---- Sticky buy bar: show once the buy box leaves the viewport ---- */
  var bar = document.querySelector('[data-stickybar]');
  var box = document.querySelector('[data-buybox]');
  if (bar && box && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        bar.setAttribute('data-show', String(!en.isIntersecting && en.boundingClientRect.top < 0));
      });
    }, { threshold: 0 }).observe(box);
  }

  /* ---- Gallery thumbs ---- */
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
