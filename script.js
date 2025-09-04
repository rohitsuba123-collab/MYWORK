// Simple JavaScript for cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-btn span');
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = `Cart (${count})`;
            
            // Animation feedback
            this.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i>';
            }, 1000);
        });
    });
    
    // CTA button functionality
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('click', function() {
        alert('Welcome to EliteSteps! Our full product catalog is coming soon.');
    });
});