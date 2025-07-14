//Basic functions

function greet(){
    console.log('Hello Avinash');
} //Function declaration and Defination

greet() //function invoke



// parameters and Arguments

function add(a,b){                 // if we pass here then they are called parameters 
    console.log(a+b);
}

add(2,5);   // if we consider then it is called as arguments

add(4,8)



function multiply(c,d){
     console.log(c*d);
}



multiply(2,6);

multiply(7,9);




function loginusermessage (username){                                        // create  function  to print username
        
    return `${username} just loggedin successfully`         

}


console.log(loginusermessage("Avinash"));