//Arrays provide you an ordered collectio of data

var arr = [12,"Avinash",true, 30.0]

//console.log(arr);


// Acessing the array/elements

var a = arr[1]
//console.log(a)


// Replacing the elements of array using indexing

arr[1] = "Karthik"

//console.log(arr);


// To find the length of the array 

//console.log( "The length of the array is", arr.length);



//inbuilt method in javascript
//1. pop method
//2. push method
//3. shift method
//4. unshift method



arr2 = [12, 47, 53, 58]


arr2.pop()

console.log("popped array/funtion" , arr2);


arr2.push(100);

console.group("pushed array ", arr2); 


var c = arr.push()
//console.log(c);


// shift  method
 var d = arr2.shift();
 //console.log(d);


 console.log("shift method", arr2);


 //unshift method

 var e = arr2.unshift(200);

 //console.log("unshifted method",e );
 console.log("unshift method", arr2);