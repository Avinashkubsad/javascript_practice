//The destructuring assignment syntax is  a javacript expression that makes it posssible to unpack values
//from arrays or properties from objects into distinct variables.


let arr = [10, 20, 30];

// Destructuring assignment from array
let [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30   





let person ={
    name:"Avinash",
    age:25,
    city:"New York",
    address:{
        street:"123 Main St",
        zip:"10001"
    }
}

let {name : j,age:h,city:i,address:{street}} = person;

console.log(person);
console.log(person.age);
console.log(person.city);
console.log(street);
