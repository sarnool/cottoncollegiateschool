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
            dropdown.style.display = 'none';
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
