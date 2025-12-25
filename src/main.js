import "./style.css";

const button = document.querySelector("button");
const body = document.querySelector("body");
const header = document.querySelector("header");

button.addEventListener("click", () => {
  body.classList.toggle("bg-white");
  body.classList.toggle("bg-black");
  header.classList.toggle("border-black");
  header.classList.toggle("border-white");
  body.classList.toggle("text-black");
  body.classList.toggle("text-white");
  button.classList.toggle("text-white");
  button.classList.toggle("text-black");
});
