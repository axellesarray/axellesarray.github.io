const togglerBg = document.querySelector(".toggle");
const toggler = document.querySelector(".toggle-circle");

togglerBg.addEventListener("click", function () {
  if (document.documentElement.getAttribute("color-mode") == "dark") {
    toggler.style.transform = "translateX(1.85rem)";
    document.documentElement.setAttribute("color-mode", "light");
    // localStorage.setItem("color-mode", "light");
  } else if (document.documentElement.getAttribute("color-mode") == "light") {
    toggler.style.transform = "translateX(0)";
    document.documentElement.setAttribute("color-mode", "dark");
    // localStorage.setItem("color-mode", "dark");
  }
});
