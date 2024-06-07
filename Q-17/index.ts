// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guestList : string [] = ["Sir Kamran Tesori", "Sir Daniyal Nagori", "Sir Usama"];


console.log("Good News! We have found a bigger dinner table, so more space is available. So our new guests are: \n ")

guestList.unshift("Zeeshan");
guestList.splice(2, 0, "Salman");

guestList.push("AR");


for (let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]}: \n you are invited to dinner. \n `)
}

console.log("Unfortunately, the new dinner table won't arrive in time, so we invite only two people for dinner.\n ")

while(guestList.length>2){
   let notInvite = guestList.pop()
   console.log(`Due to space limited we can't invite you to dinner Mr.${notInvite}\n`);
}
console.log(guestList);

for (let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]}: \n you are still invited to dinner. \n `)
}

guestList.pop()
guestList.pop()

console.log(guestList);