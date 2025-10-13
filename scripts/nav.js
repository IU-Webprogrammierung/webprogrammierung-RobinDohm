(() => {
  const btnOpen = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#mobile-menu");
  const btnClose = document.querySelector(".nav-close");

  if (!btnOpen || !menu || !btnClose) return;

  function openMenu() {
    menu.hidden = false;
    document.body.classList.add("menu-open");
    btnOpen.setAttribute("aria-expanded", "true");
    // Fokus auf erstes Element im Menü setzen (optional)
    const firstLink = menu.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    menu.hidden = true;
    document.body.classList.remove("menu-open");
    btnOpen.setAttribute("aria-expanded", "false");
    btnOpen.focus();
  }

  btnOpen.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);

  // ESC schließt
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });

  // Optional: Klick außerhalb der Linkliste schließt
  menu.addEventListener("click", (e) => {
    if (e.target === menu) closeMenu();
  });
})();
