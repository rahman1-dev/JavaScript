// async function getFact() {
//   let body = document.querySelector("body");
//   let loadingPara = document.createElement("p");
//   loadingPara.innerText = "Loading...";
//   body.appendChild(loadingPara);

//   let response = await fetch("https://catfact.ninja/fact");
//   let result = await response.json();

//   document.querySelector("#para").innerText = result.fact;
//   loadingPara.innerText = "";
// }

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   getFact();
// });

// async function getDogPic() {
//   let data = await fetch("https://dog.ceo/api/breeds/image/random");
//   // console.log(data);
//   let result = await data.json();
//   console.log(result.message);

//   let img = document.createElement("img");
//   img.setAttribute("src", result.message);
//   img.setAttribute("height", 200);
//   img.setAttribute("weight", 200);

//   let body = document.querySelector("body");
//   body.appendChild(img);
// }
// getDogPic();

async function getRandomPerson() {
  let users = await fetch("https://dummyjson.com/users");
  let res = await users.json();

  res.users.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("id", "users");

    let img = document.createElement("img");
    img.setAttribute("class", "img");
    img.setAttribute("src", element.image);
    div.appendChild(img);

    let firstName = document.createElement("h2");
    firstName.setAttribute("class", "name");
    firstName.innerText = element.firstName;
    div.appendChild(firstName);

    let age = document.createElement("h3");
    age.setAttribute("class", "age");
    age.innerText = element.age;
    div.appendChild(age);

    let city = document.createElement("h3");
    city.setAttribute("class", "city");
    city.innerText = element.address.city;
    div.appendChild(city);

    document.querySelector("body").appendChild(div);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("id", "deleteBtn");
    div.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      div.remove();
      console.log(element.firstName, "user is deleted");
    });
  });
}

let button = document.querySelector("button");
button.addEventListener("click", () => {
  getRandomPerson();
});
