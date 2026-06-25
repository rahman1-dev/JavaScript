//Async/Await
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     resolve("USER DATA");
//   });
// }
// function fetchUserPost() {
//   return new Promise((resolve, reject) => {
//     resolve("POST");
//   });
// }
// function fetchPostComment() {
//   return new Promise((resolve, reject) => {
//     resolve("COMMENTS");
//   });
// }
// async function getUserContent() {
//   try {
//     let user = await fetchUserData();
//     console.log("fetching user data", user);

//     const post = await fetchUserPost(user.id);
//     console.log("fetching post data", post);

//     const comment = await fetchPostComment();
//     console.log("fetching comment", comment);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUserContent();

// async function getData() {
//   return "Hello world!";
//   resolve();
// }
// getData().then((resolve) => {
//   console.log(resolve);
// });

// async function getCourseName() {
//   return "JavaScript!";
// }
// let course = getCourseName()
//   .then((res) => {
//     console.log(res);
//   })

// async function getStudentInfo() {
//   return {
//     name: "Munawar",
//     rollNo: 525,
//     course: "B.Tech",
//   };
// }
// getStudentInfo().then((res) => {
//   console.log(res);
// });

//Async Function with Errors
// async function divideNumbers(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero!");
//   }
//   return a / b;
// }
// divideNumbers(7, 0)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function makeCoffee() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Coffee ready");
//       resolve();
//     }, 3000);
//   });
// }
// async function orderCoffee() {
//   console.log("Order placed....");
//   await makeCoffee();
//   console.log("Do other things while coffee is being made");
// }
// orderCoffee();

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Gathering ingredients");
      resolve();
    }, 1000);
  });
}
function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: Mixing ingredients");
      resolve();
    }, 1000);
  });
}
function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3: Baking in oven");
      resolve();
    }, 1000);
  });
}
async function bakeCake() {
  console.log("Starting to bake...");
  await step1();
  await step2();
  await step3();
}
bakeCake();
