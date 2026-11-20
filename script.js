(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  const passwordForm = document.querySelector('#dialogue-password-form');
  const passwordInput = document.querySelector('#dialogue-password');
  const passwordFeedback = document.querySelector('#password-feedback');
  const privateContent = document.querySelector('#dialogue-private-content');
  const dialoguePassword = 'aecs2026';

  if (passwordForm && passwordInput && passwordFeedback && privateContent) {
    passwordForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (passwordInput.value === dialoguePassword) {
        privateContent.hidden = false;
        passwordForm.hidden = true;
        passwordFeedback.textContent = '';
        privateContent.setAttribute('tabindex', '-1');
        privateContent.focus();
        return;
      }

      passwordFeedback.textContent = 'Mot de passe incorrect. Veuillez réessayer.';
      passwordInput.value = '';
      passwordInput.focus();
    });
  }

  if (toggle && navigation) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
      navigation.classList.toggle('open', !isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Ouvrir le menu');
        navigation.classList.remove('open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Ouvrir le menu');
        navigation.classList.remove('open');
        toggle.focus();
      }
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.proposal-card, .timeline-item, .quote-card, .principles-art');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    revealItems.forEach((item) => item.classList.add('reveal'));
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
