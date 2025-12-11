// // the below is using function 
// function ReverseString(str){
//     return str.split('').reverse('').join('');
// }

// console.log(ReverseString("Avinash"))


// the below is usng spread operator 
// function RevereseString (str){
//     return [...str].reverse().join();
// }

// console.log(RevereseString("Avinash")
// )


function reverseString(str){
    if(str === '') return ""
    return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("Avinash"));