const toggleButton = document.querySelector("#theme-switch")!;
const elements = document.querySelectorAll("[class=dark-theme]");

toggleButton.addEventListener("click", () => {
	elements.forEach(element => {
		element.classList.toggle("light-theme");
		element.classList.toggle("dark-theme");
	});
});
