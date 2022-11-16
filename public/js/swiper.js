var swiper = new Swiper(".mySwiper", {
        direction: 'horizontal',
        autoplay: {
          delay: 5000,
        },
        loop: true,
    slidesPerView: 3,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
