function printNestedObject(obj, prefix = "") {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        printNestedObject(value, `${prefix}${key}.`);
      } else {
        console.log(`${prefix}${key}: ${value}`);
      }
    }
  }
  
  printNestedObject(user);
  