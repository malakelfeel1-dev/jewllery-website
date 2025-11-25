
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
      quote: "Jewelry – Where Luxury Meets You",
      shine: "Shine With Jewelry That Defines You",
      discover: "Discover our newest luxurious designs made to make you sparkle.",
      shopNow: "Shop Now",
      aboutUs: "About Us",
      footerText: "Luxury jewelry designs made to make you shine and express your style.",
      quickLinks: "Quick Links",
      followUs: "Follow Us"
    },
    ar: {
      home: "الرئيسية",
      shop: "المتجر",
      contact: "اتصل بنا",
      limited: "إصدارات محدودة",
      testimonials: "آراء العملاء",
      cart: "السلة",
      account: "الحساب",
      about: "من نحن",
      quote: "المجوهرات – حيث تلتقي الفخامة بك",
      shine: "تألقي بمجوهرات تعرّفك",
      discover: "اكتشفي أحدث تصاميمنا الفاخرة المصممة لتجعلكِ تتألقين.",
      shopNow: "تسوقي الآن",
      aboutUs: "من نحن",
      footerText: "تصاميم مجوهرات فاخرة تجعلك تتألقين وتعبرين عن أسلوبك.",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا"
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
      quote: "Bijoux – Où le luxe vous rencontre",
      shine: "Brillez avec des bijoux qui vous définissent",
      discover: "Découvrez nos plus récents designs luxueux conçus pour vous faire scintiller.",
      shopNow: "Acheter maintenant",
      aboutUs: "À propos de nous",
      footerText: "Bijoux de luxe conçus pour vous faire briller et exprimer votre style.",
      quickLinks: "Liens rapides",
      followUs: "Suivez-nous"
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
      quote: "Joyería – Donde el lujo te encuentra",
      shine: "Brilla con joyas que te definen",
      discover: "Descubre nuestros más recientes diseños lujosos hechos para hacerte brillar.",
      shopNow: "Comprar ahora",
      aboutUs: "Sobre nosotros",
      footerText: "Joyas de lujo diseñadas para hacerte brillar y expresar tu estilo.",
      quickLinks: "Enlaces rápidos",
      followUs: "Síguenos"
    }
  };

  const langSelect = document.getElementById('languageSelect');
  const elements = document.querySelectorAll('[data-key]');

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    elements.forEach(el => {
      const key = el.getAttribute('data-key');
      if (t[key]) {
        el.textContent = t[key];
      }
    });
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  }

  
  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  if (langSelect) {
    langSelect.value = savedLang;
    applyLanguage(savedLang);
  }

  if (langSelect) {
    langSelect.addEventListener('change', function() {
      const selected = this.value;
      localStorage.setItem('siteLanguage', selected);
      applyLanguage(selected);
    });
  }

 
  const chatHeader = document.getElementById('chatHeader');
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatMessages = document.getElementById('chatMessages');

  if (chatHeader && chatBody) {
    chatHeader.addEventListener('click', function() {
      chatBody.classList.toggle('open');
    });
  }

  if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener('click', function() {
      sendMessage();
    });

    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
     
      const userMsg = document.createElement('div');
      userMsg.className = 'message user-message';
      userMsg.innerHTML = `<p>${message}</p>`;
      chatMessages.appendChild(userMsg);

      chatInput.value = '';

      setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot-message';
        botMsg.innerHTML = '<p>Thank you for your message! We will get back to you soon. 😊</p>';
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);

      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
});

