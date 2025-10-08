let arr = [1, 2, 3, 4, 3, 5, 2];

const maxMin = (arr) => {
  let max = 0;
  let min = Infinity;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return { min, max };
};
console.log(maxMin(arr));

// can also solve using Math.max, Math.min methods
