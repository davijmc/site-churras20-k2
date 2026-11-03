// ============================================================================
// REPÚBLICA K2 — CHURRASCO DE 20 ANOS (14/11/2026 ÀS 12H)
// Contagem regressiva, filtro do banquete, lightbox nativo (<dialog>) e brasas
// ============================================================================

(function () {
  'use strict';

  // 1. CONTAGEM REGRESSIVA OFICIAL (14/11/2026 às 12:00 - Horário de Brasília)
  const EVENT_ISO = '2026-11-14T12:00:00-03:00';
  const targetTime = new Date(EVENT_ISO).getTime();

  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMinutes = document.getElementById('cd-minutes');
  const elSeconds = document.getElementById('cd-seconds');
  const elStatus = document.getElementById('countdown-status-label');

  function pad2(n) {
    return String(Math.max(0, Math.floor(n))).padStart(2, '0');
  }

  function updateCountdown() {
    if (!elDays || !elHours || !elMinutes || !elSeconds) return;

    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      elDays.textContent = '00';
      elHours.textContent = '00';
      elMinutes.textContent = '00';
      elSeconds.textContent = '00';
      if (elStatus) {
        elStatus.textContent = 'Os portões estão abertos! Viva os 20 Anos da República K2!';
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = pad2(days);
    elHours.textContent = pad2(hours);
    elMinutes.textContent = pad2(minutes);
    elSeconds.textContent = pad2(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 2. FILTRO INTERATIVO DO BANQUETE (Carnes / Guarnições / Drinks / Tudo)
  const filterButtons = document.querySelectorAll('.filter-chip[data-filter]');
  const banquetGroups = document.querySelectorAll('[data-banquet-group]');

  if (filterButtons.length && banquetGroups.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const selected = btn.getAttribute('data-filter') || 'all';

        filterButtons.forEach(function (other) {
          const active = other === btn;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', active ? 'true' : 'false');
        });

        banquetGroups.forEach(function (group) {
          const category = group.getAttribute('data-banquet-group');
          const visible = selected === 'all' || category === selected;
          group.hidden = !visible;
        });
      });
    });
  }

  // 3. MODAL LIGHTBOX NATIVO (<dialog>) PARA AMPLIAR AS FOTOS OFICIAIS
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const zoomTriggers = document.querySelectorAll('.portrait-zoom-trigger[data-lightbox-src]');

  if (lightbox && lightboxImg && zoomTriggers.length) {
    zoomTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const src = trigger.getAttribute('data-lightbox-src');
        const caption = trigger.getAttribute('data-lightbox-caption') || '';
        const innerImg = trigger.querySelector('img');
        if (!src) return;

        lightboxImg.src = src;
        lightboxImg.alt = innerImg ? innerImg.alt : caption;
        if (lightboxCaption) {
          lightboxCaption.textContent = caption;
        }
        if (typeof lightbox.showModal === 'function') {
          lightbox.showModal();
        }
      });
    });

    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', function () {
        lightbox.close();
      });
    }

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });
  }

  // 4. BOTÃO COPIAR LINK DO GOOGLE MAPS
  const copyBtn = document.getElementById('copy-map-btn');
  if (copyBtn) {
    const originalLabel = copyBtn.textContent.trim();
    copyBtn.addEventListener('click', async function () {
      const mapUrl = copyBtn.getAttribute('data-map-url') || '';
      if (!mapUrl) return;

      try {
        await navigator.clipboard.writeText(mapUrl);
        copyBtn.textContent = 'Link da Localização Copiado!';
      } catch (_err) {
        // ponytail: textarea fallback for non-HTTPS local preview
        const input = document.createElement('textarea');
        input.value = mapUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        copyBtn.textContent = 'Link da Localização Copiado!';
      }

      setTimeout(function () {
        copyBtn.textContent = originalLabel;
      }, 2600);
    });
  }

  // 5. BRASAS VIVAS NO HERO (CANVAS LEVE, RESPEITA REDUCED MOTION)
  const canvas = document.getElementById('ember-canvas');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    const PARTICLE_COUNT = 28;
    const embers = [];

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = Math.max(320, Math.floor(rect.width));
      height = canvas.height = Math.max(420, Math.floor(rect.height));
    }

    function createEmber(randomY) {
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : height + Math.random() * 40,
        radius: 1.2 + Math.random() * 2.4,
        speedY: 0.35 + Math.random() * 0.85,
        driftX: (Math.random() - 0.5) * 0.45,
        alpha: 0.25 + Math.random() * 0.55,
        isGold: Math.random() > 0.45
      };
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      embers.push(createEmber(true));
    }

    function renderEmbers() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];
        p.y -= p.speedY;
        p.x += p.driftX;

        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          embers[i] = createEmber(false);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold
          ? 'rgba(245, 197, 24, ' + p.alpha.toFixed(2) + ')'
          : 'rgba(232, 93, 26, ' + p.alpha.toFixed(2) + ')';
        ctx.fill();
      }

      requestAnimationFrame(renderEmbers);
    }

    requestAnimationFrame(renderEmbers);
  }
})();
