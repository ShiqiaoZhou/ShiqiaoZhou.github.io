/* Progressive enhancement: content remains visible without JavaScript. */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const running = new Set();
  const animate = (element, delay = 0) => {
    if (reduced.matches) return;
    const animation = element.animate([
      { opacity: 0, transform: 'translateY(16px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 650, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
    running.add(animation);
    animation.onfinish = animation.oncancel = () => running.delete(animation);
  };
  const observer = new IntersectionObserver(entries => {
    let index = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      animate(entry.target, Math.min(index++ * 65, 195));
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.post-header, .academic-sidebar, .research-focus, .publications ol.bibliography > li, .post > article > h2, .section-heading').forEach(el => observer.observe(el));

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  document.querySelectorAll('.publications ol.bibliography > li').forEach(card => {
    let frame = 0;
    card.addEventListener('pointermove', event => {
      if (reduced.matches || !fine.matches || frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (reduced.matches) return;
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
        card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
      });
    }, { passive: true });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame); frame = 0;
      card.style.removeProperty('--pointer-x');
      card.style.removeProperty('--pointer-y');
    });
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches) running.forEach(animation => animation.cancel());
  });
})();
