document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');
    
    // Mobil menü Aç/Kapa işlevi (Geliştirme için)
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Sayfa Geçiş İşlevi (SPA Mantığı)
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    function switchPage(targetPageId) {
        // Tüm linklerin ve bölümlerin aktifliğini kaldır
        navLinks.forEach(link => link.classList.remove('active'));
        
        pageSections.forEach(section => {
            section.classList.remove('active');
        });

        // Hedef bölümü bul ve aktif hale getir
        const targetSection = document.getElementById(targetPageId);
        if (targetSection) {
            // Bölümü görünür yap ve aktif sınıfını ekle
            targetSection.style.display = 'block'; 
            setTimeout(() => targetSection.classList.add('active'), 10); // Kısa gecikme opacity için

            // Tıklanan linki aktif hale getir
            document.querySelector(`[data-page="${targetPageId}"]`).classList.add('active');
        }
        
        // Mobil menü açıksa kapat (sadece mobil cihazlar için)
        if (mainNav.classList.contains('active')) {
             mainNav.classList.remove('active');
        }
    }

    // Linklere tıklama olayını ekle
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetPageId = link.getAttribute('data-page');
            switchPage(targetPageId);
        });
    });

    // Sitenin ilk açılışında Anasayfa'yı (hero) göster
    switchPage('hero'); 
});
