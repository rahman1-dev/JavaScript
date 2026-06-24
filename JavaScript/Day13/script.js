// function checkVotingEligibility(age) {
//   return new Promise((resolve, reject) => {
//     if (age >= 18) {
//       resolve("Can vote");
//     } else {
//       reject("Cannot vote");
//     }
//   });
// }
// checkVotingEligibility(20)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// checkVotingEligibility(14)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function isPositive(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 0) {
//       console.log("Positive");
//     } else {
//       console.log("Negetive");
//     }
//   });
// }
// isPositive(-1)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((failed) => {
//     console.log(failed);
//   });

// function checkPassword(password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (password.length >= 8) {
//         resolve("resolved successfully ");
//       } else {
//         reject("rejected");
//       }
//     }, 1000);
//   });
// }
// checkPassword("54v5d1f51v")
//   .then((suc) => {
//     console.log(suc);
//   })
//   .catch((failed) => {
//     console.log(failed);
//   });

// function checkEvenOdd(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 == 0) {
//       resolve("Number is Even");
//     } else {
//       reject("Number is Odd");
//     }
//   });
// }
// checkEvenOdd(13)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// function calculateGrade(marks) {
//   return new Promise((resolve, reject) => {
//     if (marks >= 90) {
//       resolve("Grade:+A");
//     }
//     if (marks >= 80) {
//       resolve("Grade:+B");
//     }
//     if (marks >= 70) {
//       resolve("Grade:+C");
//     }
//     if (marks >= 60) {
//       resolve("Grade:+D");
//     }
//     if (marks >= 40) {
//       resolve("Grade:E");
//     }
//     if (marks < 40) {
//       reject("Failed");
//     }
//   });
// }
// calculateGrade(20)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((er) => {
//     console.log(er);
//   });
// calculateGrade(80)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((er) => {
//     console.log(er);
//   });
// calculateGrade(56)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

// function getWeather(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const weather = {
//         Mumbai: { temp: 32, condition: "Sunny" },
//         Delhi: { temp: 28, condition: "Cloudy" },
//         Bangalore: { temp: 24, condition: "Rainy" },
//       };
//       if (weather[city]) {
//         resolve(weather[city]);
//       } else {
//         reject("City not found");
//       }
//     }, 1000);
//   });
// }

// getWeather("Delhi")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((failed) => console.log(failed));

// getWeather("hyderabad")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((failed) => console.log(failed));

// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "pass123") {
//         resolve({ username: username, role: "admin", token: "abc123xyz" });
//       } else {
//         reject("Invalid credentials");
//       }
//     }, 1500);
//   });
// }
// login("admin", "pass123")
//   .then((suc) => console.log(suc, "Welcome"))
//   .catch((err) => console.log(err));

// function downloadFile(filename) {
//   return new Promise((resolve, reject) => {
//     console.log("Downloading", filename, "...");
//     setTimeout(() => {
//       if (filename.endsWith(".pdf") || filename.endsWith(".jpg")) {
//         resolve("Downloaded: " + filename + " (Size: 2.5 MB)");
//       } else {
//         reject("Error: Unsupported file format");
//       }
//     }, 2000);
//   });
// }
// downloadFile("document.pdf")
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// function queryDatabase(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const users = {
//         101: { name: "Rahul", email: "rahul@example.com" },
//         102: { name: "Priya", email: "priya@example.com" },
//         103: { name: "Amit", email: "amit@example.com" },
//       };
//       if (users[id]) {
//         resolve(users[id]);
//       } else {
//         reject("User not found in database");
//       }
//     }, 1000);
//   });
// }

// queryDatabase(102)
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// queryDatabase(999)
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// function fetchAPI(endpoint) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (endpoint === "/users") {
//         resolve({ data: ["User1", "User2", "User3"], status: 200 });
//       } else if (endpoint === "/posts") {
//         resolve({ data: ["Post1", "Post2"], status: 200 });
//       } else {
//         reject({ error: "Endpoint not found", status: 404 });
//       }
//     }, 1000);
//   });
// }
// fetchAPI("/users")
//   .then((res) => {
//     console.log(res.data, res.status);
//   })
//   .catch((rej) => {
//     console.log(rej.error);
//   });

// function checkEligibility(marks) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Checking eligibility...");
//       if (marks >= 60) {
//         resolve({ eligible: true, marks: marks });
//       } else {
//         reject("Not eligible: Marks too low");
//       }
//     }, 1000);
//   });
// }
// function registerStudent(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Registering student...");
//       resolve({
//         ...data,
//         studentId: "STU" + Math.floor(Math.random() * 1000),
//         enrolled: true,
//       });
//     }, 1000);
//   });
// }
// function sendConfirmation(student) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Sending confirmation email...");
//       resolve("Enrollment complete! Student ID: " + student.studentId);
//     }, 1000);
//   });
// }
// checkEligibility(75)
//   .then((data) => {
//     return registerStudent(data);
//   })
//   .then((student) => {
//     return sendConfirmation(student);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function placeOrder(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order placed:", item);
      resolve({ item: item, orderId: "ORD123" });
    }, 1000);
  });
}
function prepareFood(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Preparing:", order.item);
      resolve({ ...order, status: "Prepared" });
    }, 2000);
  });
}
function deliverFood(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delivering:", order.item);
      resolve({ ...order, delivered: true });
    }, 1500);
  });
}

placeOrder("Pizza").then((order) => {
  return prepareFood(order).then((res) => {
    return deliverFood(order).then((order) => {
      console.log(order);
    });
  });
});
