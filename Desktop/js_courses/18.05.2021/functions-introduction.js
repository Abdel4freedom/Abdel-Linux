// 1. Our first example function...
// Function declaration...e


//                Parameters ("placeholders")
function myFunction(p1, p2) {
    return p1 * p2; // The function "myFunction" will return the result of p1 * p2
}


// using our function

//          arguments  ("real values")
let newProduct = myFunction(3, 4); // 3 * 4 = 12
console.log(newProduct);

// 2. We do not need parameters, if they don't make sense for what you are doing...



function sayHello() {
    console.log("Hello world!");
}


// calling a function five times,

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

//-----------------------------------------------------------------------------------------------

function oddOrEven(num) {
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

let firstTry = oddOrEven(44); // firstTry = "even"
console.log(`The number 44 is ${firstTry}`);
let secondTry = oddOrEven(43); // secondTry = "odd"
console.log(`The number 43 is ${secondTry}`);


console.log(`Here is the result of a hard calculation (53*472): ${myFunction(53, 472)}`);

//-----------------------------------------------------------------------------------------------

// Functions are the main "building blocks" of a program.
// The allowe code to be called many times without having to write it more than once.


function printMessage() {
    console.log(`I am a function`);
}

printMessage();

//-----------------------------------------------------------------------------------------------

let myName = "Abdel";


// Declaring our function to print "Hello Simo"
function printAnotherMessage() {
    myName = "Simo";
    console.log(`Hello ${myName}`);

}

console.log(myName); // stays as "Abdel"
printAnotherMessage(); // changes to "Simo" - but only inside the function, not outside!


// Changing a global variable by ASSIGNING a new value...

function changeNameToSimo() {
    return "Simo";
}

myName = changeNameToSimo();


console.log(myName); // change name to "Simo"

//=======================================================================================================

// A word on naming functions...

// Functions are ACTIONS - you use them to do something (or more than one thing!)

// So usually you would use a verb in your function name.
// The function name should be short, and as accurate to what the function does as possible.

// It is usual to start the function name with a verb to describe what the function does.
// get...
// calc...
// create...
// check...

// Good function names could include:
// getResult(), calcProduct(), showFirstName()...


//Less good function names could include:
// myFunction(), function7(), ......

//================================================================================================

// Function with one parameter,

function squareNumber(number) {
    return num * number;
}

let fourSquared = squareNumber(4);

console.log(`Four squared is: ${fourSquared}`);

// Declaring a function without a parameter,
function sayPing() {
    console.log(`Ping!`)
}

sayPing();

// ================================================================================================

let cubeNumber = function(number) {
    return num * num * num;
}

console.log(``)