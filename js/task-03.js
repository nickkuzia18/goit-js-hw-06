"use strict";

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
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

galleryListEL.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryListEL.style.display = "flex";
galleryListEL.style.flexWrap = "wrap";
galleryListEL.style.justifyContent = "space-between";
galleryListEL.style.alignItems = "center";

const galleryItemEL = document.querySelectorAll("li");
galleryItemEL.forEach((item) => {
  item.style.listStyle = "none";
  item.style.width = "calc(33.33% - 10px)";
  item.style.marginBottom = "20px";
});

const galleryImagesEL = document.querySelectorAll("img");
galleryImagesEL.forEach((image) => {
  image.style.display = "block";
  image.style.width = "100%";
  image.style.height = "auto";
});
