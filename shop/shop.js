document.addEventListener('DOMContentLoaded', function() {

  function toggleSub(categoryDiv){
    const sub = categoryDiv.querySelector('.subcategory');
    if(sub.style.display === 'block'){
      sub.style.display = 'none';
    } else {
      sub.style.display = 'block';
    }
  }

  function showItems(event, id){
    event.stopPropagation();
    document.querySelectorAll('.items').forEach(i => i.style.display='none');
    const el = document.getElementById(id);
    if(el) el.style.display = 'flex';
  }

  function goToProduct(product){
    for(const key in product){
      localStorage.setItem('product'+key.charAt(0).toUpperCase() + key.slice(1), product[key]);
    }
   
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(p => p && !p.endsWith('.html'));
    const isInSubfolder = pathParts.length > 1;
    const productPath = isInSubfolder ? "../product/product.html" : "product/product.html";
    window.location.href = productPath;
  }

  window.toggleSub = toggleSub;
  window.showItems = showItems;
  window.goToProduct = goToProduct;

  function addToCart(product, showMessage = true) {
    try {
   
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      const existingIndex = cart.findIndex(item => 
        item.name === product.name && item.price === product.price
      );
      
      if (existingIndex === -1) {
       
        cart.push({
          name: product.name,
          price: product.price,
          img: product.img || '',
          desc: product.desc || product.name
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        
        if (showMessage) {
         
          const langSelect = document.getElementById('languageSelect');
          const currentLang = langSelect ? langSelect.value : 'en';
          
          
          let langKey = 'en';
          if (currentLang === 'Arabic' || currentLang === 'ar') langKey = 'ar';
          else if (currentLang === 'French' || currentLang === 'fr') langKey = 'fr';
          else if (currentLang === 'Spanish' || currentLang === 'es') langKey = 'es';
          
          const messages = {
            en: 'Product added to cart!',
            ar: 'تم إضافة المنتج إلى السلة!',
            fr: 'Produit ajouté au panier!',
            es: '¡Producto agregado al carrito!'
          };
          alert(messages[langKey] || messages.en);
        }
        return true;
      } else {
        if (showMessage) {
          const langSelect = document.getElementById('languageSelect');
          const currentLang = langSelect ? langSelect.value : 'en';
          
          let langKey = 'en';
          if (currentLang === 'Arabic' || currentLang === 'ar') langKey = 'ar';
          else if (currentLang === 'French' || currentLang === 'fr') langKey = 'fr';
          else if (currentLang === 'Spanish' || currentLang === 'es') langKey = 'es';
          
          const messages = {
            en: 'Product is already in your cart!',
            ar: 'المنتج موجود بالفعل في السلة!',
            fr: 'Le produit est déjà dans votre panier!',
            es: '¡El producto ya está en tu carrito!'
          };
          alert(messages[langKey] || messages.en);
        }
        return false;
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding product to cart. Please try again.');
      return false;
    }
  }


  window.addToCart = addToCart;


  const translationsShop = {
    English: {
      pageTitle: "Discover the Art of Jewelry",
      categories: [
        {name:"Men", sub:["Chains","Wedding Rings","Bracelets"]},
        {name:"Women", sub:["Necklaces","Rings","Bracelets","Full Set"]}
      ],
      footerAbout: "About Us",
      footerText: "Luxury jewelry designs made to make you shine and express your style.",
      footerQuickLinks: "Quick Links",
      footerFollowUs: "Follow Us",
      footerCopyright: "© 2025 Jewelry. All Rights Reserved.",
      products: {
       
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
      }
    },
    Arabic: {
      pageTitle: "اكتشف فن المجوهرات",
      categories: [
        {name:"رجال", sub:["سلاسل","خواتم الزفاف","أساور"]},
        {name:"نساء", sub:["قلادات","خواتم","أساور","طقم كامل"]}
      ],
      footerAbout: "من نحن",
      footerText: "تصاميم مجوهرات فاخرة تجعلك تتألقين وتعبرين عن أسلوبك.",
      footerQuickLinks: "روابط سريعة",
      footerFollowUs: "تابعنا",
      footerCopyright: "© 2025 مجوهرات. جميع الحقوق محفوظة.",
      products: {
       
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
      }
    },
    French: {
      pageTitle: "Découvrez l'art de la joaillerie",
      categories: [
        {name:"Hommes", sub:["Chaînes","Bagues de mariage","Bracelets"]},
        {name:"Femmes", sub:["Colliers","Bagues","Bracelets","Ensemble complet"]}
      ],
      footerAbout: "À propos de nous",
      footerText: "Bijoux de luxe conçus pour vous faire briller et exprimer votre style.",
      footerQuickLinks: "Liens rapides",
      footerFollowUs: "Suivez-nous",
      footerCopyright: "© 2025 Jewelry. Tous droits réservés.",
      products: {
   
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
      }
    },
    Spanish: {
      pageTitle: "Descubre el arte de la joyería",
      categories: [
        {name:"Hombres", sub:["Cadenas","Anillos de boda","Pulseras"]},
        {name:"Mujeres", sub:["Collares","Anillos","Pulseras","Juego completo"]}
      ],
      footerAbout: "Sobre nosotros",
      footerText: "Joyas de lujo diseñadas para hacerte brillar y expresar tu estilo.",
      footerQuickLinks: "Enlaces rápidos",
      footerFollowUs: "Síguenos",
      footerCopyright: "© 2025 Jewelry. Todos los derechos reservados.",
      products: {
       
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
    }
  };

  const langSelect = document.getElementById('languageSelect');
  const pageTitleEl = document.querySelector('.shop-title');
  const categoryHeaders = document.querySelectorAll('.category > h2');
  const subButtons = document.querySelectorAll('.subcategory button');

  function applyShopLang(lang) {
    const t = translationsShop[lang] || translationsShop.English;

    if (pageTitleEl) pageTitleEl.textContent = t.pageTitle;
    
    
    categoryHeaders.forEach((cat, i) => { 
      if (t.categories[i]) cat.textContent = t.categories[i].name; 
    });

    let subIndex = 0;
    t.categories.forEach(cat => {
      cat.sub.forEach(sub => {
        if(subButtons[subIndex]) subButtons[subIndex].textContent = sub;
        subIndex++;
      });
    });

    document.querySelectorAll('[data-lang="footerAbout"]').forEach(el => {
      el.textContent = t.footerAbout;
    });
    document.querySelectorAll('[data-lang="footerText"]').forEach(el => {
      el.textContent = t.footerText;
    });
    document.querySelectorAll('[data-lang="footerQuickLinks"]').forEach(el => {
      el.textContent = t.footerQuickLinks;
    });
    document.querySelectorAll('[data-lang="footerFollowUs"]').forEach(el => {
      el.textContent = t.footerFollowUs;
    });
    document.querySelectorAll('[data-lang="footerCopyright"]').forEach(el => {
      el.textContent = t.footerCopyright;
    });

    
    const footerLinks = {
      English: { home: "Home", shop: "Shop", contact: "Contact" },
      Arabic: { home: "الرئيسية", shop: "المتجر", contact: "اتصل بنا" },
      French: { home: "Accueil", shop: "Boutique", contact: "Contact" },
      Spanish: { home: "Inicio", shop: "Tienda", contact: "Contacto" }
    };
    const footerT = footerLinks[lang] || footerLinks.English;
    document.querySelectorAll('footer [data-lang="home"]').forEach(el => {
      el.textContent = footerT.home;
    });
    document.querySelectorAll('footer [data-lang="shop"]').forEach(el => {
      el.textContent = footerT.shop;
    });
    document.querySelectorAll('footer [data-lang="contact"]').forEach(el => {
      el.textContent = footerT.contact;
    });

    document.querySelectorAll('.card h3').forEach(h3 => {
      const card = h3.closest('.card');
      if (!card) return;
      
      let originalName = h3.getAttribute('data-original-name');
      if (!originalName) {
   
        const onclickStr = card.getAttribute('onclick');
        if (onclickStr) {
          const match = onclickStr.match(/name:'([^']+)'/);
          if (match) {
            originalName = match[1];
            h3.setAttribute('data-original-name', originalName);
          } else {
            originalName = h3.textContent.trim();
            h3.setAttribute('data-original-name', originalName);
          }
        } else {
          originalName = h3.textContent.trim();
          h3.setAttribute('data-original-name', originalName);
        }
      }
      
  
      if (t.products && t.products[originalName]) {
        h3.textContent = t.products[originalName];
      }
    });

    document.body.dir = (lang === "Arabic") ? "rtl" : "ltr";
  }

  const savedLang = localStorage.getItem('siteLanguage') || "English";
  if (langSelect) {
    langSelect.value = savedLang;
    applyShopLang(savedLang);
  }

  if (langSelect) {
    langSelect.addEventListener('change', () => {
      const selected = langSelect.value;
      localStorage.setItem('siteLanguage', selected);
      applyShopLang(selected);
    });
  }
});

