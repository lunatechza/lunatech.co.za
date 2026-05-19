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

  const closeMobileMenu = () => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.add('md:hidden');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('md:hidden');
      const isHidden = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
    });
  }

  // Modal interactions
  let lastFocusedElement = null;

  const openModal = (modal) => {
    lastFocusedElement = document.activeElement;
    modal.classList.remove('hidden');
    // Focus the first close button for keyboard users
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn?.focus();
  };

  const closeModal = (modal) => {
    modal.classList.add('hidden');
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const setupModal = (openBtnId, modalId) => {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    if (openBtn && modal) {
      openBtn.addEventListener('click', () => openModal(modal));
    }
  };

  setupModal('disclaimer-open', 'disclaimer-modal');
  setupModal('privacy-open', 'privacy-modal');

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('[id$="-modal"]');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  // Global interactions (Escape key and click-outside)
  window.addEventListener('click', (e) => {
    // Close modal on background click
    if (e.target.id && e.target.id.endsWith('-modal')) {
      closeModal(e.target);
    }

    // Close mobile menu on click outside
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      closeMobileMenu();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open modal
      const openModalElement = document.querySelector('[id$="-modal"]:not(.hidden)');
      if (openModalElement) {
        closeModal(openModalElement);
      }

      // Close mobile menu
      closeMobileMenu();
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
