// There are 7 types of datatypes 
//String,Number,Boolean,Null ,undefined,Symbol,BigInt


//examples
const a =  "Avinash"
const score = 100
const ScoreValue = 100.0

const LoggedIn = false
const outsidetemp = null  // here null means empty 
let userEmail; // or let userEmail = undefined;


const id =  Symbol("123")
const anotherId = Symbol("123")


console.log(id == anotherId);


// Reference or non primtive datatypes 

//Array,objects,Functions




//Examples of datatypes 

const Names = ["Avinash","karthik"];
console.log(Names)


let MyInfo ={
    Name : "Avinash",
    phNo : 7869654309

}
console.log(MyInfo);


let Myfunction = function(){
    console.log("Hello bro");
}


/*
Notes 
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


*/