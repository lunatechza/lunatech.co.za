// Navigation and UI interactions
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('nav-link-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Overlay management (Menu & Modals)
  let lastFocusedElement;
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const closeOverlay = (overlay, trigger) => {
    if (!overlay || overlay.classList.contains('hidden')) return;
    overlay.classList.add('hidden');
    (trigger || lastFocusedElement)?.focus();
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  };

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeOverlay(mobileMenu, mobileMenuBtn);
      } else {
        lastFocusedElement = mobileMenuBtn;
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.querySelector('a')?.focus();
      }
    });
  }

  const setupModal = (openBtnId, modalId) => {
    const openBtn = document.getElementById(openBtnId), modal = document.getElementById(modalId);
    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        lastFocusedElement = openBtn;
        modal.classList.remove('hidden');
        modal.querySelector('button, a, [tabindex="0"]')?.focus();
      });
    }
  };
  setupModal('disclaimer-open', 'disclaimer-modal');
  setupModal('privacy-open', 'privacy-modal');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.close-modal')) closeOverlay(e.target.closest('[id$="-modal"]'));
    if (e.target.id?.endsWith('-modal')) closeOverlay(e.target);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeOverlay(document.querySelector('[id$="-modal"]:not(.hidden)'));
      closeOverlay(mobileMenu, mobileMenuBtn);
    }
  });

  // Character counter for contact form
  const messageArea = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');
  if (messageArea && charCounter) {
    messageArea.addEventListener('input', () => {
      const count = messageArea.value.length;
      const maxLength = messageArea.getAttribute('maxlength') || 2000;
      charCounter.textContent = `${count} / ${maxLength} characters`;

      if (count > 1900) {
        charCounter.classList.remove('text-gray-400');
        charCounter.classList.add('text-red-500');
      } else {
        charCounter.classList.remove('text-red-500');
        charCounter.classList.add('text-gray-400');
      }
    });
  }
});
