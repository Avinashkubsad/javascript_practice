const flatten = (arr) => {
  let result = [];

  const caller = function subFunction(element) {
    if (Array.isArray(element)) {
      for (let i of element) {
        subFunction(i);
      }
    } else {
      result.push(element);
    }
  };

  for (let a of arr) {
    caller(a);
  }
  return result;
};
console.log(flatten([1, 2, [3, 4, [4, 5]]]));
