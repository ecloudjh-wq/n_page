(() => {
  const header = document.querySelector('.header');
  if (!header) return;
  const nav = document.querySelector('#nav');
  const menu = document.querySelector('.menu-toggle');
  let previousY = Math.max(0, window.scrollY);
  let scheduled = false;

  function showHeader(show) {
    header.classList.toggle('header-hidden', !show);
    header.inert = !show;
    if (!show && nav && menu) {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', '메뉴 열기');
    }
  }

  function update() {
    scheduled = false;
    const y = Math.max(0, window.scrollY);
    header.classList.toggle('header-scrolled', y > 12);
    if (y <= 12) {
      showHeader(true);
      previousY = y;
      return;
    }
    const delta = y - previousY;
    if (Math.abs(delta) < 6) return;
    const focused = document.activeElement;
    const keyboardFocusInHeader = focused && header.contains(focused) && focused.matches(':focus-visible');
    if (delta < 0 || y < header.offsetHeight + 24 || keyboardFocusInHeader) showHeader(true);
    else showHeader(false);
    previousY = y;
  }

  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
})();
