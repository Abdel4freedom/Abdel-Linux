// REVISION: "MODULO"

// "Normal" maths operations: +, -, *, /

// "Modulo" (%)
// "Modulo is a bit different to the others, and we can use for some specific operations..."

// When you use modulo, you get the result of HOW MANY TIMES B goes into A:
// (A % B)


// *Division
// 10 / 5 = 2
// 10 / 4 = 2.5

// With modulo, we are asking "When you divide number A by number B, WHAT IS LEFT AFTERWARDS?"
// Or... "Once you have divided B into A as many times as possible, what are you left with at the end?"

// *Modulo
// 10 % 5 = 0
// 10 % 4 = 2

// ===================================================================================================================

// *1. Use Case 1 for modulo: is a number odd or even?

let aNumber = 79;

if (aNumber % 2 == 0) {
    console.log(`${aNumber} is an even number!`)
} else {
    console.log(`${aNumber} is an odd number!`)
}


// *2. Use Case 2 for modulo: can we divide one number by another cleanly - leaving nothing at the end?
//                            is one number "divisible" by another?

// "Is 10 divisible by 5?" --> yes
// "Is 10 divisible by 4?" --> no

let secondNumber = 10;
let thirdNumber = 4;

if (secondNumber % thirdNumber == 0) {
    console.log(`Yes, ${secondNumber} is divisible by ${thirdNumber}!`);
} else {
    console.log(`No, ${secondNumber} is not divisible by ${thirdNumber}!`);
}