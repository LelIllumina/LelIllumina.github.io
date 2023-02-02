var toggleButton = document.querySelector("#theme-switch");
var elements = document.querySelectorAll("[class=dark-theme]");
toggleButton.addEventListener("click", function () {
    elements.forEach(function (element) {
        element.classList.toggle("light-theme");
        element.classList.toggle("dark-theme");
    });
});
