// let userInput = "   HeLLo JaVAScript   ";
// let cleanInput = userInput.trim().toLowerCase();
// console.log(cleanInput);

// let email = " USER@EXAMPLE.COM";
// let newEmail = email.trim().toLowerCase();
// console.log(newEmail);

// let password = "  MyP@awOrd123";
// let securePassword = password.trim().toUpperCase().slice(0, 9);
// console.log(securePassword);

// let fullName = "Alexander Hamilton";
// let firstName = fullName.slice(0, 9);
// let lastName = fullName.slice(10);
// console.log(firstName, lastName);

// let phone = "6285457964";
// let areaCode = phone.slice(0, 3);
// let lastFour = phone.slice(6);
// console.log(`Area code : ${areaCode}, last four :${lastFour}`);

// let announcement = "The event will happen on Monday and Monday only";
// let updatedAnnouncement = announcement.replace("Monday", "Friday");
// console.log(announcement, updatedAnnouncement);

// let colors = ["red", "blue", "green", "yellow"];
// console.log(colors[colors.length - 1]); //last array element using .length
// console.log("The total elements are ", colors.length);

// let playList = [];
// playList.push("Song 1");
// playList.push("Song 2");
// console.log(playList.pop());
// playList.unshift("Song 0");
// console.log(playList);

// let fruits = ["apple", "banana", "mango", "orange", "banana"];
// console.log(fruits.indexOf("apple"));
// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("grape")); return -1

// let inventory = ["laptop", "mouse", "keyboard"];
// console.log(inventory.includes("mouse"));
// console.log(inventory.includes("printer"));

// let morningClasses = ["Math", "English", "Science"];
// let afternoonClasses = ["History", "Art", "PE"];
// let fullSchedule = morningClasses + " " + afternoonClasses;
// console.log(fullSchedule);

// let originalArr = [1, 2, 3, 4, 5];
// let reversedArr = originalArr.reverse();
// console.log("Original array is:", originalArr);
// console.log("Reversed array is:", reversedArr);

//splice(starting element,delet element, add element)
// let months = ["jan", "feb", "mar", "may", "jun"];
// months.splice(3, 0, "apr");
// console.log(months);

// let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
// students.splice(2, 1);
// console.log("The updated student array is :", students);

//Array refrences
// let original = [1, 2, 3];
// let refrence = original;
// refrence[0] == 99;
// console.log("Oringinal", original);
// console.log("Refrence", refrence);

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 == arr2); //false
// console.log(arr1 === arr2); //false
//This is happening because , the comparision is done between the array addresses not the actual value inside it.

// let ticTacToe = [
//   ["X", "O", "X"],
//   ["X", "O", "X"],
//   ["X", "O", "X"],
// ];
// ticTacToe[0][1] = "O";
// ticTacToe[2][2] = "X";
// ticTacToe[1][1] = "X";
// console.log(ticTacToe);

// let studentsMarks = [
//   ["Rahul", 20, 10, 40],
//   ["Ravi", 50, 80, 30],
//   ["Priya", 0, 0, -2],
// ];
// studentsMarks[2][1] = -5;
// console.log(studentsMarks);
