//The for of statement creates a loop iterating over iterable objects,
// including: built-in String,Array, array-like objects like NodeList and also map and set



//Syntax

// var scores = [ 10 , 40 , 50 ]

// for(var score of scores){
//     console.log(score)
// }



// There is a method in which we can use entries to print index also


// let colors =['Red','Yellow','Pink']

// for (var [index,color] of colors.entries()){
//     console.log(index + '-> '+ color)
// }


// //for Strings to print each character

var str = 'Avinash'

for (c of str){
    console.log(c)
}