const body = document.querySelector("body");

const data = [
  {
    image: "images/desktop-image-hero-1.jpg",
    header: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: "images/desktop-image-hero-2.jpg",
    header: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: "images/desktop-image-hero-3.jpg",
    header: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// ************ SLIDES ************ //
let currentPage = 0;

const heroSlide = () => {
  const next = document.querySelector(".btn-pack__right");
  const prev = document.querySelector(".btn-pack__left");

  const heroImg = document.querySelector(".img-hero");
  const heroHeader = document.querySelector(".heading--1");
  const heroParagraph = document.querySelector(".section-hero__p");

  const updateBackground = () => {
    heroImg.style.backgroundImage = `url(${data[currentPage].image}`;
    // heroImg.style.transition = "background-image 2s";
    heroHeader.innerHTML = data[currentPage].header;
    // heroHeader.classList.add("moveFromLeft");
    heroParagraph.innerHTML = data[currentPage].paragraph;
  };

  next.addEventListener("click", () => {
    setTimeout(function () {
      currentPage++;
      if (currentPage > data.length - 1) {
        currentPage = 0;
      }
      updateBackground();
    }, 300);
  });

  prev.addEventListener("click", () => {
    setTimeout(function () {
      currentPage--;
      if (currentPage < 0) {
        currentPage = data.length - 1;
      }
      updateBackground();
    }, 300);
  });
};

// ************ NAVIGATION ************
const navMobile = () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelector(".navbar__links");
  const logo = document.querySelector(".navbar__logo");
  const close = document.querySelector(".close");

  burger.addEventListener("click", () => {
    navbar.classList.add("nav-active");
    navbar.classList.remove("gradient-background");
    navbarLinks.classList.add("links-active");
    logo.classList.add("display-none");
    close.classList.add("display-block");
    burger.classList.add("display-none");
  });

  close.addEventListener("click", () => {
    navbar.classList.add("gradient-background");
    navbarLinks.classList.remove("links-active");
    logo.classList.remove("display-none");
    close.classList.remove("display-block");
    burger.classList.remove("display-none");
    setTimeout(function () {
      navbar.classList.remove("nav-active");
    }, 1000);
  });
};

navMobile();
heroSlide();
