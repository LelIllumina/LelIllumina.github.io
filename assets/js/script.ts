const toggleButton = document.querySelector("#theme-switch");
const elements = document.querySelectorAll("[class=dark-theme]");

if (toggleButton && elements) {
  toggleButton.addEventListener("click", () => {
    if (toggleButton.textContent === "make me cum") {
        toggleButton.textContent = "make me uncum";
    } else {
        toggleButton.textContent = "make me cum";
    }
    elements.forEach(element => {
      element.classList.toggle("light-theme");
      element.classList.toggle("dark-theme");
    });
  });
}

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}
