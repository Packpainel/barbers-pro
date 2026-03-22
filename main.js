document.addEventListener('DOMContentLoaded', () => {
    // --- GSAP SETUP ---
    gsap.registerPlugin(ScrollTrigger);

    // --- CUSTOM CURSOR ---
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'none'
        });
        
        gsap.to(follower, {
            x: e.clientX - 20,
            y: e.clientY - 20,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Hover effect for elite buttons
    document.querySelectorAll('.btn-elite, .logo').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(follower, {
                scale: 1.5,
                borderColor: '#fff',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                duration: 0.3
            });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(follower, {
                scale: 1,
                borderColor: '#D4AF37',
                backgroundColor: 'transparent',
                duration: 0.3
            });
        });
    });

    // --- 10K REVEALS ---
    const reveals = document.querySelectorAll('.hidden-text');
    
    reveals.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.2
        });
    });

    // --- BENTO GRID STAGGER ---
    gsap.to('.bento-item', {
        scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out'
    });

    // --- MOCKUP PARALLAX ---
    gsap.to('.mockup-10k', {
        scrollTrigger: {
            trigger: '.mockup-10k',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
        rotateX: -10,
        rotateY: 10,
        y: -100,
        ease: 'none'
    });

    // --- SMOOTH LIQUID SCROLL ---
    // Since we don't have ScrollSmoother, we'll use standard smooth scroll logic
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initial load reveal
    gsap.to('body', { opacity: 1, duration: 2, ease: 'power2.out' });

    console.log("Barbers Pro v3.0: 10K Digital Experience Engaged.");
});
