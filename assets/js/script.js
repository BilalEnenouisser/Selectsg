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
