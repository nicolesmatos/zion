
  // 1. Array com os caminhos das suas fotos (ajuste com os seus nomes de arquivo)
  const minhasImagens = [
    '/img/serra-vaiii.png',
    '/img/eletrica.png',
    '/img/seguranca.png',
    '/img/ar-condicionado.png',
    '/img/hidraulica.png',
    '/img/manutencao-predial.png',
    // ... adicione as outras até dar as 15
  ];

  // 2. Inicialização do Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // 📱 Começa com 1 slide no celular
    spaceBetween: 10,
    
    loop: true,
    // 🔄 Garante que a transição de loop seja imperceptível
  loopPreventsSlide: false,
  loopedSlides: 5,
    speed: 4000,

    // ⏱️ Rotação automática
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

   // 🎯 Permite deslize contínuo sem travar nos breakpoints
  freeMode: {
    enabled: true,
    momentum: false, // 👈 Desativa a desaceleração para manter fluxo constante
  },

    // 💻 Breakpoints para quando a tela crescer
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },

    // ⚡ Virtual Slides (Gera os <li> com a sua classe)
    virtual: {
      slides: minhasImagens,
      enabled: true,
      addSlides: 5, // 👈 Informa ao Virtual Slides para renderizar cópias extras!
      renderSlide: function (slideContent, index) {
        return `
          <li class="swiper-slide">
            <img class="img-correceu" src="${slideContent}" alt="Imagem ${index + 1}" loading="lazy" />
          </li>
        `;
      },
    },

    // Controles
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
