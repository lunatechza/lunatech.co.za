// Navigation and UI interactions
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation links (desktop and mobile)
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

  // Mobile menu toggle & interactions (scroll lock, click outside, ESC key, resize)
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const closeMobileMenu = () => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    }
  };

  const toggleMobileMenu = () => {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn?.setAttribute('aria-expanded', (!isHidden).toString());
    document.body.classList.toggle('overflow-hidden', !isHidden);
  };

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
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

  // Handle Keyboard Navigation (Escape key to close, Tab key to trap focus within modal)
  document.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('[id$="-modal"]:not(.hidden)');
    if (e.key === 'Escape') {
      if (activeModal) {
        closeModal(activeModal);
      } else {
        closeMobileMenu();
      }
    } else if (e.key === 'Tab' && activeModal) {
      const focusables = activeModal.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
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

      // Retrieve and sanitize form values to protect against HTML injection / XSS
      const sanitizeHTML = (text) => (text ? text.replace(/<[^>]*>/g, '') : '');

      const firstname = sanitizeHTML(document.getElementById('firstname')?.value || '');
      const lastname = sanitizeHTML(document.getElementById('lastname')?.value || '');
      const email = sanitizeHTML(document.getElementById('email')?.value || '');
      const company = sanitizeHTML(document.getElementById('company')?.value || '');
      const projectTypeSelect = document.getElementById('project-type');
      const projectType = projectTypeSelect ? projectTypeSelect.options[projectTypeSelect.selectedIndex]?.text : '';
      const timelineSelect = document.getElementById('timeline');
      const timeline = timelineSelect ? timelineSelect.options[timelineSelect.selectedIndex]?.text : '';
      const message = sanitizeHTML(document.getElementById('message')?.value || '');

      // Defense-in-depth input length validation
      if (firstname.length > 50 || lastname.length > 50 || email.length > 100 || company.length > 100 || message.length > 2000) {
        alert('An input field exceeds the allowed character limit.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-70', 'cursor-not-allowed', 'animate-pulse');
          submitBtn.textContent = 'Discuss your project';
        }
        return;
      }

      // Secure email format validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-70', 'cursor-not-allowed', 'animate-pulse');
          submitBtn.textContent = 'Discuss your project';
        }
        return;
      }

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
