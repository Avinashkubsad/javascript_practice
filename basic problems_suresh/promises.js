const fetchData = () => {
  return new Promise((resolve, reject) => {
    console.log("fetching the data");

    setTimeout(() => {
      const success = false;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("error, please try again later");
      }
    }, 2000);
  });
};

fetchData()
  .then((message) => console.log("success : ", message))
  .catch((error) => console.log("error : ", error));

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo")
);
const promise3 = 42;

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, "foo", 42]
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "Error in promise2")
// );
// const promise3 = Promise.resolve(42);

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
  // [
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'rejected', reason: 'Error in promise2' },
  //   { status: 'fulfilled', value: 42 }
  // ]
});

const asyncFunctions = [
  () => Promise.resolve("task 1"),
  () => Promise.resolve("task 2"),
  () => Promise.reject("task3"),
  () => Promise.resolve("task 1"),
];

async function execute(asyFunctions) {
  for (let func of asyFunctions) {
    try {
      const message = await func();
      console.log("excecuted", message);
    } catch (error) {
      console.log("Error", error);
      throw new Error(error);
    }
  }
}

execute(asyncFunctions)
  .then(() => console.log("task executed succesfully"))
  .catch(() => console.log("error, please try again later"));

///promise question
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve()
  .then(() => console.log(3))
  .then(() => console.log(4));

Promise.reject()
  .then(() => console.log(5))
  .catch(() => console.log(6));

// output 1,3,4,6,2
