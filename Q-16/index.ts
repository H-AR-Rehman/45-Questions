//16.  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let guestList : string [] = ["Sir Kamran Tesori", "Sir Daniyal Nagori", "Sir Usama"];

for( let j=0; j < guestList.length; j++){
    console.log(` Dear ${guestList[j]} : \n you are invited to dinner. \n`);
}


console.log("Good News! We have found a bigger dinner table, so more space is available. So our new guests are: \n ")

guestList.unshift("Zeeshan");
guestList.splice(2, 0, "Salman");
guestList.push("AR");

for (let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]}: \n you are invited to dinner. \n `)
}