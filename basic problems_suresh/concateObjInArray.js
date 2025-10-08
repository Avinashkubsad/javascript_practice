a = [{ a: [1, 2, 3] }, { b: [5, 6] }, { d: [8, 9, 9] }];
b = [{ a: [5, 6, 3] }, { d: [5, 8, 9, 9, 3] }, { c: [1, 7, 4] }];

// // output = [{a:[1,2,3,5,6]},....soON]
// function conc(a, b) {
//   let arr = [...a, ...b];
//   let obj = {};
//   for (let num of arr) {
//     for (let key in num) {
//       if (obj[key]) {
//         let res = [...obj[key], ...num[key]].sort();
//         obj[key] = nonRepeating(res);
//       } else {
//         obj[key] = num[key].sort();
//       }
//     }
//   }

//   let res = [];
//   for (let key in obj) {
//     res.push({ [key]: obj[key] });
//   }
//   console.log(res);
// }

function conc(a, b) {
  let res = [...a, ...b];
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      for (let key in res[i]) {
        for (let key1 in res[j]) {
          if (key === key1) {
            let index = res.indexOf(res[j]);
            res[i][key] = nonRepeating([...res[i][key], ...res[j][key1]]);
            res.splice(index, 1);
          }
        }
      }
    }
  }
  console.log(res);
}

conc(a, b);

function nonRepeating(arr) {
  let res = [];
  for (let num of arr) {
    if (!res.includes(num)) {
      res.push(num);
    }
  }
  return res;
}

// let result = [];

// // Combine the arrays into a single array of objects
// let combined = [...a, ...b];

// // Iterate through the combined array and merge values by keys
// combined.forEach((item) => {
//   for (let key in item) {
//     let existingItem = result.find((r) => r[key]);
//     let newValues = item[key];

//     if (existingItem) {
//       // Merge arrays, ensuring unique values
//       existingItem[key] = [...new Set([...existingItem[key], ...newValues])];
//     } else {
//       // If the key doesn't exist, add it
//       result.push({ [key]: [...new Set(newValues)] });
//     }
//   }
// });

// console.log(result);
// console.log(new Set([1]));
