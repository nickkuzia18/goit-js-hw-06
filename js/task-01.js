const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}\n \n`);

for (const item of categoriesItems) {
  const categoryName = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}\n \n`);
}
