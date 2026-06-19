// ============================================================
// Interações leves — sem dependências.
// Reveal on scroll · contadores animados · progresso do nav.
// ============================================================

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ---------- Contadores animados ---------- */
function formatNumber(value, decimals, group) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: !!group,
  });
}

function runCounter(el) {
  const target = parseFloat(el.dataset.count);
  if (Number.isNaN(target)) return;
  const pre = el.dataset.pre || "";
  const suf = el.dataset.suf || "";
  const decimals = parseInt(el.dataset.dec || "0", 10);
  const group = el.dataset.group === "1";

  if (reduceMotion) {
    el.textContent = pre + formatNumber(target, decimals, group) + suf;
    return;
  }

  const duration = 1400;
  const start = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const current = target * ease(p);
    el.textContent = pre + formatNumber(current, decimals, group) + suf;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = pre + formatNumber(target, decimals, group) + suf;
  }
  requestAnimationFrame(tick);
}

/* ---------- Reveal + dispara contadores ---------- */
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("is-visible");
      el.querySelectorAll("[data-count]").forEach(runCounter);
      if (el.matches("[data-count]")) runCounter(el);
      obs.unobserve(el);
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
);

document
  .querySelectorAll("[data-reveal]")
  .forEach((el) => revealObserver.observe(el));

// Contadores que não estão dentro de um [data-reveal]
document.querySelectorAll("[data-count]").forEach((el) => {
  if (!el.closest("[data-reveal]")) revealObserver.observe(el);
});

/* ---------- Nav: progresso de scroll + sombra ---------- */
const nav = document.querySelector("[data-nav]");
const progress = document.querySelector("[data-progress]");

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const p = docH > 0 ? (scrollTop / docH) * 100 : 0;
    if (progress) progress.style.setProperty("--p", p.toFixed(2) + "%");
    if (nav) nav.toggleAttribute("data-scrolled", scrollTop > 8);
    ticking = false;
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
