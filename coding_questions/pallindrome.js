1. //using  built in method 
// here we split the string,reverse and join it back  and check directly it with str
// function isPalindrome(str){
//         return str = str.split("").reverse("").join("");
    
// }

// console.log(isPalindrome("madam")); 

function isPalindrome(str){
        const reversed = str.split("").reverse("").join("");
        return str === reversed;
}

console.log(isPalindrome("madam")); 