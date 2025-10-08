var merge = function (chars) {
  let n = chars.length;
  let count = 1;
  let result = [];
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      result.push(chars[i].toString(), count.toString());
      count = 1;
    }
  }
  return { result, obj };
};

console.log(merge(["a", "a", "a", "b", "c", "c", "c", "a", "b"]));
