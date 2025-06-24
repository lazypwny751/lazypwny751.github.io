// Undertale Themed Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize all interactive features
    initSmoothScrolling();
    initTypingEffect();
    initSkillAnimations();
    initNavigationHighlight();
    initUndertaleEffects();
    initLoadingScreen();
    initMobileMenu();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                scrollToSection(targetId);
            }
        });
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Typing effect for hero title - FIXED VERSION
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-effect');
    if (!typingElement) return;
    
    const texts = [
        "* Merhaba! Ben Ahmet.",
        "* Yazılım geliştirici.",
        "* Linux uzmanı.",
        "* Siber güvenlik meraklısı.",
        "* Hoş geldin!"
    ];
    
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    function typeText() {
        const fullText = texts[currentIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }
        
        typingElement.textContent = currentText;
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentText === fullText) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing effect after a short delay
    setTimeout(typeText, 1000);
}

// Skill card animations
function initSkillAnimations() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Intersection Observer for skill cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate HP bars
                const hpFill = entry.target.querySelector('.hp-fill');
                if (hpFill) {
                    const width = hpFill.style.width;
                    hpFill.style.width = '0%';
                    setTimeout(() => {
                        hpFill.style.width = width;
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// Navigation highlight based on scroll position
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = 80;
            
            if (window.pageYOffset >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Undertale-specific effects
function initUndertaleEffects() {
    // Add sparkle effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', createSparkles);
    });
    
    // Add determination quotes
    const determinationQuotes = [
        "* Staying determined fills you with hope.",
        "* The power of fluffy boys shines within you.",
        "* You feel your sins crawling on your back.",
        "* Despite everything, it's still you.",
        "* You are filled with determination."
    ];
    
    // Random determination message
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            showDeterminationMessage(determinationQuotes[Math.floor(Math.random() * determinationQuotes.length)]);
        }
    }, 30000); // Every 30 seconds
}

// Create sparkle effect
function createSparkles(event) {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background-color: #ffff00;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
        `;
        
        document.body.appendChild(sparkle);
        
        // Animate sparkle
        sparkle.animate([
            { transform: 'translateY(0px) scale(1)', opacity: 1 },
            { transform: 'translateY(-20px) scale(0)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// Show determination message
function showDeterminationMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'determination-message';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.9);
        color: #ffff00;
        padding: 20px 30px;
        border: 3px solid #ffffff;
        font-family: 'Press Start 2P', monospace;
        font-size: 16px;
        z-index: 10000;
        text-align: center;
        max-width: 80%;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    `;
    
    document.body.appendChild(messageDiv);
    
    // Fade in
    messageDiv.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
    ], {
        duration: 500,
        easing: 'ease-out'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.animate([
            { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' }
        ], {
            duration: 500,
            easing: 'ease-in'
        }).onfinish = () => messageDiv.remove();
    }, 3000);
}

// Loading screen
function initLoadingScreen() {
    // Create loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading';
    loadingScreen.innerHTML = '<div class="loading-text">* Loading...</div>';
    
    document.body.appendChild(loadingScreen);
    
    // Simulate loading
    setTimeout(() => {
        loadingScreen.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            loadingScreen.remove();
            // Show welcome message
            setTimeout(() => {
                showDeterminationMessage("* Welcome to lazypwny751's website!");
            }, 500);
        };
    }, 2000);
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--secondary-color) !important;
        border-color: var(--secondary-color) !important;
        background-color: rgba(255, 255, 0, 0.1) !important;
    }
    
    .skill-card.animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .sparkle {
        border-radius: 50%;
        box-shadow: 0 0 6px #ffff00;
    }
`;
document.head.appendChild(style);

// Console easter egg
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    * You found the console! You're filled with              ║
║      DETERMINATION.                                          ║
║                                                              ║
║    * lazypwny751's website - Built with ❤️ and lots of      ║
║      coffee.                                                 ║
║                                                              ║
║    * Want to see the source code? Check out my GitHub!      ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`);

// Konami Code easter egg
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        showDeterminationMessage("* You found the secret! 30 lives unlocked!");
        konamiCode = [];
        
        // Add special effect
        document.body.style.animation = 'rainbow 3s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Rainbow animation for easter egg
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);
