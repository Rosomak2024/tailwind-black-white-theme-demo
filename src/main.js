import "./style.css";

const button = document.querySelector("button");
const body = document.querySelector("body");
const header = document.querySelector("header");
const menu = document.querySelectorAll("li");

button.addEventListener("click", () => {
  body.classList.toggle("bg-white");
  body.classList.toggle("bg-black");
  header.classList.toggle("border-black");
  header.classList.toggle("border-white");
  menu.classList.toggle("text-white");
  menu.classList.toggle("text-black");
});
