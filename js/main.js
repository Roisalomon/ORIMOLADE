// Core Router & Layout Manager for Fondation ORIMOLADE (Modular SPA Architecture)

document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndMobileMenu();
    initRouter();
});

// Mobile Drawer & Header Initialization
function initHeaderAndMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileBackdrop = document.getElementById('mobile-backdrop');

    function openMobileMenu() {
        if (mobileDrawer && mobileBackdrop) {
            mobileDrawer.classList.remove('translate-x-full');
            mobileBackdrop.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
    }

    function closeMobileMenu() {
        if (mobileDrawer && mobileBackdrop) {
            mobileDrawer.classList.add('translate-x-full');
            mobileBackdrop.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openMobileMenu();
        });
    }
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu();
        });
    }
    if (mobileBackdrop) {
        mobileBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking navigation link inside mobile drawer
    document.querySelectorAll('#mobile-drawer [data-link]').forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
    });
}

// Load Page from window.SITE_PAGES dictionary (Zero CORS error locally)
function loadPage(pageName) {
    const mainContainer = document.getElementById('app-main');
    if (!mainContainer) return;

    // Default to index if page not found
    const targetPage = (window.SITE_PAGES && window.SITE_PAGES[pageName]) ? pageName : 'index';
    
    mainContainer.style.opacity = '0.2';

    setTimeout(() => {
        mainContainer.innerHTML = window.SITE_PAGES[targetPage];
        updateActiveNav(targetPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        mainContainer.style.opacity = '1';

        if (targetPage === 'index' && typeof initHeroCarousel === 'function') {
            initHeroCarousel();
        }

    }, 150);
}

function updateActiveNav(pageName) {
    // Desktop Nav
    document.querySelectorAll('.nav-desktop-item').forEach(el => {
        const page = el.getAttribute('data-link');
        if (page === pageName) {
            el.className = 'nav-desktop-item text-orimolade-gold font-bold relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orimolade-gold rounded transition-all duration-300';
        } else {
            el.className = 'nav-desktop-item text-gray-700 hover:text-orimolade-blue font-medium transition-colors duration-200';
        }
    });

    // Mobile Nav
    document.querySelectorAll('.nav-mobile-item').forEach(el => {
        const page = el.getAttribute('data-link');
        if (page === pageName) {
            el.className = 'nav-mobile-item flex items-center justify-between py-3 px-4 text-orimolade-gold font-bold bg-orimolade-blue/10 rounded-xl border-l-4 border-orimolade-gold';
        } else {
            el.className = 'nav-mobile-item flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-orimolade-blue rounded-xl transition-all duration-200';
        }
    });
}

function navigateTo(pageName) {
    window.location.hash = pageName;
}

function initRouter() {
    // Handle Navigation Link Clicks globally
    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-link]');
        if (target) {
            e.preventDefault();
            const pageName = target.getAttribute('data-link');
            navigateTo(pageName);
        }
    });

    // Hash Change Event
    window.addEventListener('hashchange', () => {
        const page = window.location.hash.replace('#', '') || 'index';
        loadPage(page);
    });

    // Initial Load on Page Startup
    const initialPage = window.location.hash.replace('#', '') || 'index';
    loadPage(initialPage);
}           


let heroSlideInterval = null; // Variable globale pour stopper le timer précédent

function initHeroCarousel() {
    // Nettoie un éventuel intervalle encore actif
    if (heroSlideInterval) {
        clearInterval(heroSlideInterval);
        heroSlideInterval = null;
    }

    const slideBgs = document.querySelectorAll('.hero-slide');
    const slideContents = document.querySelectorAll('.hero-content-slide');
    const dots = document.querySelectorAll('#hero-dots button');
    
    if (slideBgs.length === 0 || slideContents.length === 0) return;

    let currentSlide = 0;

    function showSlide(index) {
        // Gérer les backgrounds
        slideBgs.forEach((bg, i) => {
            if (i === index) {
                bg.classList.remove('opacity-0', 'hidden');
                bg.classList.add('opacity-100', 'block');
            } else {
                bg.classList.remove('opacity-100', 'block');
                bg.classList.add('opacity-0', 'hidden');
            }
        });

        // Gérer les contenus textes
        slideContents.forEach((content, i) => {
            if (i === index) {
                content.classList.remove('opacity-0', 'hidden');
                content.classList.add('opacity-100', 'block');
            } else {
                content.classList.remove('opacity-100', 'block');
                content.classList.add('opacity-0', 'hidden');
            }
        });

        // Gérer les dots
        if (dots.length > 0) {
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.className = 'w-8 h-2 rounded-full bg-orimolade-gold transition-all';
                } else {
                    dot.className = 'w-3 h-2 rounded-full bg-white/40 hover:bg-white transition-all';
                }
            });
        }
        currentSlide = index;
    }

    window.nextSlide = function() {
        let next = (currentSlide + 1) % slideBgs.length;
        showSlide(next);
        startInterval();
    };

    window.prevSlide = function() {
        let prev = (currentSlide - 1 + slideBgs.length) % slideBgs.length;
        showSlide(prev);
        startInterval();
    };

    window.setSlide = function(index) {
        showSlide(index);
        startInterval();
    };

    function startInterval() {
        if (heroSlideInterval) clearInterval(heroSlideInterval);
        heroSlideInterval = setInterval(() => {
            let next = (currentSlide + 1) % slideBgs.length;
            showSlide(next);
        }, 6000);
    }

    showSlide(0);
    startInterval();
}