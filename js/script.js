"use strict";

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

const navLinks = document.querySelectorAll(".nav__link");

const menu = document.getElementById("menu");

console.log(navMenu);
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

navLinks.forEach((l) =>
  l.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("hide");
    entry.target.classList.add("sectionreveal");
  }
  // observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

const mode = document.getElementById("mode");
const darkMode = document.querySelector(".dark_light");

darkMode.addEventListener("click", () => {
  mode.classList.toggle("darkmode");
});
