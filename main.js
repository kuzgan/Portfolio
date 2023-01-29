const navigation = document.querySelector("nav");
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector("[navbar-links]");

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("active");

  const navigationHeight = navigation.offsetHeight;

  document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");
});
