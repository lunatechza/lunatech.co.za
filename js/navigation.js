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
  const setupModal = (openBtnId, modalId) => {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
      });
    }
  };

  setupModal('disclaimer-open', 'disclaimer-modal');
  setupModal('privacy-open', 'privacy-modal');

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('[id$="-modal"]');
      if (modal) {
        modal.classList.add('hidden');
      }
    });
  });

  // Close modal on background click
  window.addEventListener('click', (e) => {
    if (e.target.id && e.target.id.endsWith('-modal')) {
      e.target.classList.add('hidden');
    }
  });

  // Character counter for contact form message
  const messageArea = document.getElementById('message');
  const counterDisplay = document.getElementById('message-counter');
  if (messageArea && counterDisplay) {
    const maxLength = messageArea.getAttribute('maxlength');
    messageArea.addEventListener('input', () => {
      const currentLength = messageArea.value.length;
      counterDisplay.textContent = `${currentLength} / ${maxLength}`;

      if (currentLength > maxLength * 0.95) {
        counterDisplay.classList.add('text-red-500');
        counterDisplay.classList.remove('text-gray-400');
      } else {
        counterDisplay.classList.remove('text-red-500');
        counterDisplay.classList.add('text-gray-400');
      }
    });
  }
});
