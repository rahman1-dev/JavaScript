// let number = prompt("Enter the number");
// if (number > 0) {
//   console.log("Positive number");
// } else if (number < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Number = 0");
// }

// let age = prompt("Enter your age:");
// if (age >= 18) {
//   console.log("Eligible for driving");
// } else {
//   console.log("See you in court");
// }

// let marks = prompt("Enter the student marks to see the grade:");
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 80 && marks <= 89) {
//   console.log("B");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("C");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("D");
// } else if (marks <= 60) {
//   console.log("F");
// }

// let username = prompt("Enter username: ");
// let password = prompt("Enter password:");
// if (username === "admin" && password === "12345") {
//   console.log("Login successful");
// } else {
//   console.log("Unsuccessful login");
// }

// let age = Number(prompt("Enter you age to know the ticket price:"));
// if (age < 12) {
//   console.log("Ticket price is :$5");
// } else if (age >= 12 && age < 60) {
//   console.log("Ticket price is :$8");
// } else if (age >= 60) {
//   console.log("Ticket price is :$6");
// }

// let total = 50;
// let isPremium = false;
// if (total >= 50 || isPremium) {
//   console.log("Free shipping");
// } else {
//   console.log("Shipping cost is $50");
// }

// let marks = 40;
// if (marks >= 33) {
//   if (marks >= 80) {
//     console.log("Pass with destinction");
//   } else {
//     console.log("Pass");
//   }
// } else {
//   console.log("Fail");
// }

// let day = Number(prompt("Enter the day number:"));
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 7:
//     console.log("Friday");
//     break;
//   case 8:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid number");
// }

// let monthNumber = Number(prompt("Enter the month no. to check the season:"));
// switch (monthNumber) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Fall");
//     break;
//   default:
//     console.log("Invalid Number");
// }

// let userName = "Abdur Rahman";
// if (userName) {
//   console.log(`Welcome ${userName}`);
// } else {
//   console.log("Please enter a username");
// }

// let score = 0;
// if (score) {
//   console.log(score);
// } else {
//   console.log("No score yet");
// }

//Combining every thing learned today
// let age = 20;
// let isCitizen = true;
// let hasVoted = false;
// if (age >= 18 && isCitizen && !hasVoted) {
//   console.log("Person is Eligible to vote");
// } else {
//   console.log("Not eligible");
// }

// let isPremium = true;
// let total = 10;
// if (isPremium) {
//   console.log("20% discount");
// } else if (total > 100) {
//   console.log("15% discount");
// } else if (total > 50) {
//   console.log("10% discount");
// } else {
//   console.log(`No discount , Final amount is ${total} `);
// }

// let number = Number(prompt("Enter the no. to check the divisibility:"));
// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("The given number is divisible by both 3 and 5");
// } else if (number % 3 === 0) {
//   console.log("Divisible only by 3");
// } else if (number % 5 === 0) {
//   console.log("Divisible only by 5");
// } else {
//   console.log(`The number ${number} is not divisible by 3, 5, or both`);
// }

// let age = Number(prompt("Enter your age :"));
// if (age >= 18) {
//   alert("Eligible to vote");
// } else {
//   alert("Not eligible");
// }

// let num1 = Number(prompt("Enter first no.:"));
// let num2 = Number(prompt("Enter second no.:"));
// let operator = prompt("Enter opertor like (+,-,*,/,**):");
// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   default:
//     console.log("Invalid numbers");
// }

let str = "Abdur";
// console.log(str.length);
if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log("Golden String");
} else {
  console.log("Not a golden string");
}
