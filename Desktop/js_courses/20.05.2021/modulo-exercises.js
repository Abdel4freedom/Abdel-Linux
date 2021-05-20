// * Modulo Exercises:

// * 1. Write an ES5 function which checks if a number is odd or even and *returns* a string value of either "Odd" or "Even".
// Note: officially, zero is an even number!
// Console.log your function calls to check if they are giving the expected result.
console.log("============== Q1. ===================================================================================")

function oddOrEven(num) {
    if (num % 2 == 0) {
        return `even`;
    } else {
        return `odd`;
    }

    // OR

    return (num % 2 == 0) ? `Even` : `Odd`;



}


console.log(oddOrEven(4)) // "Even"
console.log(oddOrEven(59)) // "Odd"
console.log(oddOrEven(0)) // "Even"

// * 2. Write an ES6 ("arrow") function which takes two number arguments.
// Your function should check if the first number is divisible by the second number.
// The function should return either the boolean "true" or the boolean "false" - nothing else!
// Note: you may have to be careful if dividing the first number by 0. Make sure this returns false!

console.log("================= Q2. ================================================================================")

const isDivisible = (num1, num2) => {
    if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}

// OR

// const isDivisible = (num1, num2) => (num1 % num2 == 0) ? true : false;

// OR : Shorter 
// const isDivisible = (num1, num2) => (num1 % num2 == 0);



// Examples:

console.log(isDivisible(10, 5)) // true (10 can be divided by 5 twice, leaving nothing)
console.log(isDivisible(10, 9)) // false (10 doesn't divide by 9 cleanly - it leaves something extra)
console.log(isDivisible(70, 7)) // true
console.log(isDivisible(17, 7)) // false

// * 3. Now try to handle the case where the second argument is "0" in a different way...
// In this case you should return the string "Error: you have tried to divide by 0!"
// It may help to use something we already looked at today...

// Examples:

console.log("================= Q3. ================================================================================")

// const isDivisibleWithZero = (num1, num2) => {
//     if (num1 == 0 || num2 == 0) {
//         return `Error: you have tried to divide by 0!`;
//     } else if (num1 % num2 == 0) {
//         return true
//     } else {
//         return false;
//     }
// }

// console.log(isDivisibleWithZero(1, 10));

const isDivisibleWithZero = (num1, num2) => (num1 % num2 == 0 || num2 == 0) ?
    `Error!` :
    (num1 % num2 == 0) ?
    true :
    false;

console.log(isDivisible(10, 5)) // true (10 can be divided by 5 twice, leaving nothing)
console.log(isDivisible(10, 9)) // false (10 doesn't divide by 9 cleanly - it leaves something extra)
console.log(isDivisible(10, 0)) // "Error:  you have tried to divide by 0!");