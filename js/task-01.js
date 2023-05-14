"use strict";

const categoriesList = document.querySelectorAll("#categories");
const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}\n \n`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.log(
    `categoryName: ${categoryName}\nElements: ${categoryElements}\n \n`
  );
});
