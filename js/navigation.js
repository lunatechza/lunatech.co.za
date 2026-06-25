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

  // Handle Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('[id$="-modal"]:not(.hidden)');
      if (activeModal) {
        activeModal.classList.add('hidden');
      }
    }
  });

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

  // Character counter and honeypot validation for contact form
  const contactForm = document.querySelector('form[aria-labelledby="contact-title"]');
  const messageArea = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const honeypot = contactForm.querySelector('input[name="website_url"]');
      if (honeypot && honeypot.value !== '') {
        e.preventDefault();
        alert('Message could not be sent.');
      }
    });
  }

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
