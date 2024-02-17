var Swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  // visibilityFullFit: true,
  loop: true,
  autoplay: 3000,
  slidesPerView: 3,
  grabCursor: true,
  autoplayDisableOnInteraction: false,
  speed: 2000,
  breakpoints: {
    500: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
