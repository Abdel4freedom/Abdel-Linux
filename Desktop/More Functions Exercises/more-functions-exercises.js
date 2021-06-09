"use strict"

console.log(`=================
1- Add Up       |
=================
`);

let sumIntFrom1ToN = number => {
    let total = 0;

    for (let i = 1; i <= number; i++) {
        total += i;

    }
    return total;

}

console.log(sumIntFrom1ToN(4));
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));


console.log(`=================
2- String Check |
=================
`);



let isStartOfWord = (New, word) => {
    let x = "New";
    let y = "word";
    if (word.length >= New.length && y.substring(0, x.length) == New) {
        return true;
    } else {
        return false;
    }

}


console.log(isStartOfWord("but", "button"));
console.log(isStartOfWord("tri", "triplet"));
console.log(isStartOfWord("hat", "pastry"));


console.log(`=================
3----------------  
3a. Divisible? |
=================
`);


const isDivisible = (num1, num2) => {
    if (num1 % num2 == 0) {
        return `${num1} is divisible by ${num2}`
    } else {
        return `Oops - ${num1} is not divisible by ${num2}`
    }
}



console.log(`=================
3----------------  
3b. Bonus |
=================
`);

const myTernaryOperator = (num1, num2) => (num1 % num2 == 0) ? `${num1} is divisible by ${num2}` : `Oops - ${num1} is not divisible by ${num2}!`;

console.log(myTernaryOperator(9, 3));
console.log(myTernaryOperator(5, 2));
console.log(myTernaryOperator(20, 10));
console.log(myTernaryOperator(20, 11));

console.log(`======================
4- Count Appearances |
======================
`);

let countAppearances = (string, letter) => {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() == letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countAppearances("this is a string", "i"));
console.log(countAppearances("angry aardvark", "a"));
console.log(countAppearances("Zimbabwe", "z"));

console.log(`==================
5- Pizza Sharing |
==================
`);

const isEqualSlices = (slices, personsName) => (slices % personsName == 0);

console.log(isEqualSlices(11, 5));
console.log(isEqualSlices(8, 2));
console.log(isEqualSlices(8, 3));
console.log(isEqualSlices(24, 4));