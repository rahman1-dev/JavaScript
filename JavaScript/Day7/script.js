// function pattern() {
//   for (let i = 1; i <= 4; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }
// pattern();

// function studentInfo(name, age, course) {
//   console.log("Name", name);
//   console.log("Age:", age);
//   console.log("Course", course);
// }
// studentInfo("ldjl", 52, "cljlkj");

// function multiplyThree(a, b, c) {
//   return a * b * c;
// }
// let mul = multiplyThree(5, 5, 6);
// console.log(mul);

// function isEligibleToVote(userName, age) {
//   if (age >= 18) {
//     console.log(userName, "can vote, age is :", age);
//   } else {
//     console.log("Connot vote,the age is:", age);
//   }
// }
// isEligibleToVote("Abrar", 18);

// function findLargest(a, b) {
//   return Math.max(a, b);
// }
// let max = findLargest(9, 5200);
// console.log(max);

// function calculateDiscount(originalVal, discount) {
//   return (originalVal * discount) / 100;
// }
// let discount = calculateDiscount(4000, 10);
// console.log(discount);

// let x = 10;
// function test() {
//   let x = 20;
//   console.log("Inner", x);
// }
// test();
// console.log("Outer", x);

// function calculate() {
//   let result = 100;
//   console.log(result);
// }
// calculate();

//Lexical scope
// function outer() {
//   message = "Hello";
//   console.log(message, "from outer");
//   function inner() {
//     console.log(message, "from inner");
//   }
//   inner();
// }
// outer();

// function parent() {
//   let a = 10;
//   function child() {
//     let b = 20;
//     console.log(a + b);
//     console.log(b);
//   }
//   child();
// }
// parent();

//Function expression
// let divideFunction = function (a, b) {
//   console.log(a / b);
// };
// divideFunction(10, 2);

//Calsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// let Fahrenheit = celsiusToFahrenheit(25);
// console.log("The fahrenheit is :", Fahrenheit);

// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// function executeOperation(a, b, operation) {
//   return operation(a, b);
// }
// console.log(executeOperation(5, 3, add));

// const executeOpertion = (a, b, operation) => {
//   return operation(a, b);
// };
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;
// console.log(executeOpertion(8, 16, mod));

// const sayHello = () => console.log("Hello");
// const repeat = (fun, num) => {
//   for (let i = 1; i <= num; i++) {
//     fun();
//   }
// };
// console.log(repeat(sayHello, 8));

// let student = {
//   name: "Priya Mehtha",
//   marks: [45, 5, 4, 42, 41],
//   getAverage() {
//     let score = 0;
//     for (let i = 0; i <= this.marks.length - 1; i++) {
//       score += this.marks[i];
//     }
//     console.log(`The average of ${this.name} is: ${score / this.marks.length}`);
//   },
// };
// student.getAverage();

let rectangle = {
  length: 50,
  width: 90,
  getArea(l, b) {
    let area = this.length * this.width;
    console.log(area);
  },
  getParimeter(l, b) {
    let parimeter = 2 * (this.length + this.width);
    console.log(parimeter);
  },
};
console.log("Area of reactangle is:", rectangle.getArea());
console.log("Parimeter of reactangle is:", rectangle.getParimeter());
