const mobileNavMenu = document.querySelector("#mobile-nav");
const mobileNavCloseBtn = document.querySelector("#mobile-nav i.lni-close");
const mobileNavOpenBtn = document.querySelector(".mobile-menu-btn");

mobileNavOpenBtn.addEventListener("click", () => {
  mobileNavMenu.classList.add("show");
});

mobileNavCloseBtn.addEventListener("click", () => {
  mobileNavMenu.classList.remove("show");
});
