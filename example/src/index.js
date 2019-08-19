import "./variation.less";
import { add } from "./math";
console.log(add(1, 2));
console.log("hello world");

setTimeout(() => {
  import(/* webpackChunkName: "swiper.css" */ "swiper/dist/css/swiper.css")
    .then(module => console.log(module))
    .catch(e => {
      console.log("import swiper css error", e);
    });

  import(/* webpackChunkName: "swiper" */ "swiper").then(module => {
    const Swiper = module.default;

    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });

    console.log("mySwiper", mySwiper);
  });
}, 1000);
