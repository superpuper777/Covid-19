'use strict';

const headerItems = document.querySelectorAll(".header__item:not(:last-child)");
const headerLinks = document.querySelectorAll(".header__link");
let circle = document.createElement("div");
circle.style.cssText = `width: 6px; height: 6px; margin: 0 auto ; background-color: #FA5652; border-radius: 100%;`;
if (window.innerWidth >= 770) {
  headerLinks.forEach(link => link.addEventListener("click", function () {
    link.classList.add("highlighter");
    setTimeout(() => link.classList.remove("highlighter"), 2000);
    link.after(circle);
  }));
}


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
  button.textContent = "Send";
};

button.addEventListener('click', updateButtonMsg);

(function () {

  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(link => {
      link.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
}());

//burger handler
(function () {
  const burgeItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const closedItem = document.querySelector('.header__nav-close');
  burgeItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
  });
  closedItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
  });
}());