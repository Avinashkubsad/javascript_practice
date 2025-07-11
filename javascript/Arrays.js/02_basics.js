Team1 = ["RCB" , "CSK" , "RR"];
Team2 = ["MI","LSG", "KKR"]


//Team1.push(Team2);    // hre if we use the push methods the considers it as whole array 

//console.log(Team1);

const Team3 = Team1.concat(Team2)

///console.log(Team3)



const new_Team = [...Team1,...Team2]   // spread operator works same as concat operator

//console.log(new_Team)



const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]


const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);
console.log("real_another_array",real_another_array)




// Take a look into  isArray,  array.from, array.in