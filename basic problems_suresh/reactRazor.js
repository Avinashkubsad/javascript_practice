// let test = 1;

function myFunction2() {
  function test() {} // A local function named `test` is defined here.
 var test = 10;         // An attempt is made to assign 10 to `test`.
  return test;
}

const myFunction1 = () => {
  return myFunction2();
};

console.log(myFunction2()); //10
console.log(myFunction1()); //10
console.log(test);//1



[1, 1, 2, 3, 4].skipWhile(1); [2,3,4]
//SkipWhile method skips elements in a sequence based on a specified condition
[1, 1, 2, 3, 4].skipWhile(item => item < 3);[3,4]





function stringToObject(path, value) {
    const keys = path.split(/[\[\]]/).filter(Boolean);
    const result = {};
    let current = result;
    for (const key of keys) {
      if (!current[key]) {
        current[key] = {};
      }

      current = current[key];
    }
    current = value;
    return result;
  }
  
  
  const testTwo = stringToObject("a[b][c]", "someValue");
  
  console.log(testTwo);
  
  
 // Note: This code defines a stringToObject function that takes a string path and a value as input and returns an object with the specified nested structure. It breaks down the path into keys, creates the nested object structure, and assigns the value to the final object.
{a:{b:{c:{}}}}




hello();
function hello() {
  console.log("hello");
}
try {
  hi();
} catch (e) {
  console.log(e.message);
}
var hi = function () {
  console.log("Hi");
};
// When hi() is invoked before the function is assigned to it, it throws a TypeError because hi is undefined at that point and cannot be called as a function.

//hello
//hi is not a function



// pat c


function outerFunction(x) {
    function innerFunction(y) {
      return x + y;
    }
    return innerFunction(5);
  }
  console.log(outerFunction(3));


//   Modulus Operator (%):

// The % operator calculates the remainder when x is divided by 2.
// For even numbers, the remainder when divided by 2 is 0 (e.g., 4 % 2 = 0).
// For odd numbers, the remainder when divided by 2 is 1 (e.g., 5 % 2 = 1).
// Comparison (===):

// The function checks if the remainder (x % 2) is strictly equal to 0.
const isEven = (x) => x % 2 === 0;




const object = {
    name: "John",
    age: 21,
    additional_details: {
      place: "banglore",
      city: "india",
      account: {
        name: ['__TestData__'],
        created_at: undefined // Missing value
      }
    }
  };
  
  // 1. Access specific values
  const name = object.name;
  const age = object.age;
  const city = object.additional_details.city;
  
  console.log(name); // Output: John
  console.log(age);  // Output: 21
  console.log(city); // Output: india
  
  // 2. Modify existing values (e.g., change place from "banglore" to "Bengaluru")
  object.additional_details.place = "Bengaluru";
  
  // 3. Add new properties (e.g., add email address)
  object.additional_details.account.email = "john@example.com";
  
  // 4. Handle missing created_at value
  const createdAt = object.additional_details.account.created_at || 'N/A';
  console.log(createdAt); // Output: 'N/A'
  
  // If you want to assign a new value to created_at
  object.additional_details.account.created_at = "2025-01-01";

  // delete operator for deleteing the key from object
  const obj1 = {
    name: "Anand Kumar",
    company: "ABC",
    profession: "Enginer",
    getIntro: function() {
      console.log(`Hi I am ${this.name}. I am a ${this.profession} in ${this.company}`);
    }
  };
  delete obj1.company
  
  console.log(obj1);
  
  // Final object after all modifications
  console.log(object);
  
  // Output the final object:
  console.log(JSON.stringify(object, null, 2));
  





import { useState, useEffect } from "react";
import "./styles.css";

export default function home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hadley/orgs")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="App">
      <h1 className="heading1">Fetch data</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.login}</li>
        ))}
      </ul>
    </div>

  );
}



  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = []; // Store doubled values
  
  const sum = numbers.reduce((accumulator, currentvalue) => {
    return accumulator +currentvalue
  });
  
  console.log(sum); 


  // 1. Implicit Type Conversion (Coercion)
javascript
Copy
Edit
console.log(0 == '0');
console.log(0 === '0');
Explanation:
0 == '0' → true// (because == performs type coercion, converting '0' to a number).
0 === '0' → false //(because === checks both type and value, and 0 is a number while '0' is a string).

//2. Comparing null and undefined
javascript
Copy
Edit
console.log(null == undefined);
console.log(null === undefined);
Explanation:
null == undefined → true// (because == treats null and undefined as loosely equal).
null === undefined → false// (because === checks type, and null and undefined are different types).

//3. Boolean Conversion
javascript
Copy
Edit
console.log(false == 'false');
console.log(false === 'false');
console.log(false == 0);
console.log(false === 0);
Explanation:
false == 'false' → false //('false' is a string, and false is a boolean; they don’t coerce to the same value).
false === 'false' → false// (strict comparison, different types).
false == 0 → true// (false is coerced to 0, and 0 == 0 is true).
false === 0 → false //(strict comparison, different types).

//4. Object vs. Primitive
javascript
Copy
Edit
console.log([] == false);
console.log([] === false);
console.log({} == false);
console.log({} === false);
Explanation:
[] == false → true //(empty array is coerced to an empty string '', which is then coerced to false).
[] === false → false //(strict comparison, different types).
{} == false → false //(objects are not coerced to primitives in the same way as arrays).
{} === false → false// (strict comparison, different types).

//5. Weird NaN Comparisons
javascript
Copy
Edit
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(isNaN(NaN));
Explanation:
NaN == NaN → false //(NaN is never equal to anything, even itself).
NaN === NaN → false //(strict comparison doesn’t change this).
isNaN(NaN) → true// (isNaN checks if a value is NaN).

//6. String and Number Coercion
javascript
Copy
Edit
console.log('5' + 3 == 53);
console.log('5' - 3 == 2);
console.log('5' + 3 === 53);
console.log('5' - 3 === 2);
Explanation:
'5' + 3 == 53 → true //(+ causes string concatenation, so '5' + 3 becomes '53').
'5' - 3 == 2 → true //(- forces number conversion, so '5' - 3 becomes 5 - 3 = 2).
'5' + 3 === 53 → false //('53' is a string, while 53 is a number).
'5' - 3 === 2 → true //('5' - 3 results in 2, which is a number).

//7. Comparing Functions and Objects
javascript
Copy
Edit
console.log(function(){} == function(){});
console.log([] == []);
console.log({} == {});
Explanation:
function(){} == function(){} → false //(functions are reference types, and different functions have different memory addresses).
[] == [] → false //(arrays are objects, and different objects never compare as equal with ==).
{} == {} → false //(same as above—different object instances are never equal).

//8. Tricky Object Coercion
javascript
Copy
Edit
console.log([] + []);
console.log([] == ![]);
Explanation:
[] + [] → '' //(empty arrays convert to empty strings when used with +).
[] == ![] → true //(![] is false, and [] == false coerces [] to an empty string, which is false, so false == false is true).



  