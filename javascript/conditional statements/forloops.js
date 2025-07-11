// loops are the statements that we can use to control a flow of the program to do some repitative task


var a = "Hello Avinash"

for(var i=0;i<10;i++){
    console.log(a);
}


// conside you have an array so that yu have to maultiple each number of that elemts

var num = [2,3,4,5,6,7,8,9]

 var squaredNumbers = []

for(var i=0;i<num.length;i++){
    squaredNumbers.push(num[i]* num[i]);
}


console.log(squaredNumbers);