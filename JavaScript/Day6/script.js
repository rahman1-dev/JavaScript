// let cars = {
//   brand: "Tesla",
//   model: "Model 3",
//   year: 2024,
//   color: "white",
// };
// console.log(cars.brand, cars.year);

// let movie = {
//   title: "Inception",
//   director: "Chrispher Nolan",
//   year: 2010,
//   rating: 8.8,
// };
// console.log(movie.director, movie.rating);

// let student = {
//   name: "John",
//   age: 20,
//   grade: "B",
// };
// student.grade = "A";
// student.city = "Mumbai";
// delete student.age;
// console.log(student);

// let classroom = {
//   teacher: { name: "Ms Smith", sub: "Math" },
//   student1: { name: "Alice", sub: "A" },
//   student2: { name: "Bob", sub: "B" },
// };
// console.log("Teacher is :", classroom.teacher.name);
// console.log("First student is:", classroom.student1.name);
// console.log("Second student is:", classroom.student2.name);

// let company = {
//   engineering: { employees: 40, manager: "Jhon" },
//   sales: { employees: 25, manager: "Sarah" },
// };
// console.log("No. of employees are:", company.engineering.employees);
// console.log("Manager of sales department is:", company.sales.manager);
// company.engineering.employees = 45;
// console.log("No. of Updated employees are:", company.engineering.employees);

//Array of Objects
// let students = [
//   {
//     name: "Emma",
//     age: 20,
//     grade: "A",
//   },
//   {
//     name: "Liam",
//     age: 21,
//     grade: "B",
//   },
//   {
//     name: "Olivia",
//     age: 19,
//     grade: "A+",
//   },
// ];
// // console.log(students);
// console.log("The first student is :", students[0]);
// console.log("Ther marks of 3rd student is:", students[2].grade);
// console.log("The total no. of students are:", students.length);

// let products = [
//   {
//     id: 101,
//     name: "Phone",
//     price: 30000,
//   },
//   {
//     id: 102,
//     name: "Laptop",
//     price: 50000,
//   },
//   {
//     id: 103,
//     name: "Tablet",
//     price: 20000,
//   },
// ];
// console.log("The second product is :", products[1].name);
// products.push({
//   id: 104,
//   name: "Smartwatch",
//   price: 15000,
// });
// console.log(products);

// let posts = [
//   {
//     username: "tech_guru",
//     content: "Learning Javascript",
//     likes: 150,
//   },
//   {
//     username: "code_ninja",
//     content: "Arrays are awesome",
//     likes: 200,
//   },
// ];
// console.log("The content of first post is:", posts[0].content);
// console.log("The likes of the second post is :", posts[1].likes);
// posts[0].likes = 175;
// console.log(posts);

//Math Objects
// console.log(Math.PI);
// console.log(Math.pow(5, 2));
// console.log(Math.abs(-25));
// console.log(Math.floor(7.8));
// console.log(Math.ceil(7.2));

// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 100) + 1);
// Math.floor(Math.random() * (max - min + 1)) + min;
// let a = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// let b = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// let c = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// console.log(a, b, c);

//Dice roll
// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

//Random day of the week
// let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// let randomNumber = Math.floor(Math.random() * 7) + 1;
// if (randomNumber) {
//   console.log(days[randomNumber]);
// }

//Random age between 18 and 25
// let age = Math.floor(Math.random() * (25 - 18 + 1)) + 18;
// console.log("The random age between 18 and 25 is:", age);

//Random temperature between -10 to 40 in celsius
// let temp = Math.floor(Math.random() * (-10 + 40 + 1)) + -10;
// console.log("The random temperature is :", temp);

// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// let randNum = Math.floor(Math.random() * colors.length);
// console.log("The random color is :", colors[randNum]);

// let players = [
//   { name: "Sameer", score: 0 },
//   { name: "Lala", score: 0 },
//   { name: "jambiya", score: 0 },
// ];
// let dice1 = Math.floor(Math.random() * 6) + 1;
// let dice2 = Math.floor(Math.random() * 6) + 1;
// let dice3 = Math.floor(Math.random() * 6) + 1;
// players[0].score = dice1;
// players[1].score = dice2;
// players[2].score = dice3;
// console.log(players);

// let products = [
//   { name: "Phone", price: 20000, discount: 0 },
//   { name: "Laptop", price: 50000, discount: 0 },
// ];
// let phoneRandNo = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
// console.log(phoneRandNo);
// let laptopRandNo = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
// console.log(products[0].name, phoneRandNo);
// console.log(products[1].name, laptopRandNo);

// let game = {
//   player1: {
//     name: "Aron",
//     health: 100,
//     damage: 0,
//   },
//   player2: {
//     name: "Pico",
//     health: 100,
//     damage: 0,
//   },
// };
// let damage1 = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
// let damage2 = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
// game.player1.damage = damage1;
// game.player2.damage = damage2;
// console.log(game);

// let database = [
//   {
//     name: "Jhon jhones",
//     math: 0,
//     science: 0,
//   },
//   {
//     name: "Conor",
//     math: 0,
//     science: 0,
//   },
//   {
//     name: "Alex",
//     math: 0,
//     science: 0,
//   },
// ];
// let mathsMarks = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
// let scienceMarks = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
// database[0].science = scienceMarks;
// database[1].science = scienceMarks;
// database[2].science = scienceMarks;
// database[0].math = mathsMarks;
// database[1].math = mathsMarks;
// database[2].math = mathsMarks;
// console.log(database);

// Create an array to store tickets
let tickets = [];
// Generate 5 random ticket numbers (1000–9999)
for (let i = 0; i < 5; i++) {
  let ticketNumber = Math.floor(Math.random() * 9000) + 1000;
  tickets.push(ticketNumber);
}
// Print all ticket numbers
console.log("Ticket Numbers:", tickets);
// Select a winning ticket from the array
let winningNumber = tickets[Math.floor(Math.random() * tickets.length)];
// Print the winning number
console.log("Winning Number:", winningNumber);
