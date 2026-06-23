/**
 * Main navigation and interaction JavaScript
 * Cotton Collegiate Alumni Association Website
 */

/**
 * Navigation smooth scroll helper
 * @param {string} sectionId - The ID of the section to navigate to
 */
function smoothNavigate(sectionId) {
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Close dropdown menus when clicking outside
 */
document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-links li')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

/**
 * Initialize navigation
 */
document.addEventListener('DOMContentLoaded', function() {
    // Set current page indicator if needed
    const currentPage = getCurrentPageName();
    highlightCurrentNav(currentPage);

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    const nav = document.querySelector('nav');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Mobile dropdown toggle
    const navItems = document.querySelectorAll('.nav-links > li');
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');

        if (dropdown) {
            link.addEventListener('click', function(e) {
                // Only prevent default on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close menu when a link is clicked
    const allLinks = document.querySelectorAll('.nav-links a');
    allLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburgerBtn && nav) {
                hamburgerBtn.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });
});

/**
 * Get the current page filename
 * @returns {string} Current page name
 */
function getCurrentPageName() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
}

/**
 * Highlight the current navigation item
 * @param {string} currentPage - Current page name
 */
function highlightCurrentNav(currentPage) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.backgroundColor = 'var(--primary-color)';
            link.style.color = 'var(--text-light)';
        }
    });
}

/**
 * Submit contact form handler
 * Can be customized to integrate with backend services
 */
function handleContactFormSubmit(event) {
    if (event) {
        event.preventDefault();
    }
    // Form submission can be handled here or via form action attribute
    // Current setup uses Formspree for email handling
}
