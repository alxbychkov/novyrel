document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  
  if (burger && nav) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on nav links
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  const langSelect = document.querySelector('.nav__lang-select');
  if (!langSelect) return;

  const flag = langSelect.querySelector('.nav__lang-flag');
  const label = langSelect.querySelector('.nav__lang-label');
  const dropdown = langSelect.querySelector('.nav__lang-dropdown');
  const options = langSelect.querySelectorAll('.nav__lang-option');

  // Toggle dropdown
  langSelect.addEventListener('click', function (e) {
    langSelect.classList.toggle('open');
  });

  // Close dropdown on outside click
  document.addEventListener('click', function (e) {
    if (!langSelect.contains(e.target)) {
      langSelect.classList.remove('open');
    }
  });

  // Keyboard accessibility
  langSelect.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      langSelect.classList.remove('open');
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      langSelect.classList.toggle('open');
    }
  });

  // Option click
  options.forEach((option) => {
    option.addEventListener('click', function (e) {
      e.stopPropagation();
      const lang = option.getAttribute('data-lang');
      const textContent = option.querySelector('span').textContent;
      // const src = option.querySelector('img').src;

      // flag.src = src;
      // flag.alt = lang;
      label.textContent = textContent;
      langSelect.classList.remove('open');
      langSelect.blur();

      // Redirect to appropriate language version
      const currentUrl = window.location.href;
      const origin = window.location.origin;
      const base = window.location.pathname.includes('/novyrel/') ? '/novyrel' : '';
      const pathAfterOrigin = currentUrl.replace(origin + base, '');
      
      if (lang === 'en') {
        // Add /en after origin
        if (pathAfterOrigin.startsWith('/en')) {
          // Already in German version, do nothing
          return;
        }
        window.location.href = origin + base + '/en' + pathAfterOrigin;
      } else {
        // Remove /de from path
        if (pathAfterOrigin.startsWith('/en')) {
          const pathWithoutDe = pathAfterOrigin.replace('/en', '');
          window.location.href = origin + base + pathWithoutDe;
        }
      }
    });
  });
});
