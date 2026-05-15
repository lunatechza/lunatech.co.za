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

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
    });
  }

  // Modal interactions
  let modalTrigger = null;

  const closeModal = (modal) => {
    if (modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      if (modalTrigger) {
        modalTrigger.focus();
        modalTrigger = null;
      }
    }
  };

  const setupModal = (openBtnId, modalId) => {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modalTrigger = document.activeElement;
        modal.classList.remove('hidden');
        // Focus the first close button found in the modal
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) closeBtn.focus();
      });
    }
  };

  setupModal('disclaimer-open', 'disclaimer-modal');
  setupModal('privacy-open', 'privacy-modal');

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('[id$="-modal"]');
      closeModal(modal);
    });
  });

  // Close modal on background click
  window.addEventListener('click', (e) => {
    if (e.target.id && e.target.id.endsWith('-modal')) {
      closeModal(e.target);
    }
  });

  // Escape key closure
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('[id$="-modal"]:not(.hidden)');
      if (openModal) {
        closeModal(openModal);
      }
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
