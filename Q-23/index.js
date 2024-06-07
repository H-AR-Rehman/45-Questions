"use strict";
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = `subaru`;
console.log("\n ----> five test evaluate to true: ");
// test no.1 
console.log(" Is car == `subaru ` ? I predict true.");
console.log(car == `subaru`);
// test no. 2
console.log(" Is car !== `KIA ` ? I predict true.");
console.log(car !== `KIA`);
// test no. 3
console.log(" Is the length of car > 4? ? I predict true.");
console.log(car.length > 4);
// test no. 4
console.log(" Is the length of car <= 6? ? I predict true.");
console.log(car.length <= 6);
// test no. 5
console.log(" Is car name start with `s` ? ? I predict true.");
console.log(car.startsWith(`s`));
console.log("\n ----> five test evaluate to false: ");
// test no. 1
console.log(" Is car == `Honda` ? I predict false.");
console.log(car === `Honda`);
// test no.2 
console.log(" Is car upperCase ? I predict false.");
console.log(car.toUpperCase() === car);
// test no. 3
console.log(" Is car === `Subaru` ? I predict false.");
console.log(car === `Subaru`);
// test no. 4
console.log(" Is car === `Audi` ? I predict false.");
console.log(car === `Audi`);
// test no. 5
console.log(" Is the length of car === 7 ? I predict false.");
console.log(car.length === 7);
