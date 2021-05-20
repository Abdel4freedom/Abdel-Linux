// REVISION: "IF - ELSE" STATEMENTS

// A "conditional" statement
//      - If one thing is true, do something
//      - Otherwise, do something else

// Another way of writing the same thing...

// IF one thing is true, do something
// ELSE, do something else

// * How do we decide which thing we want to do? *

// Conditional operators:
//      a > b --> "if a is greater than b..."
//      a < b --> "if a is less than b..."
//      a >= b --> "if a is greater than OR EQUAL to b..."
//      a == b --> "if a is equal to b..." --> LOOSE
//      a === b --> "if a is equal to b..." --> STRICT

console.log("1" == 1);      // true
console.log("1" === 1);     // false

// Logical operators

//      (a > b) && (c <= d) --> "(Is a greater than b) AND (is c less than or equal to d)?"
//      (a > b) || (c <= d) --> "(Is a greater than b) OR (is c less than or equal to d)?"

// AND example:
    // "Is Jamie in Leipzig AND is Germany in Europe?"  --> true
    // "Is Jamie in Leipzig AND is Germany in Africa?"  --> false

// OR example:
    // "Is Jamie in Leipzig OR is Germany in Africa?"  --> true
    // "Is Jamie in Berlin OR is Germany in Africa?"  --> false

// Don't forget "!", which means NOT

//        true                        false
//          ^                           ^
// "Is Jamie in Leipzig" --> "Is Jamie NOT in Leipzig"
// "Is Jamie in Leipzig"     !"Is Jamie in Leipzig"

// =====================================================================================================================

// If...
// Else if...
// Else...

let weather = "cloudy";

if (weather == "sunny") {
    console.log("Don't forget sunscreen!");
} else if (weather == "rainy") {
    console.log("Don't forget an umbrella!");
} else if (weather == "cloudy") {
    console.log("Don't forget to put on a jacket!");
} else {
    console.log("I'm out of ideas!");
}

// Don't forget to make sure you are aware of *cases* when checking string values!

let gender = "Male";

if (gender.toLowerCase() == "male") {
    console.log("Male!")
} else {
    console.log("Not male!")
}



