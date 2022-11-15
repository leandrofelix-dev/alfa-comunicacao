var swiper = new Swiper(".mySwiper", {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        autoplay: {
          delay: 2300,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });