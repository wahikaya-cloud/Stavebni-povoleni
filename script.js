// Plynulé rolování na stránce (beze změny)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animace prvků při rolování
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.sluzba-card, .step-card, .testimonial-card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.2 // Karta se objeví, když je 20 % viditelných
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});