/* Panelwright — motion layer.
   Progressive enhancement only: with JavaScript off the page is the plain,
   fully readable site. Nothing here is required to see or use any content. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ *
   * 1. Scroll reveal
   *    Sections and their children fade + rise the first time they are
   *    seen. Elements are tagged here rather than in the HTML so the
   *    markup stays clean and every page gets it for free.
   * ------------------------------------------------------------------ */
  function tagReveals() {
    var groups = [
      // [selector, direction, stagger step in ms]
      ['.sec-head', '', 0],
      ['.phero .kicker, .phero h1, .phero .lead, .phero .cta, .phero .note', '', 70],
      ['.stage', 's', 0],
      ['.claims > div', '', 70],
      ['.dense span', 's', 18],
      ['.show .txt', 'l', 0],
      ['.show figure', 'r', 0],
      ['.show.rev .txt', 'r', 0],
      ['.show.rev figure', 'l', 0],
      ['.numline div', '', 60],
      ['.papers figure', 's', 90],
      ['.strip > div', '', 60],
      ['.card', 's', 60],
      ['.plan', 's', 90],
      ['.pillar', 'l', 60],
      ['.step', 'l', 50],
      ['.stat', 's', 70],
      ['.shot', 's', 0],
      ['.split > div', '', 90],
      ['.video', 's', 0],
      ['.guar > *', '', 60],
      ['.doc > h2, .doc > h3', 'l', 0],
      ['.tbl', 's', 0],
      ['details', '', 40],
      ['.band', 's', 0],
      ['.callout', 'l', 0],
      ['footer .cols > div', '', 60]
    ];

    groups.forEach(function (g) {
      var els = document.querySelectorAll(g[0]);
      Array.prototype.forEach.call(els, function (el, i) {
        if (el.hasAttribute('data-rv')) return;
        el.setAttribute('data-rv', g[1]);
        if (g[2]) {
          // cap the stagger so a long list never waits absurdly long
          el.style.setProperty('--rvd', Math.min(i * g[2], 420) + 'ms');
        }
      });
    });
  }

  function showAll() {
    var els = document.querySelectorAll('[data-rv]');
    Array.prototype.forEach.call(els, function (el) { el.classList.add('in'); });
  }

  function startReveals() {
    var pending = Array.prototype.slice.call(
      document.querySelectorAll('[data-rv]')
    );
    if (!pending.length) return;

    if (reduced) { showAll(); return; }

    // A plain rAF-throttled sweep rather than IntersectionObserver.
    // IO callbacks are tied to animation frames, so an element that enters
    // and leaves the viewport between two frames — a fast flick, a mouse
    // wheel held down, an anchor link that jumps deep into the page, a
    // browser restoring the previous scroll position — can be skipped and
    // then stay invisible for good. Sweeping a bounded list of nodes on
    // scroll cannot miss one.
    var ticking = false;

    function sweep() {
      ticking = false;
      var line = window.innerHeight * 0.92;
      var still = [];
      for (var i = 0; i < pending.length; i++) {
        var el = pending[i];
        var r = el.getBoundingClientRect();
        // reveal once the element's top has come above the fold line, and
        // also anything already scrolled past above the viewport
        if (r.top < line) { el.classList.add('in'); }
        else { still.push(el); }
      }
      pending = still;
      if (!pending.length) {
        window.removeEventListener('scroll', request);
        window.removeEventListener('resize', request);
      }
    }

    function request() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(sweep); }
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    sweep();
  }

  /* ------------------------------------------------------------------ *
   * 2. Cursor spotlight on cards, plans and the cabinet grid
   * ------------------------------------------------------------------ */
  function spotlights() {
    if (reduced) return;
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

    var targets = document.querySelectorAll('.card, .plan, .dense');
    Array.prototype.forEach.call(targets, function (el) {
      el.addEventListener('pointermove', function (ev) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
        el.style.setProperty('--my', (ev.clientY - r.top) + 'px');
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * 3. Nav: condense past the fold + scroll progress line
   * ------------------------------------------------------------------ */
  function navBehaviour() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.pageYOffset || root.scrollTop;
      nav.classList.toggle('stuck', y > 24);

      var max = (document.body.scrollHeight - window.innerHeight) || 1;
      var p = y / max;
      nav.style.setProperty('--sp', (p < 0 ? 0 : p > 1 ? 1 : p).toFixed(4));
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    update();
  }

  /* ------------------------------------------------------------------ *
   * 4. Count-up for the big numbers
   *    Only touches values that are purely numeric, so "I · L · U",
   *    "3.96 m" and "170x170" are left exactly as written.
   * ------------------------------------------------------------------ */
  function countUps() {
    if (reduced || !('IntersectionObserver' in window)) return;

    var nodes = [];
    Array.prototype.forEach.call(
      document.querySelectorAll('.numline b, .stat b'),
      function (b) {
        var txt = b.textContent.trim();
        var m = /^(\d[\d\s,]*)$/.exec(txt);
        if (!m) return;
        var target = parseInt(m[1].replace(/[\s,]/g, ''), 10);
        if (!isFinite(target) || target < 2) return;
        nodes.push({ el: b, to: target, original: txt });
      }
    );
    if (!nodes.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var item = null;
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].el === e.target) { item = nodes[i]; break; }
        }
        if (!item) return;
        run(item);
      });
    }, { threshold: 0.5 });

    nodes.forEach(function (n) { io.observe(n.el); });

    function run(item) {
      var dur = 900, t0 = null;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = (ts - t0) / dur;
        if (p >= 1) { item.el.textContent = item.original; return; }
        var eased = 1 - Math.pow(1 - p, 3);
        item.el.textContent = Math.round(item.to * eased).toLocaleString('en-US');
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
  }

  /* ------------------------------------------------------------------ *
   * boot
   * ------------------------------------------------------------------ */
  function init() {
    tagReveals();
    startReveals();
    spotlights();
    navBehaviour();
    countUps();

    // Safety net: if anything above threw before revealing, never leave
    // content invisible.
    window.setTimeout(function () {
      var hidden = document.querySelectorAll('[data-rv]:not(.in)');
      if (hidden.length && hidden.length === document.querySelectorAll('[data-rv]').length) {
        showAll();
      }
    }, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
