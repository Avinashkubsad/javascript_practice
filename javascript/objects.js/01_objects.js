// objects can eclared in 2 types  
//   * literals.    * constructor

//Declare a Symbol and pass through the object 
const mysmb = Symbol("mykey10");

const jsuser = {
    name : "Avinash",
    age:18,
   // [mysmb]:"key05",     //if this is  used then o/p will be  [Symbol(mykey10)]: 'key05'
    mysmb:"key05",          // if this i suse dthen o/p  will be  mysmb: 'key05',
    isLoggedIn : false,
    city : "banglore",
    email : "avinashkubsad@gmail.com"

}


console.log(jsuser)
// console.log(jsuser.name)
// console.log(jsuser["name"]);
console.log(typeof mysmb)

console.log("age",jsuser.age)
Object.freeze(jsuser)                  /// freeze i sused then no chnages can be made in the objects

jsuser.age =30
console.log("age",jsuser.age)