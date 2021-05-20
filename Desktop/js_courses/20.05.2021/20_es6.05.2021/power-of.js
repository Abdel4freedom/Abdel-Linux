// Math Object - "POWER OF"

// What is "power of"?

// 3 to the power of 2 => 3 * 3 = 9
// 3 to the power of 3 => 3 * 3 * 3 = 27

// 9 to the power of 6 ==> 9 * 9 * 9 * 9 * 9 * 9 = 

//          "What is 3 to the power of 2?"
let threeToPowerOf2 = 3 ** 2;

let bigPowerOf = 9 ** 6;

console.log(threeToPowerOf2);
console.log(bigPowerOf); // What is 9 to the power of 6?
// 531,441!


// =============================================================================================================================

// * Math object - "power of" exercise: 

// * 1. Try to console.log the following statements, using the Math object to get the final result:

// 1. 3 to the power of 2 (3*3) = 9
// 2. 3 to the power of 3 (3*3*3) = 27
// 3. 3 to the power of 4 (3*3*3*3) = 81.

let x = 3 ** 2;
let y = 3 ** 3;
let z = 3 ** 4;


console.log(x, y, z);


// * 2. Now try to write an ES5 function called pow(x,n) that returns number x to the power of n. 
// Or, in other words, a function that takes any number, multiplies it by itself n times, and returns the result.
//     E.g.
//     pow(3, 2) = 3 * 3 = 9
//     pow(3, 3) = 3 * 3 * 3 = 27
//     pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, n) {
    return x ** n;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));


// * 3. Finally, convert your ES5 function to an ES6 function, and test it again with the above examples to make sure it still works!