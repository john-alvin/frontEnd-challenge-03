const menuBtn = document.querySelector(".menu-btn");
const btnBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

const featureBtn = document.querySelector(".menu-nav__features");
const companyBtn = document.querySelector(".menu-nav__company");
const featureList = document.querySelector(".features");
const companyList = document.querySelector(".company-list");
const caret = document.querySelectorAll(".select__caret");

let menuOpen = false;

let menuList = false;

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

companyBtn.addEventListener("click", () => {
  if (!menuList) {
    companyList.classList.remove("hidden");
    companyList.classList.remove("open");
    menuList = true;
  } else {
    companyList.classList.add("hidden");
    companyList.classList.add("open");
    menuList = false;
  }
});

featureBtn.addEventListener("click", () => {
  if (!menuList) {
    featureList.classList.remove("hidden");
    featureList.classList.remove("open");
    menuList = true;
  } else {
    featureList.classList.add("hidden");
    featureList.classList.add("open");
    menuList = false;
  }
});
