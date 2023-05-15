const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEL = document.querySelector("#ingredients");

const ingredientEls = ingredients.map((ingredient) => {
  const ingredientEL = document.createElement("li");
  ingredientEL.textContent = ingredient;
  ingredientEL.classList.add("item");
  return ingredientEL;
});

ingredientsListEL.append(...ingredientEls);
