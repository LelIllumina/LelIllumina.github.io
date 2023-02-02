const button = document.getElementById("myButton")!;
const burgerMenu = document.querySelector(".burger-menu")!;
const menu = document.querySelector(".menu")!;

button.addEventListener("click", () => {
  alert("Button was clicked!");
});

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});
