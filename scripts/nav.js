(() => {
  const btnOpen = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#mobile-menu');
  const btnClose = document.querySelector('.nav-close');

  if (!btnOpen || !menu) return;

  function openMenu() {
    menu.hidden = false; menu.style.display = "grid";
    document.body.classList.add('menu-open');
    btnOpen.setAttribute('aria-expanded', 'true');
    btnOpen.setAttribute('aria-label', 'Menue schliessen');
    // Fokus auf erstes Element im Menü setzen (optional)
    const first = menu.querySelector('a, button');
    if (first) first.focus();
  }

  function closeMenu() {
    menu.hidden = true; menu.style.display = "";
    document.body.classList.remove('menu-open');
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




