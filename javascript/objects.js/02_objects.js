//const Bumblee = new Object()          //we can declare objects like this  it is singleton object


const Bumblee2 = {                       // we can declare like this also  it is not/non singleton object
    id :"011",
    name:"Avinash",
    isLoggedIn:false,
}              
//console.log(Bumblee2);
// console.log(Bumblee);



const anotheruser = {
    email : "user@gmail.com",
    name :{
        fullname:{
            firstname:"avinash",
            lastname:"kubsad"
        }
    }
}

console.log(anotheruser.name?.fullname.firstname)    //?? this is called optional chaining   it is used incase  whther does it exists or not
console.log(anotheruser.name.fullname.firstname)




const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}



//const obj7 = Object.assign({},obj1,obj2);   //good practice

const obj7 = {...obj1,...obj2}
console.log(obj7)


console.log(Bumblee2)
console.log(Object.keys(Bumblee2))   //keys to print keys
console.log(Object.values(Bumblee2))   // values to print values
console.log(Object.entries(Bumblee2));    //entries is used to print both keys &  values



console.log(Object.hasOwnProperty('isLoggedIn'))     // to check whether property is there or not



//destructuring in objects

