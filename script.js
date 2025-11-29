// Main JavaScript for LegalEase Law Firm

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    feather.replace();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Book cart functionality would go here
    const addToCartButtons = document.querySelectorAll('.book-card button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would add the book to a shopping cart
            const bookTitle = this.closest('.book-card').querySelector('h3').textContent;
            alert(`${bookTitle} has been added to your cart!`);
        });
    });
    
    // Mobile menu toggle would be handled by the navbar component
});