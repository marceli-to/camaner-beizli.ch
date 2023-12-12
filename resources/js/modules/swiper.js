import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: false,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});

swiper.on('slideChange', function (swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  // get data attributes from active slide
  const slideTitle = activeSlide.getAttribute('data-slide-title');
  const slideText = activeSlide.getAttribute('data-slide-text');
  const slideUrl = activeSlide.getAttribute('data-slide-url');

  // update data-project-title and data-project-text
  // get elements by querySelector
  const projectTitle = document.querySelector('[data-project-title]');
  const projectText = document.querySelector('[data-project-text]');
  const projectUrl = document.querySelector('[data-project-url]');

  // update elements
  projectTitle.textContent = slideTitle;
  projectText.textContent = slideText;
  projectUrl.href = slideUrl;

});