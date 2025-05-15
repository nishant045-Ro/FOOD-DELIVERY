// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Restaurant category filter functionality
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real application, this would filter restaurants
            // For demo purposes, just add a visual indication
            categoryItems.forEach(cat => cat.classList.remove('selected'));
            this.classList.add('selected');
            
            const categoryName = this.querySelector('h5').textContent;
            alert(`You selected the ${categoryName} category. Restaurants would be filtered.`);
        });
    });

    // Order now button functionality
    const orderButtons = document.querySelectorAll('.restaurant-card .btn-outline-primary');
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get restaurant info
            const card = this.closest('.restaurant-card');
            const restaurantName = card.querySelector('.card-title').textContent;
            
            // Show notification
            alert(`You are about to order from ${restaurantName}. In a real app, this would open the menu.`);
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-form input');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                alert(`Searching for "${searchTerm}"... In a real app, this would show search results.`);
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add animation on scroll for restaurants and cuisine cards
    const animateOnScrollElements = document.querySelectorAll('.restaurant-card, .cuisine-card, .category-item');
    
    function checkVisibility() {
        animateOnScrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);

    // Add a CSS class for animation
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .restaurant-card, .cuisine-card, .category-item {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .restaurant-card.visible, .cuisine-card.visible, .category-item.visible {
                opacity: 1;
                transform: translateY(0);
            }
        </style>
    `);
}); 