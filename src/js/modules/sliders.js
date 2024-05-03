import Swiper, { Pagination, Navigation } from "swiper";

const commentsSliders = document.querySelectorAll(".comments-slider");
commentsSliders.forEach(commentsSlider => {
  if (commentsSlider) {
    const { perView } = commentsSlider.dataset;
    new Swiper(commentsSlider, {
      modules: [Pagination, Navigation],
      wrapperClass: "comments-slider-wrapper",
      slideClass: "comments-slider-slide",
      slidesPerView: +perView,
      spaceBetween: 30,
      speed: 1200,

      pagination: {
        el: commentsSlider.closest(".slider").querySelector(".pagination-comments"),
        clickable: true,
      },
      navigation: {
        prevEl: commentsSlider.closest(".slider").querySelector(".comments-prev"),
        nextEl: commentsSlider.closest(".slider").querySelector(".comments-next"),
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: +perView,
          spaceBetween: 30,
        },
      },
    });
  }
});
