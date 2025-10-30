// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbClose = document.getElementById('lightbox-close');

// open on any anchor with class "lb"
document.querySelectorAll('a.lb').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const url = a.getAttribute('href');
    if (!url || !lb || !lbImg) return;
    lbImg.src = url;
    lb.removeAttribute('hidden');
  });
});

// close handlers
function closeLB() { if (lb) lb.setAttribute('hidden', ''); }
if (lbClose) lbClose.addEventListener('click', closeLB);
if (lb) lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
