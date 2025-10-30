// Apply saved or system theme before paint
(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // ----- Mobile menu -----
  const btn = document.querySelector('.menu-toggle');
  const links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ----- Lightbox -----
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');
  if (lb && lbImg && lbClose) {
    document.querySelectorAll('a.lb').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        lbImg.src = a.href;
        lb.removeAttribute('hidden');
      });
    });
    const close = () => lb.setAttribute('hidden', '');
    lbClose.addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  // ----- Theme toggle -----
  const themeBtn = document.getElementById('theme-toggle');
  const setIcon = dark => themeBtn.textContent = dark ? '🌙' : '🌞';
  const darkNow = document.documentElement.classList.contains('dark');
  setIcon(darkNow);

  themeBtn.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    setIcon(dark);
  });

  // enable CSS transitions after paint
  setTimeout(() => document.body.classList.add('theme-ready'), 50);
});
