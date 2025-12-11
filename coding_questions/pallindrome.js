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


//2. without using built in method
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(isPalindrome("madam"));



// we can use left and right pointer also 
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  } 

  return true;
}
