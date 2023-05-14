"use strict";

const fontSizeControlEL = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

fontSizeControlEL.addEventListener("input", () => {
  textEl.style.fontSize = `${fontSizeControlEL.value}px`;
});
