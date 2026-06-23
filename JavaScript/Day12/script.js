// let count = 0;
// let heading = document.querySelector("h2");
// document.querySelector("button").addEventListener("click", () => {
//   count++;
//   heading.innerText = `count is :${count}`;
// });

// let redBtn = document.querySelector("#redBtn");
// let greenBtn = document.querySelector("#greenBtn");
// let yellowBtn = document.querySelector("#yellowBtn");
// function changeColor() {
//   document.querySelector(".box1").style.backgroundColor = this.value;
// }
// redBtn.addEventListener("click", changeColor);
// greenBtn.addEventListener("click", changeColor);
// yellowBtn.addEventListener("click", changeColor);

// CARD Logic
// let card = document.querySelector(".card");
// let h2 = document.querySelector("h2");
// card.addEventListener("mouseenter", function () {
//   card.style.backgroundColor = "lightblue";
//   h2.style.fontSize = "30px";
//   card.style.border = "3px solid blue";
//   console.log("Mouse entered");
// });
// card.addEventListener("mouseleave", function () {
//   card.style.backgroundColor = "white";
//   card.style.fontSize = "20px";
//   card.style.border = "2px solid black";
//   console.log("Mouse left");
// });

//  Text Highlighter
// para and font add by event listener
// let para1 = document.querySelector(".p1");
// let para2 = document.querySelector(".p2");
// let para3 = document.querySelector(".p3");
// para1.addEventListener("dblclick", function () {
//   this.classList.toggle("addBackColorAndFont");
// });
// para2.addEventListener("dblclick", function () {
//   this.classList.toggle("addBackColorAndFont");
// });
// para3.addEventListener("dblclick", function () {
//   this.classList.toggle("addBackColorAndFont");
// });

// Universal Color Changer
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let randomColor = Math.floor(Math.random() * 255);
// function changeColor() {
//   this.style.backgroundColor = `rgb(0,${randomColor},0)`;
// }
// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

// let box = document.querySelector("#box");
// let topPosition = 100;
// let leftPostion = 100;
// document.addEventListener("keydown", function (event) {
//   if (event.code == "ArrowUp") {
//     topPosition -= 10;
//     box.style.top = topPosition + "px";
//     console.log("Moved Up");
//   }
//   if (event.code == "ArrowDown") {
//     topPosition += 10;
//     box.style.top = topPosition + "px";
//     console.log("Moved Down");
//   }
//   if (event.code == "ArrowLeft") {
//     leftPostion -= 10;
//     box.style.left = leftPostion + "px";
//     console.log("Moved Left");
//   }
//   if (event.code == "ArrowRight") {
//     leftPostion += 10;
//     box.style.left = leftPostion + "px";
//     console.log("Moved Right");
//   }
// });

// Simple Login Form
// let form = document.querySelector("form");
// let username = document.querySelector("#username");
// let password = document.querySelector("#password");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("username is :", username.value);
//   console.log("password is :", password.value);
//   username.value = "";
//   password.value = "";
// });

// Signup Form with Validation
// let form = document.querySelector("form");
// let email = document.querySelector("#email");
// let age = document.querySelector("#age");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (age.value >= 18) {
//     alert("Signup successful!");
//     console.log("email is :", email.value);
//     console.log("age is :", age.value);
//   } else {
//     console.log("You must be 18 or older!");
//   }
// });

// Tweet Character Counter
// let textarea = document.querySelector("#textarea");
// let para = document.querySelector("#para");
// let h1 = document.querySelector("h1");
// let count = 0;
// textarea.addEventListener("input", (e) => {
//   if (count <= 100) {
//     para.innerText = `max limit of 100 characters (${count}/100))`;
//     count++;
//   } else {
//     para.style.color = "red";
//     h1.innerText = "Warning:Exeeds max character limit";
//     h1.style.color = "red";
//   }
//   console.log(count);
// });

// Username Availability Checker
// let input = document.querySelector("input");
// let para = document.querySelector("#statusMsg");
// input.addEventListener("input", () => {
//   para.innerText = "checking.......";
//   para.style.color = "black";
// });
// input.addEventListener("change", () => {
//   para.innerText = "Username available!";
//   para.style.color = "green";
//   console.log(input.value);
// });

//To-do list
let form = document.querySelector("form");
let input = document.querySelector("#input");
let ul = document.querySelector("ul");
let listItems = document.querySelector("li");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() == "") return;

  let li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  li.appendChild(delBtn);

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  input.value = " ";
});
