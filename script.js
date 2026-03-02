function explore() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// Fade-in animation on load
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});
