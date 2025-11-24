// Sayfa yüklendiğinde çalışacaklar
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sepete Ekle Butonu Animasyonu
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = "Eklendi! 🎉";
            button.style.backgroundColor = "#4CAF50"; // Yeşil renk
            setTimeout(() => {
                button.textContent = "Sepete Ekle";
                button.style.backgroundColor = "#6C63FF"; // Eski renge dön
            }, 2000);
        });
    });

    // 2. Smooth Scroll (Menüye tıklayınca yumuşak geçiş)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    console.log("Squishables Website Ready! 🚀");
});
