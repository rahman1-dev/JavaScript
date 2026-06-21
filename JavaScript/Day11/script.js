// let thumbnailImg = document.querySelector(".thumbnail");
// console.log(thumbnailImg);

// console.log(thumbnailImg.getAttribute("src"));
// thumbnailImg.setAttribute(
//   "src",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-1G-ixJDl9QN1VJPyhgJleLRdIuaWf8pSw&s",
// );

// let img = document.getElementById("featured-image");
// console.log(img);
// let imgId = img.getAttribute("id");
// console.log(imgId);
// let chngedId = img.setAttribute("id", "updatedId");
// console.log(chngedId);

// let title = document.querySelector("#gallery-title");
// console.log((title.style.color = "red"));

// let backgColor = document.querySelector(".gallery-container");
// backgColor.style.backgroundColor = "gray";

// let caption = document.querySelector("#image-caption");
// caption.style.color = "red";
// caption.style.fotSize = "20px";
// caption.style.padding = "15px";
// caption.style.display = "none";

// let mainHeading = document.querySelector(".gallery-title");
// mainHeading.classList.add("red");
// mainHeading.classList.add("backgroundColor");
// mainHeading.classList.remove("red");
// console.log(mainHeading.classList.contains("backgroundColor"));

let mainHeading = document.querySelector(".gallery-title");
setInterval(() => {
  console.log(mainHeading.classList.toggle("red"));
}, 500);
