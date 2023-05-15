let counterValue = 0;

const counterValueEL = document.querySelector("#value");

const btnInc = document.querySelector('button[data-action="increment"]');
const btnDec = document.querySelector('button[data-action="decrement"]');

const btnIncClick = () => {
  counterValue += 1;
  counterValueEL.textContent = counterValue;
};

const btnDecClick = () => {
  counterValue -= 1;
  counterValueEL.textContent = counterValue;
};

btnInc.addEventListener("click", btnIncClick);
btnDec.addEventListener("click", btnDecClick);
