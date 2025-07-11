// what is  function expersion 


var add = function(a,b){
    console.log(a+b);
}

add(2,5);


var add = function(a,b){
    return a+b
}
var sum = add

var result = sum(3,7)

console.log(result)