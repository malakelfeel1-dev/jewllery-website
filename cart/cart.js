
document.addEventListener('DOMContentLoaded', function() {
 
  setTimeout(function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
     
      const newHamburger = hamburger.cloneNode(true);
      hamburger.parentNode.replaceChild(newHamburger, hamburger);
      
    
      newHamburger.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (navMenu) {
          navMenu.classList.toggle('show');
        }
      });
     
      document.addEventListener('click', function(e) {
        if (navMenu && newHamburger && !newHamburger.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove('show');
        }
      });
    }
  }, 100);

  const translations = {
    en: {
      logo: "Jewelry 💎", home: "Home", shop: "Shop", contact: "Contact",
      limited: "Limited Edition", testimonials: "Testimonials", cart: "Cart",
      account: "Account", about: "About", cartTitle: "Your Cart",
      empty: "Your cart is empty 🛒", total: "Total:", continue: "🛍 Continue to Shopping",
      paymentTitle: "Payment Details", name: "Name on Card",
      card: "Card Number (16 digits)", expiry: "Expiry Date (MM/YY)",
      cvv: "CVV (3 digits)", purchase: "Complete Purchase",
      success: "✅ Purchase completed successfully 💎",
      fillAll: "❌ Please fill all fields correctly.",
      remove: "Remove", removeConfirm: "Remove this item from cart?"
    },
    ar: {
      logo: "مجوهرات 💎", home: "الرئيسية", shop: "المتجر", contact: "اتصل بنا",
      limited: "إصدارات محدودة", testimonials: "آراء العملاء", cart: "السلة",
      account: "الحساب", about: "من نحن", cartTitle: "سلة المشتريات",
      empty: "سلتك فارغة 🛒", total: "الإجمالي:", continue: "🛍 متابعة التسوق",
      paymentTitle: "بيانات الدفع", name: "الاسم على البطاقة",
      card: "رقم البطاقة (16 رقمًا)", expiry: "تاريخ الانتهاء (MM/YY)",
      cvv: "الرمز السري CVV (3 أرقام)", purchase: "إتمام الشراء",
      success: "✅ تم إتمام الشراء بنجاح 💎",
      fillAll: "❌ الرجاء تعبئة جميع الحقول بشكل صحيح.",
      remove: "حذف", removeConfirm: "هل تريد حذف هذا العنصر من السلة؟"
    },
    fr: {
      logo: "Bijoux 💎", home: "Accueil", shop: "Boutique", contact: "Contact",
      limited: "Édition Limitée", testimonials: "Témoignages", cart: "Panier",
      account: "Compte", about: "À propos", cartTitle: "Votre Panier",
      empty: "Votre panier est vide 🛒", total: "Total:", continue: "🛍 Continuer les achats",
      paymentTitle: "Détails de paiement", name: "Nom sur la carte",
      card: "Numéro de carte (16 chiffres)", expiry: "Date d'expiration (MM/AA)",
      cvv: "CVV (3 chiffres)", purchase: "Finaliser l'achat",
      success: "✅ Achat complété avec succès 💎",
      fillAll: "❌ Veuillez remplir tous les champs correctement.",
      remove: "Supprimer", removeConfirm: "Supprimer cet article du panier?"
    },
    es: {
      logo: "Joyería 💎", home: "Inicio", shop: "Tienda", contact: "Contacto",
      limited: "Edición Limitada", testimonials: "Testimonios", cart: "Carrito",
      account: "Cuenta", about: "Acerca de", cartTitle: "Tu Carrito",
      empty: "Tu carrito está vacío 🛒", total: "Total:", continue: "🛍 Continuar comprando",
      paymentTitle: "Detalles de pago", name: "Nombre en la tarjeta",
      card: "Número de tarjeta (16 dígitos)", expiry: "Fecha de vencimiento (MM/AA)",
      cvv: "CVV (3 dígitos)", purchase: "Completar compra",
      success: "✅ Compra completada con éxito 💎",
      fillAll: "❌ Por favor complete todos los campos correctamente.",
      remove: "Eliminar", removeConfirm: "¿Eliminar este artículo del carrito?"
    }
  };

  const langSelect = document.getElementById('languageSelect');
  const navLinks = document.querySelectorAll('[data-lang]');
  const placeholders = document.querySelectorAll('[data-lang-placeholder]');
  const purchaseBtn = document.getElementById("purchase-btn");
  const successMessage = document.getElementById("success-message");
  const nameInput = document.getElementById("name");
  const cardInput = document.getElementById("card");
  const expiryInput = document.getElementById("expiry");
  const cvvInput = document.getElementById("cvv");

  function applyLang(lang){
    const t = translations[lang] || translations.en;
    navLinks.forEach(el => { 
      const key = el.getAttribute('data-lang'); 
      if(t[key]) el.textContent = t[key]; 
    });
    placeholders.forEach(el => { 
      const key = el.getAttribute('data-lang-placeholder'); 
      if(t[key]) el.placeholder = t[key]; 
    });
    if (purchaseBtn) purchaseBtn.textContent = t.purchase;
    if (successMessage) successMessage.textContent = t.success;
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  }

  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  if (langSelect) {
    langSelect.value = savedLang;
    applyLang(savedLang);
  }

  if (langSelect) {
    langSelect.addEventListener('change', ()=>{
      const selected = langSelect.value;
      localStorage.setItem('siteLanguage', selected);
      applyLang(selected);
    });
  }

  
  if (cardInput) {
    cardInput.addEventListener('input', ()=>{
      cardInput.value = cardInput.value.replace(/\D/g,'');
    });
  }

  if (expiryInput) {
    expiryInput.addEventListener('input', ()=>{
      let val = expiryInput.value.replace(/\D/g,'');
      if(val.length>2) val = val.slice(0,2)+'/'+val.slice(2,4);
      expiryInput.value = val;
    });
  }

  if (cvvInput) {
    cvvInput.addEventListener('input', ()=>{
      cvvInput.value = cvvInput.value.replace(/\D/g,'');
    });
  }

  
  if (purchaseBtn && successMessage) {
    purchaseBtn.addEventListener('click',(e)=>{
      const lang = langSelect ? langSelect.value : 'en';
      const t = translations[lang] || translations.en;
      if (successMessage) successMessage.style.display = 'none';

      if(!nameInput || !nameInput.value || !cardInput || !cardInput.value || !expiryInput || !expiryInput.value || !cvvInput || !cvvInput.value){
        alert(t.fillAll);
        return;
      }
      if(cardInput.value.length!==16){
        alert(t.fillAll);
        return;
      }
      if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryInput.value)){
        alert(t.fillAll);
        return;
      }
      if(cvvInput.value.length!==3){
        alert(t.fillAll);
        return;
      }


      if (successMessage) successMessage.style.display='block';
    });
  }

  let cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartItemsContainer = document.getElementById('cart-items');
  const totalElement = document.querySelector('.total');

  function removeFromCart(index) {
    const lang = langSelect ? langSelect.value : 'en';
    const t = translations[lang] || translations.en;
    
    if (confirm(t.removeConfirm || 'Remove this item from cart?')) {
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      displayCart();
    }
  }

  function clearCart() {
    const lang = langSelect ? langSelect.value : 'en';
    const t = translations[lang] || translations.en;
    
    const confirmMsg = lang === 'ar' ? 'هل تريد حذف جميع العناصر من السلة؟' : 
                      lang === 'fr' ? 'Vider tout le panier?' :
                      lang === 'es' ? '¿Vaciar todo el carrito?' :
                      'Clear entire cart?';
    
    if (confirm(confirmMsg)) {
      cartItems = [];
      localStorage.setItem('cart', JSON.stringify(cartItems));
      displayCart();
    }
  }

  function displayCart() {
    if (!cartItemsContainer) return;
    
    const lang = langSelect ? langSelect.value : 'en';
    const t = translations[lang] || translations.en;
    
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = `<p style="text-align:center; color:#d4af37;">${t.empty}</p>`;
      if (totalElement) totalElement.textContent = `${t.total} $0.00`;
      return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cartItems.map((item, index) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
      total += price;
      return `
        <div class="cart-item" data-index="${index}">
          <img src="${item.img || ''}" alt="${item.name}">
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${index})" title="${t.remove}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    }).join('');

    if (totalElement) {
      totalElement.textContent = `${t.total} $${total.toFixed(2)}`;
    }
  }


  window.removeFromCart = removeFromCart;
  window.clearCart = clearCart;

  displayCart();
});

