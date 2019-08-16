import "./variation.less";
import { add } from "./math";
console.log(add(1, 2));
console.log("hello world");

import "swiper/dist/css/swiper.css";

import("swiper").then(module => {
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
