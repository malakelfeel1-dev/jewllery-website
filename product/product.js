document.addEventListener('DOMContentLoaded', function() {
  const product = {
    name: localStorage.getItem("productName"),
    price: localStorage.getItem("productPrice"),
    desc: localStorage.getItem("productDesc"),
    img: localStorage.getItem("productImg"),
    material: localStorage.getItem("productMaterial"),
    rating: localStorage.getItem("productRating"),
    category: localStorage.getItem("productCategory") || "Jewelry"
  };

  if (!product.name || !product.img) {
    document.body.innerHTML = "<h2 style='color:#c9a063;text-align:center;'>No product selected.</h2>";
    return;
  }

  const productTranslations = {
    en: {
   
      "The Classic Snake": "The Classic Snake",
      "The Medium Curb": "The Medium Curb",
      "The Minimalist Rope": "The Minimalist Rope",
      "The Iced Cuban Collar": "The Iced Cuban Collar",
      "The Layered Diamond Tennis": "The Layered Diamond Tennis",
 
      "The Classic Band": "The Classic Band",
      "The Eternity Ring": "The Eternity Ring",
      "The Dual-Tone Set": "The Dual-Tone Set",
      "The Modern Solitaire": "The Modern Solitaire",
 
      "The Diamond Tennis Bracelet": "The Diamond Tennis Bracelet",
      "The Pave Block Link": "The Pave Block Link",
      "The Iced Cuban Link": "The Iced Cuban Link",
      "The White Gold Curb Chain": "The White Gold Curb Chain",
      "The Heavyweight Gold Cuban": "The Heavyweight Gold Cuban",
  
      "Lariat Necklace": "Lariat Necklace",
      "Glimmer Choker": "Glimmer Choker",
      "The Cascade": "The Cascade",
      "The Lumina": "The Lumina",
      "The Duet": "The Duet",
  
      "The Empress Ring": "The Empress Ring",
      "The Dynasty Ring": "The Dynasty Ring",
      "The Legacy Ring": "The Legacy Ring",
      "The Sovereign Ring": "The Sovereign Ring",
      "The Covenant Ring": "The Covenant Ring",
  
      "The Eternal Cascade": "The Eternal Cascade",
      "The Trinity Band": "The Trinity Band",
      "The Delicate Line": "The Delicate Line",
      "The Rose Gold Charms": "The Rose Gold Charms",
      "Majestic Weave": "Majestic Weave",
     
      "The Purity Choker Set": "The Purity Choker Set",
      "The Solitaire Stream Set": "The Solitaire Stream Set",
      "The Plunge Festoon Set": "The Plunge Festoon Set",
      "The Starburst Cascade Set": "The Starburst Cascade Set",
      "The Bow Lariat Set": "The Bow Lariat Set"
    },
    ar: {
    
      "The Classic Snake": "الثعبان الكلاسيكي",
      "The Medium Curb": "المنحنى المتوسط",
      "The Minimalist Rope": "الحبل البسيط",
      "The Iced Cuban Collar": "طوق الكوبي المثلج",
      "The Layered Diamond Tennis": "التنس الماسي المتعدد الطبقات",
     
      "The Classic Band": "الخاتم الكلاسيكي",
      "The Eternity Ring": "خاتم الأبدية",
      "The Dual-Tone Set": "طقم الألوان المزدوجة",
      "The Modern Solitaire": "الخاتم الفردي العصري",
     
      "The Diamond Tennis Bracelet": "سوار التنس الماسي",
      "The Pave Block Link": "رابط البلوك المزين",
      "The Iced Cuban Link": "رابط الكوبي المثلج",
      "The White Gold Curb Chain": "سلسلة المنحنى الذهبية البيضاء",
      "The Heavyweight Gold Cuban": "الكوبي الذهبي الثقيل",
      
      "Lariat Necklace": "عقد اللاريات",
      "Glimmer Choker": "طوق اللمعان",
      "The Cascade": "الشلال",
      "The Lumina": "اللومينا",
      "The Duet": "الثنائي",
     
      "The Empress Ring": "خاتم الإمبراطورة",
      "The Dynasty Ring": "خاتم السلالة",
      "The Legacy Ring": "خاتم الإرث",
      "The Sovereign Ring": "خاتم السيادة",
      "The Covenant Ring": "خاتم العهد",
 
      "The Eternal Cascade": "الشلال الأبدي",
      "The Trinity Band": "شريط الثالوث",
      "The Delicate Line": "الخط الرقيق",
      "The Rose Gold Charms": "تعاويذ الذهب الوردي",
      "Majestic Weave": "النسيج المهيب",
      
      "The Purity Choker Set": "طقم طوق النقاء",
      "The Solitaire Stream Set": "طقم تيار الخاتم الفردي",
      "The Plunge Festoon Set": "طقم القوس المغمور",
      "The Starburst Cascade Set": "طقم شلال النجوم",
      "The Bow Lariat Set": "طقم قوس اللاريات"
    },
    fr: {

      "The Classic Snake": "Le Serpent Classique",
      "The Medium Curb": "Le Curb Moyen",
      "The Minimalist Rope": "La Corde Minimaliste",
      "The Iced Cuban Collar": "Le Collier Cubain Glacé",
      "The Layered Diamond Tennis": "Le Tennis Diamant à Couches",
      
      "The Classic Band": "L'Anneau Classique",
      "The Eternity Ring": "L'Anneau d'Éternité",
      "The Dual-Tone Set": "L'Ensemble Bicolore",
      "The Modern Solitaire": "Le Solitaire Moderne",
    
      "The Diamond Tennis Bracelet": "Le Bracelet Tennis Diamant",
      "The Pave Block Link": "Le Lien Bloc Pavé",
      "The Iced Cuban Link": "Le Lien Cubain Glacé",
      "The White Gold Curb Chain": "La Chaîne Curb Or Blanc",
      "The Heavyweight Gold Cuban": "Le Cubain Or Lourd",
    
      "Lariat Necklace": "Collier Lariat",
      "Glimmer Choker": "Collier Scintillant",
      "The Cascade": "La Cascade",
      "The Lumina": "La Lumina",
      "The Duet": "Le Duo",
    
      "The Empress Ring": "L'Anneau de l'Impératrice",
      "The Dynasty Ring": "L'Anneau de la Dynastie",
      "The Legacy Ring": "L'Anneau de l'Héritage",
      "The Sovereign Ring": "L'Anneau Souverain",
      "The Covenant Ring": "L'Anneau de l'Alliance",
   
      "The Eternal Cascade": "La Cascade Éternelle",
      "The Trinity Band": "La Bande de la Trinité",
      "The Delicate Line": "La Ligne Délicate",
      "The Rose Gold Charms": "Les Breloques Or Rose",
      "Majestic Weave": "Le Tissage Majestueux",
      
      "The Purity Choker Set": "L'Ensemble Collier de Pureté",
      "The Solitaire Stream Set": "L'Ensemble Ruisseau Solitaire",
      "The Plunge Festoon Set": "L'Ensemble Feston Plongé",
      "The Starburst Cascade Set": "L'Ensemble Cascade Étoilée",
      "The Bow Lariat Set": "L'Ensemble Lariat à Nœud"
    },
    es: {
      
      "The Classic Snake": "La Serpiente Clásica",
      "The Medium Curb": "El Curb Mediano",
      "The Minimalist Rope": "La Cuerda Minimalista",
      "The Iced Cuban Collar": "El Collar Cubano Helado",
      "The Layered Diamond Tennis": "El Tenis de Diamante en Capas",
   
      "The Classic Band": "La Banda Clásica",
      "The Eternity Ring": "El Anillo de Eternidad",
      "The Dual-Tone Set": "El Juego de Dos Tonos",
      "The Modern Solitaire": "El Solitario Moderno",
  
      "The Diamond Tennis Bracelet": "La Pulsera de Tenis de Diamante",
      "The Pave Block Link": "El Enlace de Bloque Pavé",
      "The Iced Cuban Link": "El Enlace Cubano Helado",
      "The White Gold Curb Chain": "La Cadena Curb de Oro Blanco",
      "The Heavyweight Gold Cuban": "El Cubano de Oro Pesado",
  
      "Lariat Necklace": "Collar Lariat",
      "Glimmer Choker": "Gargantilla Brillante",
      "The Cascade": "La Cascada",
      "The Lumina": "La Lumina",
      "The Duet": "El Dúo",
     
      "The Empress Ring": "El Anillo de la Emperatriz",
      "The Dynasty Ring": "El Anillo de la Dinastía",
      "The Legacy Ring": "El Anillo del Legado",
      "The Sovereign Ring": "El Anillo Soberano",
      "The Covenant Ring": "El Anillo del Pacto",
      
      "The Eternal Cascade": "La Cascada Eterna",
      "The Trinity Band": "La Banda de la Trinidad",
      "The Delicate Line": "La Línea Delicada",
      "The Rose Gold Charms": "Los Dijes de Oro Rosa",
      "Majestic Weave": "El Tejido Majestuoso",
      
      "The Purity Choker Set": "El Juego de Gargantilla de Pureza",
      "The Solitaire Stream Set": "El Juego de Corriente Solitaria",
      "The Plunge Festoon Set": "El Juego de Festón Sumergido",
      "The Starburst Cascade Set": "El Juego de Cascada Estallido",
      "The Bow Lariat Set": "El Juego de Lariat con Lazo"
    }
  };

  const translations = {
    en: { 
      logo: "Jewelry 💎", buy: "Buy Now", cart: "Add to Cart", price: "Price", 
      material: "Material", home: "Home", shop: "Shop", contact: "Contact", 
      limited: "Limited Edition", testimonials: "Testimonials", cart: "Cart", 
      account: "Account", about: "About"
    },
    ar: { 
      logo: "المجوهرات 💎", buy: "اشتري الآن", cart: "أضف إلى السلة", price: "السعر", 
      material: "المادة", home: "الرئيسية", shop: "المتجر", contact: "اتصل بنا", 
      limited: "إصدارات محدودة", testimonials: "آراء العملاء", cart: "السلة", 
      account: "الحساب", about: "من نحن"
    },
    fr: { 
      logo: "Bijoux 💎", buy: "Acheter", cart: "Ajouter au panier", price: "Prix", 
      material: "Matériel", home: "Accueil", shop: "Boutique", contact: "Contact", 
      limited: "Édition Limitée", testimonials: "Témoignages", cart: "Panier", 
      account: "Compte", about: "À propos"
    },
    es: { 
      logo: "Joyería 💎", buy: "Comprar", cart: "Añadir al carrito", price: "Precio", 
      material: "Material", home: "Inicio", shop: "Tienda", contact: "Contacto", 
      limited: "Edición Limitada", testimonials: "Testimonios", cart: "Carrito", 
      account: "Cuenta", about: "Acerca de"
    }
  };

  function updateLanguage(lang) {
 
    let langKey = lang;
    if (lang === "Arabic" || lang === "ar") langKey = "ar";
    else if (lang === "French" || lang === "fr") langKey = "fr";
    else if (lang === "Spanish" || lang === "es") langKey = "es";
    else langKey = "en";

    const t = translations[langKey];
    const productT = productTranslations[langKey] || productTranslations.en;
    
    const buyBtn = document.getElementById("buyBtn");
    const cartBtn = document.getElementById("cartBtn");
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const productMaterial = document.getElementById("productMaterial");
    const productDesc = document.getElementById("productDesc");
    const productImg = document.getElementById("productImg");
    const productRating = document.getElementById("productRating");
    const logo = document.getElementById("logo");

    if (buyBtn) buyBtn.textContent = t.buy;
    if (cartBtn) cartBtn.textContent = t.cart;
    
   
    const originalName = product.name;
    const translatedName = productT[originalName] || originalName;
    if (productName) productName.textContent = translatedName;
    
    if (productPrice) productPrice.textContent = t.price + ": " + product.price;
    if (productMaterial) productMaterial.textContent = t.material + ": " + product.material;
    if (productDesc) productDesc.textContent = product.desc;
    if (productImg) productImg.src = product.img;
    if (productRating) productRating.textContent = product.rating;
    if (logo) logo.textContent = t.logo;

    document.querySelectorAll(".nav-left a[data-lang]").forEach(a => {
      const key = a.getAttribute("data-lang");
      if(t[key]) a.textContent = t[key];
    });

   
    document.body.dir = langKey === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = langKey;
  }


  const savedLangRaw = localStorage.getItem('siteLanguage') || localStorage.getItem('siteLang') || "English";
  let savedLang = savedLangRaw;
  if (savedLangRaw === "ar" || savedLangRaw === "Arabic") savedLang = "ar";
  else if (savedLangRaw === "fr" || savedLangRaw === "French") savedLang = "fr";
  else if (savedLangRaw === "es" || savedLangRaw === "Spanish") savedLang = "es";
  else if (savedLangRaw === "en" || savedLangRaw === "English") savedLang = "en";
  else savedLang = "en";

 
  updateLanguage(savedLang);

  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    
    if (savedLang === "ar") langSelect.value = "ar";
    else if (savedLang === "fr") langSelect.value = "fr";
    else if (savedLang === "es") langSelect.value = "es";
    else langSelect.value = "en";

    langSelect.addEventListener("change", (e) => {
      const selected = e.target.value;
      localStorage.setItem('siteLanguage', selected);
      localStorage.setItem('siteLang', selected);
      updateLanguage(selected);
    });
  }

 
  setTimeout(function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    
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

  const buyBtn = document.getElementById("buyBtn");
  const cartBtn = document.getElementById("cartBtn");

  if (buyBtn) {
    buyBtn.addEventListener('click', function() {
      
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push({
        name: product.name,
        price: product.price,
        img: product.img,
        desc: product.desc
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      window.location.href = '../cart/cart.html';
    });
  }

  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      
    
      const existingIndex = cart.findIndex(item => 
        item.name === product.name && item.price === product.price
      );
      
      if (existingIndex === -1) {
    
        cart.push({
          name: product.name,
          price: product.price,
          img: product.img,
          desc: product.desc
        });
        localStorage.setItem('cart', JSON.stringify(cart));
     
        const currentLang = langSelect ? langSelect.value : 'en';
        const messages = {
          en: 'Product added to cart!',
          ar: 'تم إضافة المنتج إلى السلة!',
          fr: 'Produit ajouté au panier!',
          es: '¡Producto agregado al carrito!'
        };
        alert(messages[currentLang] || messages.en);
      } else {
     
        const currentLang = langSelect ? langSelect.value : 'en';
        const messages = {
          en: 'Product is already in your cart!',
          ar: 'المنتج موجود بالفعل في السلة!',
          fr: 'Le produit est déjà dans votre panier!',
          es: '¡El producto ya está en tu carrito!'
        };
        alert(messages[currentLang] || messages.en);
      }
    });
  }
});

