// const hamburger = document.querySelector(".hamburger");

// hamburger.addEventListener("click", function () {
//   this.classList.toggle("active");
// });

const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger_icon.innerText =
    hamburger_icon.innerText === "menu" ? "close" : "menu";

  mobile_menu.classList.toggle("is-open");
});

// Made Using Guides Below Used for Reference
// https://youtu.be/ZzQdVy8b8n4
// https://youtu.be/At4B7A4GOPg
