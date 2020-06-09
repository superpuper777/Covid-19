'use strict';

const headerItems = document.querySelectorAll(".header__item:not(:last-child)");
console.log(headerItems);
const headerLinks = document.querySelectorAll(".header__link");
console.log(headerLinks);
let circle = document.createElement("div");
circle.style.cssText = `width: 6px; height: 6px; margin: 0 auto ; background-color: #FA5652; border-radius: 100%;`;

headerLinks.forEach(link => link.addEventListener("click", function () {
  console.log("click");
  link.classList.add("highlighter");
  setTimeout(() => link.classList.remove("highlighter"), 2000);
  link.after(circle);
}));