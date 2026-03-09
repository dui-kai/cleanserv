/**
 * CleanServ Pro - Main JavaScript
 * Handles mobile navigation and form validation
 */

(function() {
    'use strict';

    // DOM Elements
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    const contactForm = document.getElementById('contact-form');
    const header = document.querySelector('.header');

    // Mobile Menu Toggle
    function initMobileMenu() {
        if (!mobileMenuToggle || !nav) return;

        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');

            // Update aria-expanded
            const isExpanded = nav.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a nav link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Header scroll effect
    function initHeaderScroll() {
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }

            lastScroll = currentScroll;
        });
    }

    // Form Validation and Submission
    function initContactForm() {
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');

            // Clear previous error states
            clearErrors();

            // Validate fields
            let isValid = true;

            if (!name.value.trim()) {
                showError(name, 'Please enter your name');
                isValid = false;
            }

            if (!email.value.trim()) {
                showError(email, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }

            if (!phone.value.trim()) {
                showError(phone, 'Please enter your phone number');
                isValid = false;
            } else if (!isValidPhone(phone.value)) {
                showError(phone, 'Please enter a valid phone number');
                isValid = false;
            }

            if (isValid) {
                // Show success message
                showFormMessage('success', 'Thank you! Your quote request has been submitted. We\'ll be in touch shortly.');

                // Reset form
                contactForm.reset();

                // In a real implementation, you would send the form data to a server here
                // Example: sendFormData(new FormData(contactForm));
            }
        });
    }

    // Utility Functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        // Allow various phone formats
        const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        input.style.borderColor = '#dc2626';

        // Create error message element
        const errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        errorEl.style.cssText = 'color: #dc2626; font-size: 0.85rem; margin-top: 5px; display: block;';

        formGroup.appendChild(errorEl);
    }

    function clearErrors() {
        // Remove all error messages
        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(function(el) {
            el.remove();
        });

        // Reset input border colors
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(function(input) {
            input.style.borderColor = '';
        });

        // Remove form message
        const formMessage = contactForm.querySelector('.form-message');
        if (formMessage) {
            formMessage.remove();
        }
    }

    function showFormMessage(type, message) {
        // Remove existing message
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = 'form-message ' + type;
        messageEl.textContent = message;

        // Insert at top of form
        contactForm.insertBefore(messageEl, contactForm.firstChild);

        // Scroll to message
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(function() {
                messageEl.style.opacity = '0';
                messageEl.style.transition = 'opacity 0.3s ease';
                setTimeout(function() {
                    messageEl.remove();
                }, 300);
            }, 5000);
        }
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                const href = this.getAttribute('href');

                if (href === '#') return;

                const target = document.querySelector(href);

                if (target) {
                    event.preventDefault();

                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Initialize all functionality
    function init() {
        initMobileMenu();
        initHeaderScroll();
        initContactForm();
        initSmoothScroll();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
