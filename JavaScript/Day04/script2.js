//Advanced Array Methods

// let numbers = [10, 20, 30, 40, 50, 60, 70];
// let newNums = numbers.slice(2, 6);
// let newNums2 = numbers.slice(4);
// console.log(newNums);
// console.log(newNums2);
// console.log("Original array is :", numbers);

// let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"];
// let mrgPlayList = songs.slice(0, 4);
// let evnPlayList = songs.slice(3, songs.length - 1);
// let negIdx = songs.slice(-5);
// console.log("All songs accept first:", negIdx);
// console.log("Mornign songs:", mrgPlayList);
// console.log("Evening songs:", evnPlayList);

// let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
// let removedElems = ["blue", "yellow"];
// colors.splice(2, 2);
// console.log("The updated array is:", colors);
// console.log("The removed elements are:", removedElems);

// let numbers = [1, 2, 3, 7, 8, 9];
// numbers.splice(3, 0, 4, 5, 6);
// console.log(numbers);

// let fruits = ["banana", "apple", "mango", "cherry", "orange"];
// fruits.sort();
// console.log(fruits);
// let nums = [5, 10, 1, 100, 25];
// nums.sort();
// console.log(nums);

// let scores = [78, 92, 85, 88, 95, 73];
// let highest = 0;
// for (let i = 0; i <= scores.length - 1; i++) {
//   if (scores[i] > highest) {
//     highest = scores[i];
//   }
// }
// console.log(highest);
// scores.sort((a, b) => b - a); //Descending
// scores.sort((a, b) => a - b); //Ascending
// console.log(scores);

// let words = ["JavaScript", "is", "awesome"];
// let words1 = words.join();
// console.log(words.join(" "));
// console.log(words.join("-"));
// console.log(words.join(""));

// let dateArray = ["2024", "12", "25"];
// let time = ["14", "30", "00"];
// console.log(dateArray.join("/"));
// console.log(dateArray.join("-"));
// console.log(time.join(":"));

// let numbers = [1, 2, 3, 4, 5];
// console.log(typeof numbers);
// let numToStr = numbers.toString();
// console.log(typeof numToStr);

// let grid = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(grid.toString());
// console.log(grid.join());
// console.log(typeof grid);
//the results are same of both toString and join methods

// let Aray = new Array(10, 20, 30);

// console.log(Aray, "The length of the array is:", Aray.length);

//Two ways of making arrays in JS
// let arr1 = new Array("a", "b", "c", "d");
// let arr2 = ["a", "b", "c", "d"];
// console.log(typeof arr1, typeof arr2);
