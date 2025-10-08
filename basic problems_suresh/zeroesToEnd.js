function zeroToEnd(arr) {
  let n = arr.length;
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

function move(arr) {
  const nonZeros = arr.filter((i) => {
    return i != 0;
  });
  return [...nonZeros, ...Array(arr.length - nonZeros.length).fill(0)];
}

function move1(arr) {
  const nonZeros = [];
  const zeros = [];
  for (let a of arr) {
    if (a == 0) {
      zeros.push(a);
    } else {
      nonZeros.push(a);
    }
  }
  return [...nonZeros, ...zeros];
}
const arr = [2, 3, 0, 5, 4, 0, 8, 7, 0, 8];
console.log(zeroToEnd(arr));
console.log(move(arr));
