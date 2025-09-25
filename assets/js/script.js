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
            dynamicBullets: true,
            dynamicMainBullets: window.innerWidth < 1024 ? 5 : 7,
        },
        navigation: {
            nextEl: '.projects-next',
            prevEl: '.projects-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    dynamicMainBullets: 5,
                }
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    dynamicMainBullets: 5,
                }
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    dynamicMainBullets: 7,
                }
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

// Hero section scroll functionality
function initHeroScroll() {
    const scrollButton = document.getElementById('scroll-to-next');
    const nextSection = document.getElementById('next-section');
    
    if (scrollButton && nextSection) {
        scrollButton.addEventListener('click', function() {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

// Locations tabs functionality
function initLocationsTabs() {
    const locationItems = document.querySelectorAll('.location-item');
    const locationContents = document.querySelectorAll('.location-content');
    const locationImage = document.getElementById('location-image');
    
    // Image mapping
    const imageMap = {
        'dallas': 'assets/home/dallas.jpg',
        'fortworth': 'assets/home/fortworth.jpg',
        'austin': 'assets/home/austin.jpg',
        'sanantonio': 'assets/home/sanantonio.jpg',
        'houston': 'assets/home/houston.jpg',
        'oklahoma': 'assets/home/oklahoma.jpg'
    };
    
    locationItems.forEach(item => {
        item.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            
            // Remove active class from all items
            locationItems.forEach(loc => {
                loc.classList.remove('active');
                const span = loc.querySelector('span');
                const numberSpan = loc.querySelector('.number');
                const lineContainer = loc.querySelector('div');
                
                // Reset to inactive state
                if (span) {
                    span.style.fontSize = '19px';
                    span.style.color = '#4A4A4A';
                }
                
                // Reset number color to gray
                if (numberSpan) {
                    numberSpan.style.color = '#4A4A4A';
                }
                
                // Replace red line with transparent div for inactive items
                if (lineContainer) {
                    // Remove any existing image or div
                    const img = lineContainer.querySelector('img');
                    const div = lineContainer.querySelector('div');
                    if (img) {
                        img.remove();
                    }
                    if (div) {
                        div.remove();
                    }
                    // Add transparent div
                    lineContainer.insertAdjacentHTML('afterbegin', '<div class="h-8 bg-transparent mr-4" style="width: 8%; margin-left: -32px;"></div>');
                }
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            const span = this.querySelector('span');
            const numberSpan = this.querySelector('.number');
            const lineContainer = this.querySelector('div');
            
            // Set active state
            if (span) {
                span.style.fontSize = '28px';
                span.style.color = '#000';
            }
            
            // Set number color to red for active item
            if (numberSpan) {
                numberSpan.style.color = '#D80027';
            }
            
            // Add red line SVG for active item
            if (lineContainer) {
                // Remove any existing image or div
                const img = lineContainer.querySelector('img');
                const div = lineContainer.querySelector('div');
                if (img) {
                    img.remove();
                }
                if (div) {
                    div.remove();
                }
                // Add red line image
                lineContainer.insertAdjacentHTML('afterbegin', '<img src="assets/home/redline.svg" alt="Red line" class="h-8 mr-4 cursor-pointer" style="margin-left: -32px; width: 8%;" onclick="event.stopPropagation();">');
            }
            
            // Hide all content first
            locationContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Show selected content
            const selectedContent = document.getElementById(location + '-content');
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
            
            // Update image
            if (locationImage && imageMap[location]) {
                locationImage.src = imageMap[location];
                locationImage.alt = location.charAt(0).toUpperCase() + location.slice(1);
            }
        });
    });
}

// Mobile locations functionality
function initMobileLocations() {
    const mobileLocationItems = document.querySelectorAll('.mobile-location-item');
    const mobileLocationContents = document.querySelectorAll('.mobile-location-content');
    
    mobileLocationItems.forEach(item => {
        item.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            
            // Remove active class from all items
            mobileLocationItems.forEach(loc => {
                loc.classList.remove('active');
                const span = loc.querySelector('span');
                const numberSpan = loc.querySelector('.number');
                const lineContainer = loc.querySelector('div');
                
                // Reset to inactive state
                if (span) {
                    span.style.color = '#4A4A4A';
                }
                
                // Reset number color to gray
                if (numberSpan) {
                    numberSpan.style.color = '#4A4A4A';
                }
                
                // Replace red line with transparent div for inactive items
                if (lineContainer) {
                    // Remove any existing image or div
                    const img = lineContainer.querySelector('img');
                    const div = lineContainer.querySelector('div');
                    if (img) {
                        img.remove();
                    }
                    if (div) {
                        div.remove();
                    }
                    // Add transparent div
                    lineContainer.insertAdjacentHTML('afterbegin', '<div class="w-2 h-6 bg-transparent mr-4"></div>');
                }
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            const span = this.querySelector('span');
            const numberSpan = this.querySelector('.number');
            const lineContainer = this.querySelector('div');
            
            // Set active state
            if (span) {
                span.style.color = '#000';
            }
            
            // Set number color to red for active item
            if (numberSpan) {
                numberSpan.style.color = '#D80027';
            }
            
            // Add red line SVG for active item
            if (lineContainer) {
                // Remove any existing image or div
                const img = lineContainer.querySelector('img');
                const div = lineContainer.querySelector('div');
                if (img) {
                    img.remove();
                }
                if (div) {
                    div.remove();
                }
                // Add red line image
                lineContainer.insertAdjacentHTML('afterbegin', '<img src="assets/home/redline.svg" alt="Red line" class="h-6 mr-4 w-2">');
            }
            
            // Hide all content first
            mobileLocationContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show selected content
            const selectedContent = document.getElementById('mobile-' + location + '-content');
            if (selectedContent) {
                selectedContent.classList.remove('hidden');
            }
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();
    initScrollAnimations();
    initResponsiveNav();
    initSwiperResponsive();
    initParallax();
    initLazyLoading();
    initHeroScroll();
    initLocationsTabs();
    initMobileLocations();
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