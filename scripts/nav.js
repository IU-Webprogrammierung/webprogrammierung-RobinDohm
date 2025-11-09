(() => {
  const btnOpen = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#mobile-menu');
  const btnClose = document.querySelector('.nav-close');

  if (!btnOpen || !menu) return;

  function openMenu() {
    menu.hidden = false; menu.style.display = "grid"; menu.style.position = "fixed"; menu.style.zIndex = "1000";
    const y = window.scrollY || document.documentElement.scrollTop || 0; document.body.dataset.lockScrollY = String(y); document.body.style.position='fixed'; document.body.style.top = '-' + y + 'px'; document.body.style.width='100%'; document.documentElement.style.overflowY='scroll'; document.body.classList.add('menu-open');
    btnOpen.setAttribute('aria-expanded', 'true');
    btnOpen.setAttribute('aria-label', 'Menue schliessen');
    // Fokus auf erstes Element im Menü setzen (optional)
    const first = menu.querySelector('a, button');
    if (first) first.focus();
  }

  function closeMenu() {
    menu.hidden = true; menu.style.display = ""; menu.style.position = ""; menu.style.zIndex = "";
    const y = parseInt(document.body.dataset.lockScrollY || '0', 10); document.body.classList.remove('menu-open'); document.documentElement.style.overflowY=''; document.body.style.position=''; document.body.style.top=''; document.body.style.width=''; document.body.style.overflow=''; if (!isNaN(y)) window.scrollTo(0, y);
    btnOpen.setAttribute('aria-expanded', 'false');
    btnOpen.setAttribute('aria-label', 'Menue oeffnen');
    btnOpen.focus();
  }

  function toggleMenu() {
    if (menu.hidden) openMenu();
    else closeMenu();
  }

  btnOpen.addEventListener('click', toggleMenu);
  if (btnClose) btnClose.addEventListener('click', closeMenu);

  // ESC schließt
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) closeMenu();
  });
})();













