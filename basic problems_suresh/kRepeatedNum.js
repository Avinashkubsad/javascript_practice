let a = [1, 2, 3, 4, 5, 6, 2, 2, 1, 4, 4, 4, 5, 3, 6];
let k = 2;

function findKrepeated(a, k) {
  let obj = {};
  for (let num of a) {
    obj[num] = (obj[num] || 0) + 1;
  }
  const res = [];
  for (let key in obj) {
    if (obj[key] === k) {
      res.push(Number(key));
    }
  }
  return res || "not found";
}

console.log(findKrepeated(a, k));
