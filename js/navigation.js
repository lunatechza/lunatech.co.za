// Highlight active navigation link
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('nav-link-active');
      link.setAttribute('aria-current', 'page');
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
