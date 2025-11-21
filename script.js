document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Küçük ekranlarda menü açıldığında otomatik kapanmasını sağlamak
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });
});
