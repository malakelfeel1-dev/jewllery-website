
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});

function removeFromCart(index) {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
  
      if (window.location.pathname.includes('cart.html')) {
        window.location.reload();
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error removing from cart:', error);
    return false;
  }
}


function clearCart() {
  try {
    localStorage.setItem('cart', JSON.stringify([]));
    
 
    if (window.location.pathname.includes('cart.html')) {
      window.location.reload();
    }
    return true;
  } catch (error) {
    console.error('Error clearing cart:', error);
    return false;
  }
}


window.removeFromCart = removeFromCart;
window.clearCart = clearCart;


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a, .sidebar a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});



const translations = {
  en: {
    login: "Login",
    signup: "Sign Up",
    fullName: "Full Name",
    email: "Email",
    password: "Password",
    createPassword: "Create Password",
    confirmPassword: "Confirm Password",
    address: "Address",
    createAccount: "Create Account",
    cardNumber: "Credit Card Number",
    expiry: "Expiry Date (MM/YY)",
    cvv: "CVV (e.g. 12/3)",
    home: "Home",
    shop: "Shop",
    contact: "Contact",
    limited: "Limited Edition",
    testimonials: "Testimonials",
    cart: "Cart",
    account: "Account",
    about: "About",
    logo: "Jewelry 💎",
    footerAbout: "About Us",
    footerText: "Luxury jewelry designs made to make you shine and express your style.",
    footerLinks: "Quick Links",
    followUs: "Follow Us"
  },

  ar: {
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    createPassword: "إنشاء كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    address: "العنوان",
    createAccount: "إنشاء حساب",
    cardNumber: "رقم البطاقة",
    expiry: "تاريخ الانتهاء (MM/YY)",
    cvv: "CVV (مثال 12/3)",
    home: "الرئيسية",
    shop: "المتجر",
    contact: "اتصل بنا",
    limited: "إصدارات محدودة",
    testimonials: "آراء العملاء",
    cart: "السلة",
    account: "الحساب",
    about: "من نحن",
    logo: "مجوهرات 💎",
    footerAbout: "من نحن",
    footerText: "تصاميم مجوهرات فاخرة تجعلك تتألقين وتعبرين عن أسلوبك.",
    footerLinks: "روابط سريعة",
    followUs: "تابعنا"
  },

  fr: {
    login: "Connexion",
    signup: "Créer un compte",
    fullName: "Nom complet",
    email: "E-mail",
    password: "Mot de passe",
    createPassword: "Créer un mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    address: "Adresse",
    createAccount: "Créer un compte",
    cardNumber: "Numéro de carte",
    expiry: "Date d'expiration (MM/AA)",
    cvv: "CVV (ex: 12/3)",
    home: "Accueil",
    shop: "Boutique",
    contact: "Contact",
    limited: "Édition Limitée",
    testimonials: "Témoignages",
    cart: "Panier",
    account: "Compte",
    about: "À propos",
    logo: "Bijoux 💎",
    footerAbout: "À propos de nous",
    footerText: "Bijoux de luxe conçus pour vous faire briller et exprimer votre style.",
    footerLinks: "Liens rapides",
    followUs: "Suivez-nous"
  },

  es: {
    login: "Iniciar sesión",
    signup: "Registrarse",
    fullName: "Nombre completo",
    email: "Correo electrónico",
    password: "Contraseña",
    createPassword: "Crear contraseña",
    confirmPassword: "Confirmar contraseña",
    address: "Dirección",
    createAccount: "Crear cuenta",
    cardNumber: "Número de tarjeta",
    expiry: "Fecha de vencimiento (MM/AA)",
    cvv: "CVV (ej: 12/3)",
    home: "Inicio",
    shop: "Tienda",
    contact: "Contacto",
    limited: "Edición Limitada",
    testimonials: "Testimonios",
    cart: "Carrito",
    account: "Cuenta",
    about: "Acerca de",
    logo: "Joyería 💎",
    footerAbout: "Sobre nosotros",
    footerText: "Joyas de lujo diseñadas para hacerte brillar y expresar tu estilo.",
    footerLinks: "Enlaces rápidos",
    followUs: "Síguenos"
  }
};



document.querySelectorAll("input").forEach(input => {
  if (!input.dataset.key) {
    const placeholder = input.getAttribute("placeholder");

    switch (placeholder) {
      case "Full Name": input.dataset.key = "fullName"; break;
      case "Email": input.dataset.key = "email"; break;
      case "Password": input.dataset.key = "password"; break;
      case "Create Password": input.dataset.key = "createPassword"; break;
      case "Confirm Password": input.dataset.key = "confirmPassword"; break;
      case "Address": input.dataset.key = "address"; break;
      case "Credit Card Number": input.dataset.key = "cardNumber"; break;
      case "Expiry Date (MM/YY)": input.dataset.key = "expiry"; break;
      case "CVV (e.g. 12/3)": input.dataset.key = "cvv"; break;
    }
  }
});



function applyTranslation(lang) {
  const t = translations[lang];

  if (!t) return;

  
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");
  if (loginTab) loginTab.textContent = t.login;
  if (signupTab) signupTab.textContent = t.signup;


  document.querySelectorAll("input[data-key]").forEach(input => {
    const key = input.dataset.key;
    if (t[key]) input.placeholder = t[key];
  });

  const loginBtn = document.querySelector("#login-form button[data-key]");
  if (loginBtn) loginBtn.textContent = t.login;
  
  const signupBtn = document.querySelector("#signup-form button[data-key]");
  if (signupBtn) signupBtn.textContent = t.createAccount;

  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (t[key]) el.textContent = t[key];
  });

  const logo = document.querySelector(".logo");
  if (logo && !logo.id) logo.textContent = t.logo;


  if (lang === "ar") {
    document.body.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.body.dir = "ltr";
    document.documentElement.lang = lang;
  }
}


const langSelect = document.getElementById("languageSelect");

if (langSelect) {
  langSelect.addEventListener("change", () => {
    let lang = "en";
    const value = langSelect.value;

    if (value === "Arabic" || value === "ar") lang = "ar";
    else if (value === "French" || value === "fr") lang = "fr";
    else if (value === "Spanish" || value === "es") lang = "es";
    else if (value === "en" || value === "English") lang = "en";

    applyTranslation(lang);
    localStorage.setItem("siteLanguage", lang);
    localStorage.setItem("siteLang", lang);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("siteLanguage") || localStorage.getItem("siteLang") || "en";
  const langSelect = document.getElementById("languageSelect");
  
  if (langSelect) {
   
    if (saved === "ar") langSelect.value = langSelect.querySelector('option[value="ar"]') ? "ar" : "Arabic";
    else if (saved === "fr") langSelect.value = langSelect.querySelector('option[value="fr"]') ? "fr" : "French";
    else if (saved === "es") langSelect.value = langSelect.querySelector('option[value="es"]') ? "es" : "Spanish";
    else langSelect.value = langSelect.querySelector('option[value="en"]') ? "en" : "English";
  }
  
  applyTranslation(saved);
});
