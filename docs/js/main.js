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
  document.querySelectorAll('a.lb').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const url = a.getAttribute('href');
      if (!url) return;
      lbImg.src = url;
      lb.removeAttribute('hidden');
    });
  });
  const closeLB = () => lb.setAttribute('hidden', '');
  if (lbClose) lbClose.addEventListener('click', closeLB);
  if (lb) lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

  // ----- Theme toggle -----
  const themeBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.textContent = '🌙';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const dark = document.body.classList.toggle('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      themeBtn.textContent = dark ? '🌙' : '🌞';
    });
  }
});
