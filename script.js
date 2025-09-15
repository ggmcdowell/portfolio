document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.portfolio-section');
    const images = document.querySelectorAll('.portfolio-image');
    const indicatorContainer = document.querySelector('.scroll-indicator');
    
    // Dynamically create indicator dots for all sections
    sections.forEach((section, index) => {
        const dot = document.createElement('div');
        dot.className = 'indicator-dot';
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-section', index);
        indicatorContainer.appendChild(dot);
    });
    
    const indicators = document.querySelectorAll('.indicator-dot');
    let currentSection = 0;

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src && !img.src) {
                    const loadingPlaceholder = document.createElement('div');
                    loadingPlaceholder.className = 'loading-placeholder';
                    img.parentElement.appendChild(loadingPlaceholder);
                    
                    img.classList.add('loading');
                    
                    const tempImg = new Image();
                    tempImg.onload = function() {
                        img.src = src;
                        img.classList.remove('loading');
                        img.classList.add('loaded');
                        
                        if (loadingPlaceholder.parentElement) {
                            loadingPlaceholder.remove();
                        }
                    };
                    tempImg.onerror = function() {
                        console.error('Failed to load image:', src);
                        if (loadingPlaceholder.parentElement) {
                            loadingPlaceholder.remove();
                        }
                    };
                    tempImg.src = src;
                }
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px'
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                const index = parseInt(entry.target.getAttribute('data-index'));
                currentSection = index;
                updateIndicators(index);
                
                const nextIndex = index + 1;
                if (nextIndex < images.length) {
                    const nextImg = images[nextIndex];
                    const nextSrc = nextImg.getAttribute('data-src');
                    if (nextSrc && !nextImg.src) {
                        const preloadImg = new Image();
                        preloadImg.src = nextSrc;
                    }
                }
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    function updateIndicators(activeIndex) {
        indicators.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    indicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const newSection = Math.round(scrollPosition / windowHeight);
            
            if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
                currentSection = newSection;
                updateIndicators(currentSection);
            }
        }, 50);
    });

    const firstImage = images[0];
    if (firstImage) {
        const firstSrc = firstImage.getAttribute('data-src');
        if (firstSrc) {
            firstImage.src = firstSrc;
            firstImage.classList.add('loaded');
        }
    }
    
    sections[0]?.classList.add('visible');
});