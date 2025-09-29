
// Employee Slider JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const employeeSwiper = new Swiper('.projectss-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.projectss-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: window.innerWidth < 1024 ? 5 : 7,
        },
        navigation: {
            nextEl: '.projectss-next',
            prevEl: '.projectss-prev',
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
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    dynamicMainBullets: 5,
                }
            },
            1024: {
                slidesPerView: 5,
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
});