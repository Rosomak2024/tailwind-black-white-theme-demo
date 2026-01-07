import "./style.css";

const html = document.documentElement;
const button = document.querySelector(".material-symbols-outlined");

button.addEventListener("click", () => {
  html.classList.toggle("dark");
});
