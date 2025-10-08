//to merge two objects
const animal = {
  type: "Mammal",
  characteristics: {
    hasFur: true,
    legs: 4,
    diet: {
      type: "Omnivore",
      examples: ["fruits", "nuts", "small animals"],
    },
    color: "red",
  },
};

const newInfo = {
  characteristics: {
    diet: {
      examples: ["fish"],
    },
    color: "Brown",
  },
};

const updatedAnimal = { ...animal, ...newInfo };
console.log(JSON.stringify(updatedAnimal, null, 2)); // "Brown"
console.log(updatedAnimal.characteristics.diet.examples); // ["fish"]
