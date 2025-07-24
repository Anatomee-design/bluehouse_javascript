//Solve these problems:

//#1 Create a one line function that adds adds two parameters
// ans for 1
const add = (a, b) => a + b;
//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//ans for 2
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3); //  returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//ans to 3
const curriedSum = a => b => a + b;
curriedSum(30)(1); //  returns 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//ans to 4
const add5 = curriedSum(5);
add5(12); // returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// ans to 5
const compose = (f, g) => (a) => f(g(a));
compose(add1, add5)(10); // ✅ returns 16


//What are the two elements of a pure function?
// ans to 6
 1. No Side Effects
 2. Same Input Always Gives Same Output