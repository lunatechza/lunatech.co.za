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

  // Contact form character counter
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('char-count');

  if (messageInput && charCount) {
    messageInput.addEventListener('input', () => {
      const length = messageInput.value.length;
      charCount.textContent = length;

      if (length > 1900) {
        charCount.parentElement.classList.remove('text-gray-400');
        charCount.parentElement.classList.add('text-red-500');
      } else {
        charCount.parentElement.classList.add('text-gray-400');
        charCount.parentElement.classList.remove('text-red-500');
      }
    });
  }
});
