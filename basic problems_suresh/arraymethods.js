//sum of n numbers using currying
const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;
const v = sum(1)(); //empty argument is to end the currying since we are ending the function upon empty b argument

//use reduce to search user and return list who are less than 26
const list = [
  { name: "suresh", age: 20 },
  { name: "ramesh,", age: 25 },
  { name: "hello", age: 30 },
];

function search(key) {
  let res = list.reduce((acc, cu) => {
    if (cu.name.includes(key)) {
      acc.push(cu.name);
    }
    return acc;
  }, []);
  return res;
}

///less than 26
list.reduce((acc, cu) => {
  if (cu.age < 26) {
    acc.push(cu.name);
  }
  return acc;
}, []);

///creating polyfill
const ar = [1, 2, 2];

Array.prototype.calculateSum = function () {
  let a = 0;
  for (let i = 0; i < this.length; i++) {
    a += this[i];
  }
  return a;
};

console.log(ar.calculateSum());
