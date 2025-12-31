// // the below is using function 
// function ReverseString(str){
//     return str.split('').reverse('').join('');
// }

// console.log(ReverseString("Avinash"))


// the below is usng spread operator 
// function RevereseString (str) {
//     return [...str].reverse().join();
// }

// console.log(RevereseString("Avinash")
// )


// function reverseString(str){
//     if(str === '') return ""
//     return reverseString(str.substr(1)) + str[0];
// }

// console.log(reverseString("pawan"));



// function reverseString(str){
//     let reversed ="";
//     for(let i=str.length -1; i>=0; i--) {
//          reversed +=str[i];
//     }

//     return reversed;
// }

// console.log(reverseString("pradeep"));



// function isPalindrome(str){
//     return str = str.split('').reverse("").join("");
// }

// console.log(isPalindrome("madam"));



// function isPalindrome(str){
//     let i = 0; j=str.length-1;

//     while(i<j){
//         if(str[i] !==str[j]){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }




const arr = [1,2,[1,2,3,4],3,4,[1,2,3,4],4,5];

const result = arr.flat(Infinity);

console.log(result);