// ÜRÜN LİSTESİ (Burayı Sunumdaki Ürün Adlarına Göre Düzenle)
const productsDB = [
    { id: 1, name: "Squishables Başlangıç Kiti", price: 450, image: "product1.jpg" },
    { id: 2, name: "Orman Maceraları Seti", price: 550, image: "product2.jpg" },
    { id: 3, name: "Uzay Kaşifi Seti", price: 600, image: "product3.jpg" }
];

// SEPET SİSTEMİ (Sayfa yenilense de gitmez)
let cart = JSON.parse(localStorage.getItem('squishCart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
    renderCartContents();
});

// Sepete Ekleme Fonksiyonu
function addToCart(productId) {
    const product = productsDB.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('squishCart', JSON.stringify(cart)); // Hafızaya al
    updateCartIcon();
    renderCartContents();
    toggleCart(true); // Sepeti aç
}

// Sepeti Güncelle
function updateCartIcon() {
    const badge = document.getElementById('cart-count');
    if(badge) badge.innerText = cart.length;
}

// Sepet İçeriğini Ekrana Basma
function renderCartContents() {
    const cartContainer = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');
    
    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='text-align:center; margin-top:20px;'>Sepetiniz boş.</p>";
    } else {
        cart.forEach((item, index) => {
            totalPrice += item.price;
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <div class="item-info">
                        <h4>${item.name}</h4>
                        <span>₺${item.price}</span>
                    </div>
                    <button onclick="removeFromCart(${index})" class="btn-remove">Sil</button>
                </div>
            `;
        });
    }

    if(totalElement) totalElement.innerText = `Toplam: ₺${totalPrice}`;
}

// Sepetten Silme
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('squishCart', JSON.stringify(cart));
    updateCartIcon();
    renderCartContents();
}

// Sepet Aç/Kapa
function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById('cartSidebar');
    if (forceOpen) {
        sidebar.classList.add('active');
    } else {
        sidebar.classList.toggle('active');
    }
}

// Login Modal Aç/Kapa
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Guide İndirme Fonksiyonu
function downloadGuide(fileName) {
    const link = document.createElement('a');
    link.href = fileName; // İndirilecek dosyanın adı
    link.download = fileName; // İndirme emri
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Rehber cihazınıza indiriliyor...");
}
