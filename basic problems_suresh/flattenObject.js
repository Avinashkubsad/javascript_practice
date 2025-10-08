const object = {
  name: "sri",
  age: 2,
  address: {
    road: "1st road",
    street: "nu",
  },
};
function set(obj) {
  let obj2 = {};
  for (let key in obj) {
    console.log(key);
    if (typeof obj[key] === "object") {
      let flattened = set(obj[key]);
      Object.assign(obj2, flattened);
    } else {
      obj2[key] = obj[key];
    }
  }
  return obj2;
}

console.log(set(object));

// to get key like address.road we need to use prefix
