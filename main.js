const menuBtn = document.querySelector(".menu-btn");
const btnBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const caret = document.querySelectorAll(".select__caret");
const select = document.querySelectorAll(".select");
const featureList = document.querySelectorAll(".features");

let menuOpen = false;
let menuList = false;

menuBtn.addEventListener("click", () => {
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

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener("click", () => {
    if (!menuList) {
      caret[i].classList.add("open");
      featureList[i].classList.remove("hidden");
      featureList[i].classList.add("open");
      menuList = true;
    } else {
      caret[i].classList.remove("open");
      featureList[i].classList.add("hidden");
      featureList[i].classList.remove("open");
      menuList = false;
    }
  });
}
