function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const amountInput = document.querySelector("#controls input");
const boxesEL = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxELWidth = 30;
  let boxELHeight = 30;

  let boxesMarkup = [];

  for (let index = 0; index < amount; index++) {
    const boxEL = document.createElement("div");
    boxEL.style.width = boxELWidth + "px";
    boxEL.style.height = boxELHeight + "px";
    boxEL.style.backgroundColor = `${getRandomHexColor()}`;
    boxesMarkup.push(boxEL);
    boxELWidth += 10;
    boxELHeight += 10;
  }

  return boxesMarkup;
}

function destroyBoxes() {
  boxesEL.innerHTML = "";
  amountInput.value = "";
}

createBtn.addEventListener("click", () => {
  const boxesMarkup = createBoxes(amountInput.value);
  boxesEL.append(...boxesMarkup);
});
destroyBtn.addEventListener("click", destroyBoxes);
