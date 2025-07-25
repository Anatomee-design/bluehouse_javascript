// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = test;
//answers for 1
let a = 'test';
const b = true;
let c = 789;
a = 'test';



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;
//answers for 2
const { firstName, lastName, age, eyeColor } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = { 
  a: a,
  b: b,
  c: c
};
//anwers for 3
const okObj = { a, b, c };


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// answers for 4
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
// anwers for 5
const isValidAge = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"
// answer for 6
const sym = Symbol(" first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
//answer for 7
const whereAmI = (username, location) => 
  (username && location) ? "I am not lost" : "I am totally lost!";
