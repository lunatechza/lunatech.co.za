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
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
    });
  }

  // Handle transparent header on scroll for Index / Home page
  const header = document.getElementById('main-header');
  const headerLogo = document.getElementById('header-logo');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-white', 'shadow-md', 'backdrop-blur-sm');
        header.classList.remove('bg-transparent');
        // If on home/index page where it's transparent initially
        if (document.body.classList.contains('home-page')) {
          headerLogo.classList.remove('brightness-0', 'invert');
        }
      } else {
        if (document.body.classList.contains('home-page')) {
          header.classList.remove('bg-white', 'shadow-md', 'backdrop-blur-sm');
          header.classList.add('bg-transparent');
          headerLogo.classList.add('brightness-0', 'invert');
        } else {
          header.classList.add('bg-white', 'shadow-md');
          header.classList.remove('bg-transparent');
        }
      }
    };

    // Initial check
    if (document.body.classList.contains('home-page')) {
      if (window.scrollY <= 50) {
        header.classList.add('bg-transparent');
        headerLogo.classList.add('brightness-0', 'invert');
      } else {
        header.classList.add('bg-white', 'shadow-md');
        headerLogo.classList.remove('brightness-0', 'invert');
      }
    } else {
      header.classList.add('bg-white', 'shadow-md');
      headerLogo.classList.remove('brightness-0', 'invert');
    }

    window.addEventListener('scroll', handleScroll);
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
        charCounter.classList.remove('text-[#687386]');
        charCounter.classList.add('text-red-500');
      } else {
        charCounter.classList.remove('text-red-500');
        charCounter.classList.add('text-[#687386]');
      }
    });
  }
});
