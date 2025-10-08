export function nonRepeating(arr) {
  let n = arr.length;
  let res = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(nonRepeating([4, 5, 1, 2, 0, 4, 1, 2]));
