
document.addEventListener('DOMContentLoaded', function() {
  
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      localStorage.setItem("productName", card.querySelector('h3').textContent);
      localStorage.setItem("productPrice", card.dataset.price);
      localStorage.setItem("productDesc", card.dataset.desc);
      localStorage.setItem("productImg", card.dataset.img);
      window.location.href = "../product/product.html";
    });
  });

  const translations = {
    English: {
      pageTitle: "Limited Edition Collections",
      products: [
        "The Lunar Cascade Necklace",
        "The Whisper Blue Set",
        "The Grand Lumière Set",
        "The Golden Sunlight Sets",
        "The Spectrum Choker",
        "The Vintage Belle Set",
        "The Desert Glaze Choker",
        "The Celestial Garland Set"
      ]
    },
    Arabic: {
      pageTitle: "مجموعات الإصدار المحدود",
      products: [
        "عقد الشلال القمري",
        "طقم الهمس الأزرق",
        "طقم لومير الكبير",
        "طقم ضوء الشمس الذهبي",
        "طوق الطيف",
        "طقم فينتاج بيل",
        "طوق الصحراء المشرق",
        "طقم إكليل السماء"
      ]
    },
    French: {
      pageTitle: "Collections Édition Limitée",
      products: [
        "Collier Cascade Lunaire",
        "Ensemble Bleu Whisper",
        "Ensemble Grand Lumière",
        "Ensembles Soleil Doré",
        "Collier Spectrum",
        "Ensemble Vintage Belle",
        "Collier Glaze Désert",
        "Ensemble Guirlande Céleste"
      ]
    },
    Spanish: {
      pageTitle: "Colecciones Edición Limitada",
      products: [
        "Collar Cascada Lunar",
        "Conjunto Azul Susurro",
        "Conjunto Gran Lumière",
        "Conjuntos Luz Dorada",
        "Gargantilla Espectro",
        "Conjunto Vintage Belle",
        "Gargantilla Brillo Desierto",
        "Conjunto Guirnalda Celestial"
      ]
    }
  };

  const langSelect = document.getElementById('languageSelect');
  const pageTitle = document.getElementById('pageTitle');
  const productCards = document.querySelectorAll('.product-card');

  function applyLang(lang) {
    const t = translations[lang] || translations.English;
    if (pageTitle) pageTitle.textContent = t.pageTitle;
    productCards.forEach((card, index) => {
      const h3 = card.querySelector('h3');
      if (h3 && t.products[index]) h3.textContent = t.products[index];
    });
    document.body.dir = (lang === "Arabic") ? "rtl" : "ltr";
  }

  const savedLang = localStorage.getItem('siteLanguage') || "English";
  if (langSelect) {
    langSelect.value = savedLang;
    applyLang(savedLang);
  }

  if (langSelect) {
    langSelect.addEventListener('change', () => {
      const selected = langSelect.value;
      localStorage.setItem('siteLanguage', selected);
      applyLang(selected);
    });
  }


  setTimeout(function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
  
      const newHamburger = hamburger.cloneNode(true);
      if (hamburger.parentNode) {
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
      }
      
      
      newHamburger.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (navMenu) {
          navMenu.classList.toggle('show');
        }
      });
      
      const closeMenuHandler = function(e) {
        if (navMenu && newHamburger && !newHamburger.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove('show');
        }
      };
      
      document.addEventListener('click', closeMenuHandler);
    }
  }, 150);
});

