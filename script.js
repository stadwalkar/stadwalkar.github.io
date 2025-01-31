document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
                navLinks.classList.remove('show');
            }
        }
    });

    // Header scroll behavior
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {  // Only apply on mobile
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                // Scrolling down & past the header
                header.classList.add('hide');
            } else {
                // Scrolling up
                header.classList.remove('hide');
            }
            
            lastScroll = currentScroll;
        } else {
            // On desktop, always show header
            header.classList.remove('hide');
        }
    });
}); 