// script.js

// Ürün Listesi
const products = [
    { id: 1, name: "Squishables Başlangıç Kiti", price: 450, img: "product1.jpg" },
    { id: 2, name: "Orman Maceraları Seti", price: 550, img: "product2.jpg" },
    { id: 3, name: "Uzay Kaşifi Seti", price: 600, img: "product3.jpg" }
];

// Sepeti Hafızadan Çek
let cart = JSON.parse(localStorage.getItem('squishCart')) || [];

// Sayfa Yüklenince Çalışacaklar
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
});

// Sepete Ekle
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    saveCart();
    renderCart();
    toggleCart(); // Sepeti aç
}

// Sepetten Sil
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

// Sepeti Kaydet (Sayfa yenilense de gitmesin)
function saveCart() {
    localStorage.setItem('squishCart', JSON.stringify(cart));
    updateCartCount();
}

// Sepeti Ekrana Bas
function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!container) return;

    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p>Sepet boş.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            container.innerHTML += `
                <div class="cart-item">
                    <div><b>${item.name}</b><br>₺${item.price}</div>
                    <button onclick="removeFromCart(${index})" style="color:red; border:none; background:none; cursor:pointer;">Sil</button>
                </div>
            `;
        });
    }
    if (totalEl) totalEl.innerText = `Toplam: ₺${total}`;
}

function updateCartCount() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = cart.length;
}

// Menü ve Modal Fonksiyonları
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
}
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}
function downloadGuide(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Rehber cihazınıza iniyor...');
}
