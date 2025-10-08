let arr = [2,3,5,7,4,9,8];

const secLargest = (arr) => {
    let largest = 0;
   let  secLargest = 0;
   for( let num of arr) {
    if(num > largest){
        secLargest = largest,
        largest = num
    }
    else if (num > secLargest && num < largest) {
        secLargest = num
    }
   }
   return secLargest
}
console.log(secLargest(arr))