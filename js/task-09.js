"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const textColorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  textColorEl.textContent = `${getRandomHexColor()}`;
});
