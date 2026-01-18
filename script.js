document.addEventListener('DOMContentLoaded', () => {
    // Gallery Setup
    const galleryGrid = document.getElementById('gallery-grid');
    const imageCount = 18; // 1.jfif to 18.jfif

    for (let i = 1; i <= imageCount; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item reveal';
        item.innerHTML = `
            <img src="${i}.jfif" alt="Can Durmuş Fotoğraf ${i}">
            <div class="gallery-overlay">
                <div class="overlay-text">
                    <h4>Can Durmuş</h4>
                    <p>Yaşamdan Kareler ${i}</p>
                </div>
            </div>
        `;
        galleryGrid.appendChild(item);
    }

    // Scroll Reveal Animation
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission (Demo)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mesajınız gönderildi! (Demo)');
            form.reset();
        });
    }

    // Header Background Change on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 10%';
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.padding = '1.5rem 10%';
            header.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });
});
