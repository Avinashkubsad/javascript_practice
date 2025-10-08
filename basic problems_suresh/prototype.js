// basic object prototype
const person = {
  greet: function () {
    console.log("Hello!");
  },
};
const student = Object.create(person); // student inherits from person
student.greet();

//example
const obj1 = {
  name: "Anand Kumar",
  company: "ABC",
  profession: "Enginer",
  getIntro: function () {
    console.log(
      `Hi I am ${this.name}. I am a ${this.profession} in ${this.company}`
    );
  },
};
const obj2 = {
  name: "Sam",
};
obj2.__proto__ = obj1;
//sets the prototype of obj2 to be obj1. This means that obj2 will inherit properties and methods from obj1.
obj2["company"] = "xyz";
obj2.getIntro();

//example
const obj = {
  first_name: "Sam",
  last_name: "T",
  print_name: function () {
    return this.first_name + this.last_name;
  },
};

const obj2 = {
  first_name: "Pat",
  last_name: "C",
};
Object.setPrototypeOf(obj2, obj); //or obj2.__proto__ = obj1
console.log(obj2.print_name());

//function constructor prototype
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const john = new Person("John");
console.log(john.name);
john.sayHello(); // Output: Hello, my name is John
