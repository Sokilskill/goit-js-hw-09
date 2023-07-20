const swiper = new Swiper('.mySwyper', {
  // Optional parameters
  sliderPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
