document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let index = 0;

  function showSlide(i) {
    if (slides.length === 0 || dots.length === 0) return;
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      if (dots[idx]) dots[idx].classList.remove('active');
    });
    if (slides[i]) slides[i].classList.add('active');
    if (dots[i]) dots[i].classList.add('active');
    index = i;
  }

  function nextSlide() {
    if (slides.length === 0) return;
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  if (dots.length > 0) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i));
    });
  }

  if (slides.length > 0) {
    setInterval(nextSlide, 4000);
  }
  const translations = {
    English: {
      title: "Jewelry Testimonials",
      subtitle: "What Our Customers Say",
      about: "About Us",
      quick: "Quick Links",
      follow: "Follow Us",
      aboutText: "Luxury jewelry designs made to make you shine and express your style.",
      testimonials: {
        t1: "Absolutely stunning jewelry! The quality and shine are unmatched. I get compliments every time I wear them!",
        t2: "Fast delivery and elegant packaging. I loved how premium everything looked!",
        t3: "I ordered a custom necklace and it was beyond my expectations. Highly recommend!",
        t4: "Beautiful craftsmanship and excellent service. I'll definitely be buying again!",
        t5: "Every piece tells a story — absolutely in love with this brand!",
        t6: "Amazing experience from start to finish. The jewelry looks even better in person!"
      }
    },
    Arabic: {
      title: "آراء عملائنا",
      subtitle: "ماذا يقول عملاؤنا",
      about: "من نحن",
      quick: "روابط سريعة",
      follow: "تابعنا",
      aboutText: "تصاميم مجوهرات فاخرة تجعلك تتألق وتعبر عن أسلوبك.",
      testimonials: {
        t1: "مجوهرات رائعة حقاً! الجودة واللمعان لا مثيل لهما. أحصل على إطراءات في كل مرة أرتديها!",
        t2: "توصيل سريع وتغليف أنيق. أحببت كيف كان كل شيء يبدو فاخراً!",
        t3: "طلبت عقداً مخصصاً وكان يفوق توقعاتي. أنصح به بشدة!",
        t4: "حرفية رائعة وخدمة ممتازة. سأشتري بالتأكيد مرة أخرى!",
        t5: "كل قطعة تحكي قصة - أنا معجبة بهذه العلامة التجارية!",
        t6: "تجربة رائعة من البداية للنهاية. المجوهرات تبدو أفضل في الواقع!"
      }
    },
    French: {
      title: "Témoignages des clients",
      subtitle: "Ce que disent nos clients",
      about: "À propos de nous",
      quick: "Liens rapides",
      follow: "Suivez-nous",
      aboutText: "Des bijoux de luxe conçus pour vous faire briller et exprimer votre style.",
      testimonials: {
        t1: "Bijoux absolument magnifiques ! La qualité et l'éclat sont incomparables. Je reçois des compliments à chaque fois que je les porte !",
        t2: "Livraison rapide et emballage élégant. J'ai adoré le côté premium de tout !",
        t3: "J'ai commandé un collier personnalisé et c'était au-delà de mes attentes. Je recommande vivement !",
        t4: "Beau savoir-faire et excellent service. J'achèterai définitivement à nouveau !",
        t5: "Chaque pièce raconte une histoire — totalement amoureuse de cette marque !",
        t6: "Expérience incroyable du début à la fin. Les bijoux sont encore plus beaux en personne !"
      }
    },
    Spanish: {
      title: "Testimonios de clientes",
      subtitle: "Lo que dicen nuestros clientes",
      about: "Sobre nosotros",
      quick: "Enlaces rápidos",
      follow: "Síguenos",
      aboutText: "Joyas de lujo diseñadas para hacerte brillar y expresar tu estilo.",
      testimonials: {
        t1: "¡Joyería absolutamente impresionante! La calidad y el brillo son incomparables. ¡Recibo cumplidos cada vez que los uso!",
        t2: "Entrega rápida y embalaje elegante. ¡Me encantó lo premium que se veía todo!",
        t3: "Pedí un collar personalizado y superó mis expectativas. ¡Muy recomendable!",
        t4: "Hermosa artesanía y excelente servicio. ¡Definitivamente compraré de nuevo!",
        t5: "Cada pieza cuenta una historia — ¡totalmente enamorada de esta marca!",
        t6: "Experiencia increíble de principio a fin. ¡La joyería se ve aún mejor en persona!"
      }
    }
  };

  const langSelect = document.getElementById('languageSelect');
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  const about = document.getElementById('about');
  const quick = document.getElementById('quick');
  const follow = document.getElementById('follow');
  const aboutText = document.getElementById('about-text');

  const t1 = document.getElementById('t1');
  const t2 = document.getElementById('t2');
  const t3 = document.getElementById('t3');
  const t4 = document.getElementById('t4');
  const t5 = document.getElementById('t5');
  const t6 = document.getElementById('t6');

  function applyLang(lang) {
    
    let langKey = lang;
    if (lang === "ar" || lang === "Arabic") langKey = "Arabic";
    else if (lang === "fr" || lang === "French") langKey = "French";
    else if (lang === "es" || lang === "Spanish") langKey = "Spanish";
    else if (lang === "en" || lang === "English") langKey = "English";
    
    const t = translations[langKey] || translations.English;
    if (title) title.textContent = t.title;
    if (subtitle) subtitle.textContent = t.subtitle;
    if (about) about.textContent = t.about;
    if (quick) quick.textContent = t.quick;
    if (follow) follow.textContent = t.follow;
    if (aboutText) aboutText.textContent = t.aboutText;

    if (t1) t1.textContent = t.testimonials.t1;
    if (t2) t2.textContent = t.testimonials.t2;
    if (t3) t3.textContent = t.testimonials.t3;
    if (t4) t4.textContent = t.testimonials.t4;
    if (t5) t5.textContent = t.testimonials.t5;
    if (t6) t6.textContent = t.testimonials.t6;

    document.body.dir = langKey === "Arabic" ? "rtl" : "ltr";
    document.documentElement.lang = langKey === "Arabic" ? "ar" : langKey === "French" ? "fr" : langKey === "Spanish" ? "es" : "en";
  }

  const savedLangRaw = localStorage.getItem('siteLanguage') || localStorage.getItem('siteLang') || "English";
  let savedLang = savedLangRaw;
  if (savedLangRaw === "ar") savedLang = "Arabic";
  else if (savedLangRaw === "fr") savedLang = "French";
  else if (savedLangRaw === "es") savedLang = "Spanish";
  else if (savedLangRaw === "en") savedLang = "English";
  
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
});

