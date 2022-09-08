const menuBtn = document.querySelector(".menu-btn");
const btnBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
let menuOpen = false;

menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    body.classList.add("open");
    menuBtn.classList.add("open");
    nav.classList.add("open");
    btnBurger.classList.add("open");
    menuOpen = true;
  } else {
    body.classList.remove("open");
    menuBtn.classList.remove("open");
    nav.classList.remove("open");
    btnBurger.classList.remove("open");
    menuOpen = false;
  }
});
