// In js the for in loop allows you to loop through the properties of an objects
//The statement of the code found within the loop body will be executed once for each property of the object

var colors ={
    primary :"red",
    secondary:"blue",
    ternary:"black"
}

for (var color in colors){
    console.log(color +" -> "+ colors[color])
}



//for arrays

var colorsArray=["Orange","Pink","green"]

for (color in colorsArray){
    console.log(color+ "->"+ colorsArray[color])
}