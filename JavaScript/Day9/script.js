// let numbers = [10, 20, 30, 40];
// numbers.forEach((elem) => {
//   console.log(elem);
// });

// let prices = [99, 149, 299];
// prices.forEach((elem) => {
//   console.log(`$${elem}`);
// });

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach((elem, idx) => {
//   console.log(`${elem}: at ${idx} `);
// });

// let scores = [85, 90, 78, 92];
// let total = 0;
// scores.forEach((elem) => {
//   total += elem;
// });
// console.log(total);

// let names = ["alice", "bob", "charlie"];
// let newArr = [];
// names.forEach((elem) => {
//   newArr.push(elem.toUpperCase());
// });
// console.log(newArr);

// let nums = [1, 2, 3, 4];
// let double = nums.map((elem) => elem * 2);
// console.log(double);

// let names = ["alice", "bob", "charlie"];
// let upperNames = names.map((elem) => elem.toUpperCase());
// console.log(upperNames);

// let students = [
//   { name: "John", age: 20 },
//   { name: "Sarah", age: 22 },
//   { name: "Mike", age: 21 },
// ];
// let info = students.map((e, idx) => {
//   return e.name;
// });
// console.log(info);

// let prices = [100, 200, 150];
// //sale taxe/price=1.18
// let salesTaxes = prices.map((elem) => elem * 1.18);
// console.log(salesTaxes);

// let items = ["Home", "About", "Contact"];
// items.map((elem) => {
//   console.log(`<${elem}/>`);
// });

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = numbers.filter((items) => {
//   return items % 2 == 0;
// });
// console.log(even);

// let grades = [45, 78, 89, 34, 92, 56];
// let pass = grades.filter((e) => e > 50);
// console.log(pass);

// let words = ["hi", "hello", "bye", "goodbye"];
// let result = words.filter((e) => {
//   return e.length > 3;
// });
// console.log(result);

// let people = [
//   { name: "John", age: 17 },
//   { name: "Sarah", age: 22 },
//   { name: "Mike", age: 15 },
//   { name: "Emma", age: 25 },
// ];
// let adults = people.filter((e) => e.age >= 18);
// console.log(adults);

// let ages = [20, 25, 18, 30];
// let adult = ages.every((age) => {
//   return age >= 18;
// });
// console.log(adult);

// let ages = [20, 25, 17, 30];
// let hasteenAgers = ages.some((age) => age < 18);
// console.log(hasteenAgers);

// let formFields = ["John", "john@email.com", "password123", ""];
// let allFilled = formFields.every((field) => field.length > 0);
// console.log(allFilled);

// let numbers = [5, 10, -3, 20];
// let post = numbers.some((item) => {
//   return item < 0;
// });
// console.log(post);

// let prices = [50, 75, 120, 30];
// let afordable = prices.every((e) => e <= 100);
// console.log(afordable);

//reduce method
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => {
//   return total + num;
// }, 0);
// console.log(sum);

// let numbers = [45, 78, 12, 89, 34, 90];
// let max = numbers.reduce((maximum, num) => {
//   return num > maximum ? num : maximum;
// }, 0);
// console.log(max);

// let fruits = ["apple", "banana", "apple", "mango", "apple"];
// let count = fruits.reduce((counter, fruit) => {
//   counter[fruit] = (counter[fruit] || 0) + 1;
//   return counter;
// }, {});
// console.log(count);

// let cart = [
//   { item: "Shirt", price: 500 },
//   { item: "Shoes", price: 1200 },
//   { item: "Hat", price: 300 },
// ];
// let total = cart.reduce((sum, elem) => {
//   return sum + elem.price;
// }, 0);
// console.log(total);

// let nested = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let result = nested.reduce((acc, elem, index) => {
//   return acc.concat(elem);
// }, []);
// console.log(result);

//Default parameters in functions
// function greet(user = "Guest") {
//   console.log("Hello", user);
// }
// greet();

// function calculateTax(amount, taxRate = 0.18) {
//   console.log("Your tax is:", amount * taxRate);
// }
// calculateTax(7000);

// function createProfile(name, age = 18, country = "India") {
//   return { name, age, country };
// }
// let info = createProfile("Rohit");
// console.log(info);

// let original = [1, 2, 3];
// let newArr = [...original];
// newArr.push(4);
// console.log("Original", original);
// console.log("Copeid", newArr);

// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let merge = [...fruits, ...vegetables];
// console.log(merge);

// let numbers = [2, 3, 4];
// let copy = [1, ...numbers, 5];
// console.log(copy);

// let user = {
//   name: "Tony Stark",
//   email: "tony@stark.com",
// }
// let copyUser = { ...user, gender: "Female" };
// console.log(copyUser);

// let name = "HELLO";
// let arr = [...name];
// console.log(arr);

// let total = 0;
// function sum(...num) {
//   return num.reduce((acc, num) => (acc += num), 0);
// }
// let res = sum(1, 2, 3);
// console.log(res);

// function announce(first, ...others) {
//   console.log(`Winner: ${first}`);
//   console.log(`Others: ${others}`);
// }
// announce("Abrar", "Aslam", "Atif");

// function names(captain, viceCaptain, ...players) {
//   return {
//     captain,
//     viceCaptain,
//     players,
//   };
// }
// let result = names("Virat", "Koli", "Rohit", "Sharma", "Ronaldo", "Khabeeb");
// console.log(result);

// function mul(multiplier, ...numbers) {
//   return numbers.map((num) => num * multiplier);
// }
// let result = mul(5, 2, 3);
// console.log(result);

//Destructuring
// let student = {
//   name: "Rahul",
//   age: 20,
//   grade: "A",
// };
// let { name, age, grade } = student;
// console.log(name);
// console.log(age);
// console.log(grade);

// let user = {
//   username: "karan123",
//   email: "karan@example.com",
// };
// let { username: name, email: gmail } = user;
// console.log(name);
// console.log(gmail);

// let settings = {
//   theme: "dark",
// };
// let { theme, lang = "English" } = settings;
// console.log(lang);
// console.log(theme);

// let person = {
//   name: "John",
//   address: {
//     city: "Mumbai",
//     pin: 400001,
//   },
// };
// let {
//   name,
//   address: { city, pin },
// } = person;
// console.log(name);
// console.log(city);
// console.log(pin);

// let products = ["Laptop", "Smartphone", "Headphones", "Keyboard", "Mouse"];
// products.forEach((element) => {
//   console.log(`Available product :${element}`);
// });

// let numbers = [1, 8, 9, 5, 7, 5];
// let newNum = numbers.map((num) => {
//   return num * 10;
// });
// console.log(newNum);

//Continue with the last exercise of the day 9---------------------------
