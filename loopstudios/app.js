const body = document.querySelector("body");
const burger = document.querySelector(".hamburger-icon");
const close = document.querySelector(".close-icon");
const nav = document.querySelector(".header nav");

burger.addEventListener("click", () => {
  nav.classList.add("nav__show");
  nav.classList.remove("nav__hide");
  nav.classList.remove("nav");
  body.classList.remove("relative");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav__show");
  nav.classList.add("nav__hide");
  body.classList.add("relative");

  setTimeout(function () {
    nav.classList.add("nav");
  }, 500);
});
