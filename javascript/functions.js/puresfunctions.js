//Pure function
// A pure function is a function that, given the same input, will always return the same output and does not have any side effects (it does not modify any external state).


var a = 2;

function addImpure(x) {
    console.log(x + a); // This function is impure because it relies on the external variable 'a'
    a++;
}


addImpure(2); // Always returns 5, but depends on external state


addImpure(2); // Always returns 6, but depends on external state

//pure function
function addPure(x, y) {
    return x + y; // This function is pure because it only depends on its input parameters
}

console.log(addPure(2, 3));   //its pure function because it will always return 5 for the same inputs 2 and 3