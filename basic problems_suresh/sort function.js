//sort based on dob
//add 5 to age without changing original array

const list = [
  { name: "suresh", age: 25, dob: "06/06/1999" },
  {
    name: "ramesha",
    age: 26,
    dob: "06/06/1998",
  },
  {
    name: "Akash",
    age: 24,
    dob: "06/05/2000",
  },
];

let a = [...list];

const b = a.map((item) => {
  return { ...item, age: item.age + 5 };
});

console.log(b);

console.log(a);

let li = list.sort((a, b) => {
  return new Date(a.dob) - new Date(b.dob);
});

console.log(li);
