const myDate = new Date();
console.log(myDate);


console.log(myDate.toISOString);
console.log(myDate.toString()); // gives o/p  as week/month/date 

console.log(myDate.toLocaleDateString());   //gives o/p as month/date/year only   6/29/2025

console.log(myDate.toLocaleTimeString());   // 6:23:29 PM


// template literals in js
let name = "Avinash";
let greeting = `Hello, ${name}! Welcome to the JavaScript world.`;
console.log(greeting);