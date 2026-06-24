function applyActiveNavState() {
  var body = document.body;
  var pageKey = body.getAttribute('data-page');
  var subPageKey = body.getAttribute('data-subpage');

  if (pageKey) {
    document.querySelectorAll('[data-nav-key="' + pageKey + '"]').forEach(function (node) {
      node.classList.add('active');
    });
  }

  if (subPageKey) {
    document.querySelectorAll('[data-subnav-key="' + subPageKey + '"]').forEach(function (node) {
      node.classList.add('active');
    });
  }
}

function initNavigationBehavior() {
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
}

function updateFooterYear() {
  document.querySelectorAll('.year').forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });
}

async function injectSharedLayout() {
  var headerHost = document.getElementById('site-header');
  var footerHost = document.getElementById('site-footer');

  if (!headerHost || !footerHost) {
    return;
  }

  var responses = await Promise.all([
    fetch('partials/header.html'),
    fetch('partials/footer.html')
  ]);

  var headerHtml = await responses[0].text();
  var footerHtml = await responses[1].text();

  headerHost.innerHTML = headerHtml;
  footerHost.innerHTML = footerHtml;
}

document.addEventListener('DOMContentLoaded', async function () {
  await injectSharedLayout();
  applyActiveNavState();
  initNavigationBehavior();
  updateFooterYear();
});
