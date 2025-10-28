const arr = [1, 3 , 4, 6]

// console.log(arr);
// console.log(arr[0])
 console.log(arr[0])


const arr1 = new Array(1,2,3,4,5,9)

console.log(arr1[3])


arr1.push(5);  // push method add the element at the end of the array 
arr1.push(6);  
arr1.push(7);  



arr1.pop();   // pop method removes the lastelement in the array




arr1.unshift(1);   // unshift methods adds element in the beginning of the array 
arr1.unshift(2);

arr1.shift(); // shift methods removes the element in the beginning of te array
console.log(arr1)

console.log(arr1.includes(1))  // includes method  to find out whether it is present or not
console.log(arr1.indexOf(6))    // indexof method which tells at which place it is 





const newArray = arr1.join()    // this join method  prints same values but converts it to string

console.log(typeof(newArray));
console.log(newArray);



//slice and splice
//while using slice it does not include the range end
//while using splice it does include the range end                  **slice & splice see the diffreence once again**