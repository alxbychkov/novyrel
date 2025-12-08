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

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
      if (window.innerWidth > 1024) return;
      const clickInsideNav = nav.contains(e.target);
      const clickOnBurger = burger.contains(e.target);
      if (!clickInsideNav && !clickOnBurger && nav.classList.contains('active')) {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  const langSelect = document.querySelectorAll('.lang-select');

  if (!langSelect.length) return;

  let options = [];

  langSelect.forEach(s => {
    options = [...options, ...s.querySelectorAll('[data-lang]')];
  });

  // Option click
  options.forEach((option) => {
    option.addEventListener('click', function (e) {
      e.stopPropagation();
      const lang = option.getAttribute('data-lang');

      // Redirect to appropriate language version
      const currentUrl = window.location.href;
      const origin = window.location.origin;
      const base = window.location.pathname.includes('/novyrel/') ? '/novyrel' : '';
      const pathAfterOrigin = currentUrl.replace(origin + base, '');

      if (lang === 'en') {
        // Add /en after origin
        if (pathAfterOrigin.startsWith('/en')) {
          // Already in English version, do nothing
          return;
        }
        window.location.href = origin + base + '/en' + pathAfterOrigin;
      } else {
        // Remove /en from path
        if (pathAfterOrigin.startsWith('/en')) {
          const pathWithoutDe = pathAfterOrigin.replace('/en', '');
          window.location.href = origin + base + pathWithoutDe;
        }
      }
    });
  });
});
