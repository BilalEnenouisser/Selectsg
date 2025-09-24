// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdown = this.parentElement;
            const content = dropdown.querySelector('.mobile-dropdown-content');
            const arrow = this.querySelector('svg');
            
            // Close all other dropdowns first
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    const otherDropdown = otherToggle.parentElement;
                    const otherContent = otherDropdown.querySelector('.mobile-dropdown-content');
                    const otherArrow = otherToggle.querySelector('svg');
                    
                    otherContent.classList.add('hidden');
                    otherArrow.classList.remove('rotate-180');
                }
            });
            
            // Toggle current dropdown content
            content.classList.toggle('hidden');
            
            // Rotate arrow
            arrow.classList.toggle('rotate-180');
        });
    });
});

// Smooth scroll functionality
function smoothScroll() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        observer.observe(section);
    });

    // Observe service items
    document.querySelectorAll('.service-item').forEach(item => {
        item.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
        observer.observe(item);
    });
}

// Responsive navigation
function initResponsiveNav() {
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.classList.add('bg-white', 'shadow-md');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-white', 'shadow-md');
            nav.classList.add('bg-transparent');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Swiper responsive configuration
function initSwiperResponsive() {
    const swiper = new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.projects-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.projects-next',
            prevEl: '.projects-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
}

// Parallax effect for hero section - DISABLED
function initParallax() {
    // Parallax effect removed as requested
    return;
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();
    initScrollAnimations();
    initResponsiveNav();
    initSwiperResponsive();
    initParallax();
    initLazyLoading();
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .service-item {
        transition: all 0.5s ease;
    }
    
    .service-item:hover {
        transform: translateY(-5px);
    }
    
    .swiper-slide {
        transition: transform 0.3s ease;
    }
    
    .swiper-slide:hover {
        transform: scale(1.02);
    }
    
    @media (max-width: 768px) {
        .hero-section h1 {
            font-size: 3rem !important;
        }
        
        .services-section .grid {
            grid-template-columns: 1fr;
        }
        
        .footer .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
    
    @media (max-width: 640px) {
        .hero-section h1 {
            font-size: 2.5rem !important;
        }
        
        .hero-section p {
            font-size: 1.125rem !important;
        }
        
        .section-title {
            font-size: 2.5rem !important;
        }
    }
`;
document.head.appendChild(style);