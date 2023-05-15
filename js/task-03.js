const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEL = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    (image) =>
      `<li style="listStyle: none; width: calc(33.33% - 10px); marginBottom: 20px"><img style="display: block; width: 100%; height: auto" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

galleryListEL.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryListEL.style.display = "flex";
galleryListEL.style.flexWrap = "wrap";
galleryListEL.style.justifyContent = "space-between";
galleryListEL.style.alignItems = "center";
