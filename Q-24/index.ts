// 24. More Conditional Tests You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following


let str1 = "AR";
let str2 = "Rehman"; 
let num1 = 5
let num2 = 10
let Arr = [1,2,3,4,5];

// • Tests for equality and inequality with strings
console.log("test for equality & inequality with string");
console.log(str1 === `AR`);
console.log(str1 === str2);


// • Tests using the lower case function

console.log( "\n test using lower case function : ");
console.log(str1.toLowerCase () === `AR`);
console.log(str2.toUpperCase () !== `Rehman` );


// • Numerical tests 
console.log( "\n numerical test: ");
console.log( 1 < 2);
console.log( num1 >= num2);
console.log( num1 === 5);
console.log( num2 !== 10);


// • Tests using and and or operators
console.log("\n test using `and` `or` operators: ");
console.log((num1 < 10) && (num2 > 5 ));
console.log((num1 < 3 ) || (num2 > 15 ));


// • Test whether an item is in a array
console.log("\n whether an item is in a array: ")
console.log( Arr.includes(3));
console.log( Arr.includes(6));

// • Test whether an item is not in a array
console.log( "Test whether an item is not in a array: " );
console.log(!Arr.includes(6));
console.log(!Arr.includes(3));


