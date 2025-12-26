//Pure function
// A pure function is a function that, given the same input, will always return the same output and does not have any side effects (it does not modify any external state).


var a = 2;

function addImpure(x) {
    console.log(x + a); // This function is impure because it relies on the external variable 'a'
    a++;
}


addImpure(2); // Always returns 5, but depends on external state


addImpure(2); // Always returns 6, but depends on external state