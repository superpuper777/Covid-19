'use strict';

const headerItems = document.querySelectorAll(".header__item:not(:last-child)");
const headerLinks = document.querySelectorAll(".header__link");
let circle = document.createElement("div");
circle.style.cssText = `width: 6px; height: 6px; margin: 0 auto ; background-color: #FA5652; border-radius: 100%;`;

headerLinks.forEach(link => link.addEventListener("click", function () {
  console.log("click");
  link.classList.add("highlighter");
  setTimeout(() => link.classList.remove("highlighter"), 2000);
  link.after(circle);
}));

//btn
const button = document.querySelector('.feedback__form_submit');
let stateMsg = document.querySelector('.pre_state_msg');

const updateButtonMsg = function () {
  button.classList.add('state-1', 'animated');
  button.textContent = "Sending...";
  setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function () {
  button.classList.add('state-2');
  button.textContent = "Done!";
  setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function () {
  button.classList.remove('state-1', 'state-2', 'animated');
};

button.addEventListener('click', updateButtonMsg);

// (function () {

//   const smoothScroll = function (targetEl, duration) {
//     const headerElHeight = document.querySelector(".header").clientHeight;
//     let target = document.querySelector(targetEl);
//     let targetPosition = target.getBoundingClientRect().top - headerElHeight;
//     let startPosition = window.pageYOffset;
//     let startTime = null;

//     const ease = function (p, b, c, d) {
//       p /= d / 2;
//       if (p < 1) return c / 2 * p * p + b;
//       p--;
//       return -c / 2 * (p * (p - 2) - 1) + b;
//     };

//     const animation = function (timestamp) {
//       if (!startTime) startTime = timestamp;
//       let progress = timestamp - startTime;
//       const run = ease(progress, startPosition, targetPosition, duration);
//       window.scrollTo(0, run);
//       if (timestamp < duration) requestAnimationFrame(animation);
//     };
//     requestAnimationFrame(animation);
//   };

//   const scrollTo = function () {
//     const links = document.querySelectorAll('.js-scroll');
//     links.forEach(link => {
//       link.addEventListener('click', function () {
//         const currentTarget = this.getAttribute('href');
//         smoothScroll(currentTarget, 1000);
//       });
//     });
//   };
//   scrollTo();
// }());