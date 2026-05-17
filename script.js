/* ============================================
   MK Bâtiment — Kecita Mourad — Script JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------
    // 1) Render Lucide icons
    // ------------------------------------------
    if (window.lucide) {
        lucide.createIcons();
    }


    // ------------------------------------------
    // 2) Sticky header
    // ------------------------------------------
    const header = document.getElementById('site-header');

    if (header) {
        let ticking = false;

        const updateHeader = () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateHeader();
    }


    // ------------------------------------------
    // 3) Mobile menu
    // ------------------------------------------
    const toggle = document.getElementById('mobile-toggle');
    const panel  = document.getElementById('mobile-panel');

    if (toggle && panel) {
        const openMenu = () => {
            toggle.classList.add('open');
            panel.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', 'Fermer le menu');
        };

        const closeMenu = () => {
            toggle.classList.remove('open');
            panel.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Ouvrir le menu');
        };

        toggle.addEventListener('click', () => {
            const isOpen = panel.classList.contains('open');
            isOpen ? closeMenu() : openMenu();
        });

        panel.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && panel.classList.contains('open')) {
                closeMenu();
                toggle.focus();
            }
        });
    }


    // ------------------------------------------
    // 4) Footer year
    // ------------------------------------------
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }


    // ------------------------------------------
    // 5) Form submission feedback
    // ------------------------------------------
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