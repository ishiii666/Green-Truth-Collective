document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal sections on scroll
    const scrollReveal = () => {
        const sections = document.querySelectorAll('section');
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for scroll reveal
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Initial check

    // 2. Simple hover micro-interaction for cards
    const cards = document.querySelectorAll('.box-accent, .box-action, .exposure-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });

    // 4. Smooth Tab Transitions (if any were used, but we use full page links)
    // For now, let's just log that the collective is active
    console.log("%c [ GREEN TRUTH COLLECTIVE ] %c Systems Active. Truth Encrypted. ", "background: #231f20; color: #a8cf45; font-weight: bold; padding: 4px;", "color: #231f20;");
});
