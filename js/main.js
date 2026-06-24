/* Navigation Toggle */
(function () {
  var hamburger = document.querySelector('.hamburger');
  var body = document.body;
  var header = document.querySelector('.site-header');
  var submenuParents = document.querySelectorAll('.has-submenu');

  if (!hamburger || !header) {
    return;
  }

  function closeMenus() {
    body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
    submenuParents.forEach(function (item) {
      item.classList.remove('open');
    });
  }

  hamburger.addEventListener('click', function () {
    var isOpen = body.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  submenuParents.forEach(function (parent) {
    var trigger = parent.querySelector(':scope > a');
    if (!trigger) {
      return;
    }

    trigger.addEventListener('click', function (event) {
      if (window.matchMedia('(max-width: 759px)').matches) {
        event.preventDefault();
        parent.classList.toggle('open');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!header.contains(event.target)) {
      closeMenus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 760px)').matches) {
      closeMenus();
    }
  });
})();

/* Footer Year */
document.querySelectorAll('.year').forEach(function (node) {
  node.textContent = new Date().getFullYear();
});
