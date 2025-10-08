// sum of 2 numbers
// const num1 = 10;
// const num2 = 20;
// const sum = num1+num2;
// console.log(sum);

// to find area in es5
// const area =(length,breadth)=>
//     (length*breadth)
// console.log(area(2,4))


// area using es6
// function area(length,breadth){
//     return(length*breadth)
// }
// console.log(area(3,5))


// to check number is even o 
// function even(num){
//     if (num%2==0)
//         return (num  + " is even")
//     else;
//         return ("number is not even")

// }
// console.log(even(3))

function even_odd(arr){
    for (i=0;i<arr.length;i++)

        if(i%2==0)
            console.log("number is even")
        else
            console.log("number is odd")
}           
console.log(even_odd([2,3,4,5]))

// call back function example
// function modify_array(arr,callback) {
//     arr.push(100);
//     callback();
// }
// var arr = [1,2,3,4,5];

// modify_array(arr,function(){
//     console.log("the modified array is", arr);
// )};
//  to print even numbers from 1to 10

// function even(arr){
//     for (i=0;i<length.arr;i++)
//         if(i%2==0)
//         return i
// }
    
// console.log([1,2,3,4,5,6,7,8,9,10]);

