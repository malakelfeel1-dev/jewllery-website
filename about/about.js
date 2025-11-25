document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    en: {
      home: "Home",
      shop: "Shop",
      contact: "Contact",
      limited: "Limited Edition",
      testimonials: "Testimonials",
      cart: "Cart",
      account: "Account",
      about: "About",
      logo: "Jewelry 💎",
      aboutTitle: "About Jewelry",
      aboutP1: "Welcome to Jewelry, the definitive destination for true luxury.",
      aboutP2: "We specialize in high-quality creations, offering a distinguished collection of rings, necklaces, bracelets, and beyond. Each piece is a testament to meticulous craftsmanship, engineered with precision and set with the finest materials to guarantee a finish that is both breathtaking and enduring",
      aboutP3: "Our philosophy is centered on transformative elegance. We believe jewelry should be an effortless extension of your power and style. From grand occasions to everyday statements, choosing Jewelry means embracing a lifetime of unmatched brilliance and sophisticated beauty..",
      footerAbout: "About Us",
      footerText: "Luxury jewelry designs made to make you shine and express your style.",
      footerLinks: "Quick Links",
      follow: "Follow Us"
    },
    ar: {
      home: "الرئيسية",
      shop: "المتجر",
      contact: "تواصل معنا",
      limited: "الإصدار المحدود",
      testimonials: "آراء العملاء",
      cart: "عربة التسوق",
      account: "الحساب",
      about: "من نحن",
      logo: "مجوهرات 💎",
      aboutTitle: "عن مجوهراتنا",
      aboutP1: "مرحبًا بك في مجوهراتنا، الوجهة المثالية للفخامة الحقيقية.",
      aboutP2: "حن متخصصون في تصميم قطع عالية الجودة، ونقدّم مجموعة فريدة من الخواتم والقلائد والأساور وغيرها. كل قطعة لدينا تُجسّد براعةً في الصنع ودقةً في التصميم، وتُزيَّن بأجود الخامات لضمان مظهرٍ أخّاذ ولمسةٍ تدوم طويلاً.",
      aboutP3: " قوم فلسفتنا على مفهوم الأناقة المتحوّلة. نحن نؤمن بأن المجوهرات يجب أن تكون امتدادًا طبيعيًا لقوتك وأناقتك. سواء في المناسبات الفاخرة أو الإطلالات اليومية، فإن اختيارك Jewelry يعني تبنّي الجمال والتميز والرقي الذي يدوم مدى الحياة..",
      footerAbout: "من نحن",
      footerText: "تصاميم مجوهرات فاخرة تجعلك تتألقين وتعبرين عن أسلوبك.",
      footerLinks: "روابط سريعة",
      follow: "تابعنا"
    },
    fr: {
      home: "Accueil",
      shop: "Boutique",
      contact: "Contact",
      limited: "Édition Limitée",
      testimonials: "Témoignages",
      cart: "Panier",
      account: "Compte",
      about: "À propos",
      logo: "Bijoux 💎",
      aboutTitle: "À propos de Bijoux",
      aboutP1: "Bienvenue chez Bijoux, la destination ultime du luxe authentique.",
      aboutP2: "Nous sommes spécialisés dans les créations de haute qualité, offrant une collection exceptionnelle de bagues, colliers, bracelets et bien plus encore. Chaque pièce témoigne d'un savoir-faire méticuleux, conçue avec précision et réalisée avec les matériaux les plus nobles afin de garantir une finition à la fois éblouissante et durable.",
      aboutP3: "Notre philosophie repose sur une élégance transformatrice. Nous croyons que les bijoux doivent être une extension naturelle de votre force et de votre style. Des grandes occasions aux instants du quotidien, choisir Jewelry signifie adopter une beauté raffinée et un éclat incomparable pour toute une vie.",
      footerAbout: "À propos",
      footerText: "Des bijoux de luxe conçus pour vous faire briller.",
      footerLinks: "Liens rapides",
      follow: "Suivez-nous"
    },
    es: {
      home: "Inicio",
      shop: "Tienda",
      contact: "Contacto",
      limited: "Edición Limitada",
      testimonials: "Testimonios",
      cart: "Carrito",
      account: "Cuenta",
      about: "Acerca de",
      logo: "Joyería 💎",
      aboutTitle: "Acerca de Joyería",
      aboutP1: "Bienvenido a Joyería, el destino definitivo del lujo verdadero.",
      aboutP2: "Nos especializamos en creaciones de alta calidad, ofreciendo una distinguida colección de anillos, collares, pulseras y mucho más. Cada pieza es un testimonio de una artesanía meticulosa, diseñada con precisión y elaborada con los materiales más finos para garantizar un acabado tan impresionante como duradero.",
      aboutP3: "Nuestra filosofía se centra en la elegancia transformadora. Creemos que las joyas deben ser una extensión natural de tu poder y estilo. Desde las grandes ocasiones hasta los momentos cotidianos, elegir Jewelry significa abrazar una vida de brillo inigualable y belleza sofisticada.",
      footerAbout: "Acerca de nosotros",
      footerText: "Joyas de lujo hechas para que brilles y expreses tu estilo.",
      footerLinks: "Enlaces rápidos",
      follow: "Síguenos"
    }
  };

  function applyLanguage(selectedLang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (translations[selectedLang] && translations[selectedLang][key]) {
        el.textContent = translations[selectedLang][key];
      }
    });
    
   
    if (selectedLang === 'ar') {
      document.body.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.body.dir = 'ltr';
      document.documentElement.lang = selectedLang;
    }

    localStorage.setItem('siteLanguage', selectedLang);
  }

  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', function() {
      applyLanguage(this.value);
    });
  }

  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  if (langSelect) {
    langSelect.value = savedLang;
    applyLanguage(savedLang);
  }
});

