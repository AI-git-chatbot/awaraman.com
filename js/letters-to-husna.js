/* ============================================================
   Letters to Husna — Modal JS (updated for new dark theme)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.letter-card');
    const modal = document.getElementById('letterModal');
    const mClose = document.getElementById('modalClose');
    const mTitle = document.getElementById('modalTitle');
    const mBody = document.getElementById('modalBody');
    const mImg = document.getElementById('modalImg');

    const open = (card) => {
        mTitle.textContent = card.dataset.title || '';
        mImg.src = card.dataset.img || '';
        mImg.alt = card.dataset.title || '';
        mBody.textContent = card.dataset.content || '';
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };

    cards.forEach(card => {
        const btn = card.querySelector('.read-letter-btn');
        if (btn) btn.addEventListener('click', (e) => { e.stopPropagation(); open(card); });
    });

    mClose.addEventListener('click', close);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
});
