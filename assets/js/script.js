var button = document.getElementById("myButton");
var burgerMenu = document.querySelector(".burger-menu");
var menu = document.querySelector(".menu");
button.addEventListener("click", function () {
    alert("Button was clicked!");
});
burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("open");
});
