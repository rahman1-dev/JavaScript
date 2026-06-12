// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast");

// for (let i = 1; i <= 10; i++) {
//   console.log(`7X${i}=${i * 7}`);
// }

// let n = 20;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// let n = 4;
// let m = 4;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = " ";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// [1+2+3+4-----50]
// let i = 1;
// let sum = 0;
// while (i <= 50) {
//   sum += i;
//   i++;
// }
// console.log("The final sum is:", sum);
// console.log("Total no.'s added:", i - 1);

// let sum = 0;
// let i = 1;
// while (sum <= 50) {
//   sum += i;
//   i++;
// }
// console.log("Total sum is:", sum);
// console.log("Total no. added:", i);

// let menu;
// do {
//   menu = prompt("Enter here:");
//   if (menu == "hello") {
//     console.log("Hello to you too");
//   } else if (menu == "exit") {
//     console.log("GoodBye!");
//   }
// } while (menu !== "exit");

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("The first no. divisible by 3 and 5 is ", i);
//     break;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 3 || i == 6 || i == 7) {
//     continue;
//   }
//   console.log(i);
// }

// let cities = ["Mumbai", "Delhi", "Banglore", "Chennai", "Kolkata"];
// for (let i = 0; i <= cities.length - 1; i++) {
//   console.log(i, cities[i]);
// }

// let numbers = [10, 25, 30, 45, 20];
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// let scores = [78, 92, 85, 99, 88, 76];
// let max = scores[0];
// for (let i = 0; i <= scores.length - 1; i++) {
//   if (scores[i] > max) {
//     max = scores[i];
//   }
// }
// console.log("maximum score is :", max);

// let items = [
//   ["Alice", "Bob"],
//   ["Charlie", "David"],
//   ["Eve", "Frank"],
// ];
// for (let i = 0; i <= items.length - 1; i++) {
//   for (let j = 0; j <= items[i].length - 1; j++) {
//     console.log(items[i][j]);
//   }
// }

// let fruits = ["apple", "banana", "orange", "sapodilla", "mango"];
// for (fruit of fruits) {
//   console.log(fruit);
// }

// let str = "LOOP";
// for (char of str) {
//   console.log(char);
// }

// let sentence = "JavaScript is awesome";
// let count = 0;
// for (let ch of sentence) {
//   if ("aeiou".includes(ch.toLowerCase())) {
//     count++;
//   }
// }
// console.log("The no. of vowels is :", count);

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 != 0 && i % 5 != 0) {
//     console.log(i);
//   }
//   if (i % 3 == 0) {
//     console.log(i, "Fizz");
//   }
//   if (i % 5 == 0) {
//     console.log(i, "Buzz");
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i, "FizzBuzz");
//   }
// }

// let arr = [10, 20, 30, 40, 50];
// arr.reverse();
// console.log(arr);
