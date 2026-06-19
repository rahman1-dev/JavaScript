// let car = {
//   brand: "toyota",
//   model: 2004,
//   price: 500000,
//   displayInfo() {
//     console.log(
//       `Brand: ${this.brand}, Model: ${this.model}, Price:${this.price} `,
//     );
//   },
//   applyDiscountPercentage(discount) {
//     console.log(
//       "Price after the discount is:",
//       `${this.price * discount}` / 100,
//     );
//     console.log("Actual price is :", this.price);
//   },
// };
// console.log(car.displayInfo());
// console.log(car.applyDiscountPercentage(10));

// let student = {
//   name: "Raheem khan",
//   subject: [{ math: 10, sceince: 50, english: 60 }],
//   calculateAvg() {
//     console.log(
//       "The average is :",
//       (this.subject[0].math +
//         this.subject[0].sceince +
//         this.subject[0].english) /
//         3,
//     );
//   },
//   displayReport() {
//     console.log("The average is :", this.calculateAvg());
//     console.log("Marks are:", this.subject[0]);
//   },
// };
// console.log(student.displayReport());

// const safeDivide = (a, b) => {
//   try {
//     let result = a / b;
//     console.log(result);
//   } catch (err) {
//     console.log("The error is :", err);
//   } finally {
//     console.log("I am finally block");
//   }
// };
// safeDivide(15, 0);

// let dummyArray = [5, 2, 7, 4, 4, 2, 7];
// getElement = (arr, index) => {
//   try {
//     if (index < 0) {
//       console.log("Index cannot be negative!");
//     }
//     if (index >= arr.length - 1) {
//       console.log("Index out of bounds!");
//     } else {
//       let element = arr[index];
//       console.log(element);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// getElement(dummyArray, 4);

// celsiusToFahrenheit = (celsius) => {
//   return (celsius * 9) / 5 + 32;
// };
// fahrenheitToCelsius = (fahrenheit) => {
//   return ((fahrenheit - 32) * 5) / 9;
// };
// let temp = celsiusToFahrenheit(24);
// console.log(temp);
// let temp1 = fahrenheitToCelsius(75.2);
// console.log(temp1);

// let numbers = [12, 5, 8, 21, 16, 3, 18, 9];
// let sqrt = numbers.map((elem) => {
//   return Math.sqrt(elem);
// });
// console.log(sqrt);

// let celsiusTemp = [0, 10, 20, 30, 40];
// let temp = celsiusTemp.map((elem) => {
//   return (elem * 9) / 5 + 32;
// });
// console.log("The temparatures in celcius are:", celsiusTemp);
// console.log("The temparatures in Fahrenheit are:", temp);

// let numbers = [12, 5, 8, 21, 16, 3, 18, 9];
// let lessThanTen = numbers.filter((elem) => {
//   return elem < 10;
// });
// console.log(lessThanTen);
// let sqr = lessThanTen.map((elem) => {
//   return elem * elem;
// });
// console.log(sqr);

//Writing the above logic in single chain.
// let numbers = [12, 5, 8, 21, 16, 3, 18, 9];
// let result = numbers.filter((elem) => elem < 10).map((elem) => elem * elem);
// console.log(result);

//settTimeout runs after some delay
// console.log("Before......");
// setTimeout(() => {
//   console.log("Hello");
// }, 2000);
// console.log("After......");

//setInterval()
// let count = 0;
// let id = setInterval(() => {
//   count++;
//   console.log(`Count:${count}`);

//   if (count == 5) {
//     clearInterval(id);
//     console.log("Blast");
//   }
// }, 1000);

//Clock Display
// let sec = 0;
// let id = setInterval(() => {
//   sec++;
//   console.log(sec);
//   if (sec == 5) {
//     clearInterval(id);
//   }
// }, 1000);

//Best example
// let interval = setInterval(() => {
//   console.log("Hello");
// }, 1000);
// setTimeout(() => {
//   clearInterval(interval);
//   console.log("Stop");
// }, 5000);

// let count = 5;
// let n = setInterval(() => {
//   console.log(count);
//   count--;

//   if (count == 0) {
//     clearInterval(n);
//     console.log("Time Up!");
//   }
// }, 1000);

// function animateText(text) {
//   let str = "";
//   for (let i = 0; i <= text.length; i++) {
//     setTimeout(() => {
//       console.log(text[i]);
//     }, i * 200);
//   }
// }
// animateText("JavaScript");

// setTimeout(() => {
//   console.log("Hello");
// }, 1000);

// let id = setInterval(() => {
//   console.log("Tick!");
// }, 1000);
// setTimeout(() => {
//   clearInterval(id);
//   console.log("Booooom");
// }, 5000);

// showMsg = () => {
//   console.log("Welcome to JavaScript!");
// };
// setTimeout(() => {
//   showMsg();
// }, 5000);

// let count = 5;
// let time = setInterval(() => {
//   console.log(count);
//   count--;
// }, 1000);
// setInterval(() => {
//   clearInterval(time);
//   console.log("Go!");
// }, 5000);

// animateWord = (text) => {
//   let str = "";
//   for (let i = 0; i <= text.length; i++) {
//     setTimeout(() => {
//       str += text[i];
//       console.log(str);
//     }, i * 200);
//   }
// };
// animateWord("Python");

// let timer = {
//   second: 0,
//   start() {
//     let sec = this.second;
//     let id = setInterval(() => {
//       console.log(sec);
//       sec++;
//     }, 1000);
//   },8
//   stop() {},
//   reset() {},
// };
// timer.start();

let person = {
  firstName: "MD",
  lastName: "Noman",
  greet() {
    setTimeout(() => {
      console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};
person.greet();
