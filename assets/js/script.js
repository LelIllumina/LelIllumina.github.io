var toggleButton = document.querySelector("#theme-switch");
var elements = document.querySelectorAll("[class=dark-theme]");
if (toggleButton && elements) {
    toggleButton.addEventListener("click", function () {
        if (toggleButton.textContent === "make me cum") {
            toggleButton.textContent = "make me uncum";
        }
        else {
            toggleButton.textContent = "make me cum";
        }
        elements.forEach(function (element) {
            element.classList.toggle("light-theme");
            element.classList.toggle("dark-theme");
        });
    });
}
var burger = document.querySelector(".burger");
var navLinks = document.querySelector(".nav-links");
if (burger && navLinks) {
    burger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });
}
