/* ============================================================
   Gallery Lightbox JS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('.masonry-item'));
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbClose = document.getElementById('lbClose');
    const lbPrev = document.getElementById('lbPrev');
    const lbNext = document.getElementById('lbNext');

    let current = 0;

    const open = (idx) => {
        current = idx;
        const src = items[idx].querySelector('img').src;
        lbImg.src = src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    };

    const prev = () => open((current - 1 + items.length) % items.length);
    const next = () => open((current + 1) % items.length);

    items.forEach((item, i) => item.addEventListener('click', () => open(i)));
    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', prev);
    lbNext.addEventListener('click', next);

    // keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'Escape') close();
    });

    // click outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) close();
    });
});
