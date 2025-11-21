document.addEventListener('DOMContentLoaded', () => {
    // --- SAYFA GEÇİŞ MANTIĞI ---
    const navLinks = document.querySelectorAll('.nav-link:not(#nav-signup-btn)'); // Signup butonu hariç linkler
    const sections = document.querySelectorAll('.page-section');

    function switchPage(pageId) {
        // Tüm sayfaları gizle
        sections.forEach(sec => sec.classList.remove('active'));
        // Tüm linklerin aktifliğini kaldır
        navLinks.forEach(link => link.classList.remove('active'));
        
        // İstenen sayfayı aç
        const activeSection = document.getElementById(pageId);
        if(activeSection) activeSection.classList.add('active');

        // Linki aktif yap
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if(activeLink) activeLink.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            switchPage(pageId);
        });
    });

    // --- 🔥 POPUP (MODAL) MANTIĞI 🔥 ---
    const modal = document.getElementById('signupModal');
    const openBtns = document.querySelectorAll('.trigger-popup, #nav-signup-btn'); // Hem menüdeki hem sayfadaki butonlar
    const closeBtn = document.querySelector('.close-btn');

    // Butonlara tıklayınca aç
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });
    });

    // X işaretine basınca kapat
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Siyah boşluğa tıklayınca kapat
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
