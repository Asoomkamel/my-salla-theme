/**
 * Main JavaScript file for My Salla Theme
 */

// Import dependencies
import 'animate.css';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import anime from 'animejs';

// Theme Configuration
const themeConfig = {
    animations: {
        enabled: true,
        duration: 300
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSearch();
    initProductOptions();
    initCartActions();
    initAnimations();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

/**
 * Search Functionality
 */
function initSearch() {
    const searchInput = document.querySelector('[data-search-input]');
    const searchResults = document.querySelector('[data-search-results]');

    if (searchInput) {
        let debounceTimer;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = e.target.value.trim();

                if (query.length >= 3) {
                    // Perform search
                    console.log('Searching for:', query);
                    // Implement actual search logic with API
                }
            }, 300);
        });
    }
}

/**
 * Product Option Selection (Color, Size, Quantity)
 */
function initProductOptions() {
    // Color selection
    document.querySelectorAll('[data-color-option]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest('[data-color-options]');
            if (parent) {
                parent.querySelectorAll('[data-color-option]').forEach(b => {
                    b.classList.remove('ring-2', 'ring-custom-primary');
                });
                e.target.classList.add('ring-2', 'ring-custom-primary');
            }
        });
    });

    // Quantity buttons
    document.querySelectorAll('[data-quantity-btn]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.quantityBtn;
            const container = e.target.closest('[data-quantity-container]');
            const input = container?.querySelector('[data-quantity-input]');

            if (input) {
                let value = parseInt(input.value) || 1;

                if (action === 'increase') {
                    value++;
                } else if (action === 'decrease' && value > 1) {
                    value--;
                }

                input.value = value;
            }
        });
    });
}

/**
 * Cart Actions (Add to Cart, Update Quantity, Remove)
 */
function initCartActions() {
    // Add to Cart
    document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const productId = e.target.dataset.productId || e.target.closest('[data-product-card]')?.dataset.productId;

            if (productId) {
                try {
                    // Show loading state
                    e.target.disabled = true;
                    e.target.innerHTML = '<span class="spinner"></span>';

                    // Add to cart (API call)
                    // await salla.cart.add(productId);

                    // Show success message
                    await Swal.fire({
                        icon: 'success',
                        title: 'Added to Cart!',
                        text: 'Product has been added to your cart.',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // Update cart UI
                    updateCartUI();

                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Could not add product to cart. Please try again.'
                    });
                } finally {
                    e.target.disabled = false;
                }
            }
        });
    });

    // Remove from Cart
    document.querySelectorAll('[data-remove-from-cart]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const itemId = e.target.dataset.itemId;

            if (itemId) {
                const result = await Swal.fire({
                    icon: 'question',
                    title: 'Remove Item?',
                    text: 'Are you sure you want to remove this item from your cart?',
                    showCancelButton: true,
                    confirmButtonText: 'Remove',
                    cancelButtonText: 'Cancel'
                });

                if (result.isConfirmed) {
                    // Remove from cart (API call)
                    // await salla.cart.remove(itemId);
                    updateCartUI();
                }
            }
        });
    });
}

/**
 * Update Cart UI (Badge count, etc.)
 */
function updateCartUI() {
    const cartBadge = document.querySelector('[data-cart-badge]');
    if (cartBadge) {
        // Fetch cart count and update
        // const cart = await salla.cart.get();
        // cartBadge.textContent = cart.count;
    }
}

/**
 * Page Animations
 */
function initAnimations() {
    if (!themeConfig.animations.enabled) return;

    // Fade in elements on scroll
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.dataset.animate;
                    animateElement(entry.target, animation);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }
}

/**
 * Animate Single Element
 */
function animateElement(element, animation = 'fadeInUp') {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: themeConfig.animations.duration,
        easing: 'easeOutQuad'
    });
}

/**
 * Newsletter Form
 */
document.querySelectorAll('[data-newsletter-form]').forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]')?.value;

        if (email) {
            try {
                // Subscribe (API call)
                // await salla.newsletter.subscribe(email);

                await Swal.fire({
                    icon: 'success',
                    title: 'Subscribed!',
                    text: 'Thank you for subscribing to our newsletter.',
                    showConfirmButton: false,
                    timer: 2000
                });

                form.reset();
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Could not subscribe. Please try again.'
                });
            }
        }
    });
});

/**
 * Wishlist Toggle
 */
document.querySelectorAll('[data-wishlist-toggle]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        const productId = e.target.dataset.productId;
        const isInWishlist = e.target.classList.contains('active');

        // Toggle wishlist (API call)
        // if (isInWishlist) {
        //     await salla.wishlist.remove(productId);
        // } else {
        //     await salla.wishlist.add(productId);
        // }

        e.target.classList.toggle('active');
        e.target.classList.toggle('text-red-500');
    });
});
