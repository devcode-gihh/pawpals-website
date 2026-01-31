// navbar
const burgerAnimation = document.querySelector(".burger-menu");
const navbarNav = document.querySelector(".navbar-nav");

burgerAnimation.onclick = () => {
  burgerAnimation.classList.toggle("animation-burger");
  navbarNav.classList.toggle("active");
};