/* ============================================
   MK Bâtiment — Kecita Mourad — Script JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // 1) Lucide icons
    if (window.lucide) lucide.createIcons();


    // 2) Header scrolled
    const header = document.getElementById('site-header');
    if (header) {
        let ticking = false;
        const updateHeader = () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
            ticking = false;
        };
        window.addEventListener('scroll', () => {
            if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; }
        }, { passive: true });
        updateHeader();
    }


    // 3) Burger menu
    const burger = document.getElementById('burger');
    const panel  = document.getElementById('mobile-panel');

    if (burger && panel && header) {

        const openMenu = () => {
            burger.classList.add('open');
            panel.classList.add('open');
            header.classList.add('menu-open');   // ← rend le header transparent
            burger.setAttribute('aria-expanded', 'true');
            burger.setAttribute('aria-label', 'Fermer le menu');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            burger.classList.remove('open');
            panel.classList.remove('open');
            header.classList.remove('menu-open'); // ← restaure le header
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Ouvrir le menu');
            document.body.style.overflow = '';
        };

        burger.addEventListener('click', () => {
            panel.classList.contains('open') ? closeMenu() : openMenu();
        });

        // Fermer sur clic d'un lien
        panel.querySelectorAll('.mobile-nav-link').forEach(a => {
            a.addEventListener('click', closeMenu);
        });

        // Fermer sur Échap
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && panel.classList.contains('open')) {
                closeMenu();
                burger.focus();
            }
        });
    }


    // 4) Année footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    // 5) Feedback formulaires
    const attachFormSuccess = (formId) => {
        const form = document.getElementById(formId);
        if (!form) return;
        form.addEventListener('submit', () => {
            setTimeout(() => {
                const wrapper = document.createElement('div');
                wrapper.className = 'form-success';
                wrapper.setAttribute('role', 'status');
                wrapper.setAttribute('aria-live', 'polite');
                wrapper.innerHTML = `
                    <h3>Merci pour votre message.</h3>
                    <p>Votre demande a bien été transmise. Je reviens vers vous dans les meilleurs délais.</p>
                `;
                form.replaceWith(wrapper);
            }, 150);
        });
    };

    attachFormSuccess('quote-form');
    attachFormSuccess('contact-form');

});