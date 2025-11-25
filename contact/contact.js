document.addEventListener('DOMContentLoaded', function() {
  const langSelect = document.getElementById("languageSelect");

  const translations = {
    Arabic: {
      contactTitle: "اتصل بنا",
      emailLabel: "البريد الإلكتروني: info@jewelryshop.com",
      phoneLabel: "رقم الهاتف: +20 123 456 7890",
      addressLabel: "العنوان: 123 شارع المجوهرات، القاهرة، مصر",
      waLink: "واتساب",
      fbLink: "فيسبوك",
      twLink: "تويتر",
      igLink: "إنستجرام",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      messagePlaceholder: "رسالتك",
      sendBtn: "إرسال الرسالة",
      footerAboutTitle: "معلومات عنا",
      footerAboutText: "تصاميم مجوهرات فاخرة تجعلك تتألقين وتعبرين عن أسلوبك.",
      quickLinksTitle: "روابط سريعة",
      homeLink: "الرئيسية",
      shopLink: "المتجر",
      contactLink: "اتصل بنا",
      followUsTitle: "تابعنا",
      footerBottom: "© 2025 مجوهرات. جميع الحقوق محفوظة."
    },
    French: {
      contactTitle: "Contactez-nous",
      emailLabel: "Email : info@jewelryshop.com",
      phoneLabel: "Téléphone : +20 123 456 7890",
      addressLabel: "Adresse : 123 Rue Jewelry, Le Caire, Égypte",
      waLink: "WhatsApp",
      fbLink: "Facebook",
      twLink: "Twitter",
      igLink: "Instagram",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message",
      sendBtn: "Envoyer le message",
      footerAboutTitle: "À propos de nous",
      footerAboutText: "Des bijoux de luxe pour briller et exprimer votre style.",
      quickLinksTitle: "Liens rapides",
      homeLink: "Accueil",
      shopLink: "Boutique",
      contactLink: "Contact",
      followUsTitle: "Suivez-nous",
      footerBottom: "© 2025 Jewelry. Tous droits réservés."
    },
    Spanish: {
      contactTitle: "Contáctanos",
      emailLabel: "Correo electrónico: info@jewelryshop.com",
      phoneLabel: "Teléfono: +20 123 456 7890",
      addressLabel: "Dirección: Calle Jewelry 123, El Cairo, Egipto",
      waLink: "WhatsApp",
      fbLink: "Facebook",
      twLink: "Twitter",
      igLink: "Instagram",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo electrónico",
      messagePlaceholder: "Tu mensaje",
      sendBtn: "Enviar mensaje",
      footerAboutTitle: "Sobre nosotros",
      footerAboutText: "Joyas de lujo diseñadas para hacerte brillar y expresar tu estilo.",
      quickLinksTitle: "Enlaces rápidos",
      homeLink: "Inicio",
      shopLink: "Tienda",
      contactLink: "Contacto",
      followUsTitle: "Síguenos",
      footerBottom: "© 2025 Jewelry. Todos los derechos reservados."
    }
  };

  if (langSelect) {
    langSelect.addEventListener("change", function() {
      const lang = langSelect.value;
      if (translations[lang]) {
        for (let key in translations[lang]) {
          const el = document.getElementById(key);
          if (el) {
            if (el.placeholder !== undefined && translations[lang][key].includes("...") === false)
              el.placeholder = translations[lang][key];
            else el.textContent = translations[lang][key];
          }
        }
      }
    });
  }


  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will contact you soon.');
      this.reset();
    });
  }
});

