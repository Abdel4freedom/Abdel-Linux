// * Modulo Exercises:

// * 1. Write an ES5 function which checks if a number is odd or even and *returns* a string value of either "Odd" or "Even".
// Note: officially, zero is an even number!
// Console.log your function calls to check if they are giving the expected result.

// Examples:
// console.log(oddOrEven(4)) ➞ "Even"
// console.log(oddOrEven(59)) ➞ "Odd"
// console.log(oddOrEven(0)) ➞ "Even"

function oddOrEven(num) {
    // if (num % 2 == 0) {
    //     return `Even`;
    // } else {
    //     return `Odd`;
    // }

    return (num % 2 == 0 ? `Even` : `Odd`);
}

console.log(oddOrEven(4))  // "Even"
console.log(oddOrEven(59)) // "Odd"
console.log(oddOrEven(0))  // "Even"

// * 2. Write an ES6 ("arrow") function which takes two number arguments.
// Your function should check if the first number is divisible by the second number.
// The function should return either the boolean "true" or the boolean "false" - nothing else!
// Note: you may have to be careful if dividing the first number by 0. Make sure this returns false!

// Examples:

// isDivisible(10, 5) ➞ true (10 can be divided by 5 twice, leaving nothing)
// isDivisible(10, 9) ➞ false (10 doesn't divide by 9 cleanly - it leaves something extra)
// isDivisible(70, 7) ➞ true
// isDivisible(17, 7) ➞ false

// const isDivisible = (num1, num2) => {
//     if (num1 % num2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//                                  This is evaluated to true or false - the result is returned!
const isDivisible = (num1, num2) => (num1 % num2 == 0);

console.log(isDivisible(10, 5));  // ➞ true (10 can be divided by 5 twice, leaving nothing)
console.log(isDivisible(10, 9));  // ➞ false (10 doesn't divide by 9 cleanly - it leaves something extra)
console.log(isDivisible(70, 7));  // ➞ true
console.log(isDivisible(17, 7));  // ➞ false

// * 3. Now try to handle the case where the second argument is "0" in a different way...
// In this case you should return the string "Error: you have tried to divide by 0!"
// It may help to use something we already looked at today...

// Examples:

// isDivisible(10, 5) ➞ true (10 can be divided by 5 twice, leaving nothing)
// isDivisible(10, 9) ➞ false (10 doesn't divide by 9 cleanly - it leaves something extra)
// isDivisible(10, 0) ➞ "Error:  you have tried to divide by 0!"

const isDivisibleWithZero = (num1, num2) => {
    if (num1 == 0 || num2 == 0) {
        return `Error: you have tried to use 0 in your function!`;
    } else if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}
    
// * We could also do the same thing with a chained ternary operator:

//  (num1 == 0 || num2 == 0) 
//     ? `Error!`
//         : (num1 % num2 == 0)
//             ? true
//             : false;

// * Now check our results...

console.log("Here is the new stuff...")
console.log(isDivisibleWithZero(10, 5));    // true
console.log(isDivisibleWithZero(10, 9));    // false
console.log(isDivisibleWithZero(10, 0));    // Error message