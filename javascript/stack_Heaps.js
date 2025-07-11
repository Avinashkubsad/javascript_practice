//primitive types nad non primiie datatypes



//Stack (primitive datatypes )      Heap (Non primitive datatypes)

//stack 

//in stack whereever  a variable is declared we get a copy of  that variable

// whereas in Heap memory we get the original values 


let avi = "avinash@dj"

let  avi1 = avi
avi1 = "Hellobrother"

console.log(avi);

console.log(avi1);


let car = {
    color :"black",
    model: 2020
}



let car1 = car


car1.model = 2028

console.log(car);

console.log(car1);
console.log(chcek)