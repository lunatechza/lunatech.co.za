// Navigation and UI interactions
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation link for both desktop and mobile
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('nav-link-active');
      link.setAttribute('aria-current', 'page');
    }
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('text-accent-500', 'font-bold');
      link.classList.remove('text-white/90');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Mobile menu toggle and visibility controls
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const openMobileMenu = () => {
    mobileMenu.classList.remove('hidden', 'md:hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.add('hidden', 'md:hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  };

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu on click outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') && !mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on screen resize to desktop breakpoint (768px)
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
      }
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

  // Modal interactions with robust accessibility focus management
  let lastActiveElement = null;

  const openModal = (modal) => {
    if (!modal) return;
    lastActiveElement = document.activeElement;
    modal.classList.remove('hidden');
    // Focus the close button inside the modal to assist screen readers and keyboard flow
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
      closeBtn.focus();
    }
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.add('hidden');
    if (lastActiveElement) {
      lastActiveElement.focus();
      lastActiveElement = null;
    }
  };

  const setupModal = (openBtnId, modalId) => {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        openModal(modal);
      });
    }
  };

  setupModal('disclaimer-open', 'disclaimer-modal');
  setupModal('privacy-open', 'privacy-modal');

  // Handle Escape key to close modals or mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('[id$="-modal"]:not(.hidden)');
      if (activeModal) {
        closeModal(activeModal);
      } else if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
      }
    }
  });

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('[id$="-modal"]');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal on background click
  window.addEventListener('click', (e) => {
    if (e.target.id && e.target.id.endsWith('-modal')) {
      closeModal(e.target);
    }
  });

  // Character counter, honeypot validation, and asynchronous UX submission for contact form
  const contactForm = document.querySelector('form[aria-labelledby="contact-title"]');
  const messageArea = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');
  const formContent = document.getElementById('form-content');
  const formSuccess = document.getElementById('form-success');
  const successTitle = document.getElementById('success-title');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const honeypot = contactForm.querySelector('input[name="website_url"]');
      if (honeypot && honeypot.value !== '') {
        alert('Message could not be sent.');
        return;
      }

      // Enter loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed', 'animate-pulse');
        submitBtn.textContent = 'Sending...';
      }

      // Retrieve form values to populate the mailto URL
      const firstname = document.getElementById('firstname')?.value || '';
      const lastname = document.getElementById('lastname')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const company = document.getElementById('company')?.value || '';
      const projectTypeSelect = document.getElementById('project-type');
      const projectType = projectTypeSelect ? projectTypeSelect.options[projectTypeSelect.selectedIndex]?.text : '';
      const timelineSelect = document.getElementById('timeline');
      const timeline = timelineSelect ? timelineSelect.options[timelineSelect.selectedIndex]?.text : '';
      const message = document.getElementById('message')?.value || '';

      const emailSubject = `Lunatech Project Query from ${firstname} ${lastname}`;
      const emailBody = `Name: ${firstname} ${lastname}
Email: ${email}
Company: ${company || 'N/A'}
Project Type: ${projectType}
Timeline: ${timeline}

Description:
${message}`;

      const mailtoUrl = `mailto:info@lunatech.co.za?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Simulate API call latency (1.2 seconds) before success transition
      setTimeout(() => {
        if (formContent && formSuccess) {
          formContent.classList.add('hidden');
          formSuccess.classList.remove('hidden');

          // Smoothly scroll the success container to the center of the viewport so the user doesn't lose context
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

          if (successTitle) {
            // Use preventScroll to avoid browser scrolling the focused element under our fixed header
            successTitle.focus({ preventScroll: true });
          }

          // Trigger the user's native email client with pre-populated values
          window.location.href = mailtoUrl;
        }
      }, 1200);
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
