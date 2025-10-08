let arr = [2, 3, 5, 2, 7, 9, 5];

const findDuplicates = (arr) => {
  let original = new Set();
  let duplicate = new Set();

  for (let num of arr) {
    if (original.has(num)) {
      duplicate.add(num);
    } else {
      original.add(num);
    }
  }
  return Array.from(duplicate);
};

//array method
const findDuplicates1 = (arr) => {
  let original = [];
  let duplicate = [];

  for (let num of arr) {
    if (original.includes(num)) {
      duplicate.push(num);
    } else {
      original.push(num);
    }
  }
  return duplicate;
};
console.log(findDuplicates1(arr));
