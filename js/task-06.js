const textInput = document.querySelector("#validation-input");
textInput.style.border = "3px solid #bdbdbd";

const inputValidLength = document.querySelector("input[data-length]");

// const inputCurrentValue = textInput.addEventListener("input", (event) => {
//   event.currentTarget.value;
// });

textInput.addEventListener("focus", () => {
  textInput.style.border = "3px solid #bdbdbd";
});

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(inputValidLength.dataset.length)) {
    textInput.style.borderColor = "#4caf50";
  } else {
    textInput.style.borderColor = "#f44336";
  }
});
