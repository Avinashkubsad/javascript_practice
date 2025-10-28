// squarred numbers
var num = [1,2,3,4];
var squarredNumbers = []
for(var i=0;i<num.length;i++){
    squarredNumbers.push(num[i] *num[i]);
    console.log(squarredNumbers);
}


const colors ={
    first : "blue",                        
    second : "red",
    third : "green"
}


for(let color in colors){
    console.log(colors[color]);
}

for(let color in colors){
    console.log(color+ "->" +colors[color]);
}


const fruits = ["apple","mango","banana","grapes"];

console.log("using for ..of")
for (let  fruit of fruits){
    console.log(fruits[fruit]);
}
for (let  fruit in fruits){
    //console.log(fruits[fruit]);
}

for (let  fruit in fruits){
    //console.log(fruit +"->"+fruits[fruit]);
}

//const arr = [1,2,3,4];

// function fruit(){
//     console.log(name);
//     //console.log(price);

//     var name = "apple";
//     let price = 30;
// }

// fruit();


