// const a = 10;
// let b = 20;
// var c =30;

if(true){
   const a = 10;
let b = 20;
var c =30;
}


 //console.log(a)
   // console.log(b)
    console.log(c);

//*note*   if there is a parent function & child function then child function can access  parent function variables. 
function first(){
  const name ="Avinash"

  function two (){
    const email = "avi@gmail.com"
    console.log(name)
  }
 // console.log(email);
  two()

}


first()