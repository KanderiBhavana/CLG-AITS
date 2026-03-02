window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
    } else {
        nav.style.padding = '20px 8%';
    }
});

console.log("AITS Portal Initialized Successfully.");
