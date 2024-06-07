"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["Sir Kamran Tesori", "Sir Daniyal Nagori", "Sir Usama"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} : \n you are invited to dinner! \n`);
}
console.log(`"unfortunately ${guestList[2]}, can't come to the dinner.`);
guestList[2] = "Sir Zia";
console.log("\n New list of invitation : \n");
for (let j = 0; j < guestList.length; j++) {
    console.log(` Dear ${guestList[j]} : \n you are invited to dinner. \n`);
}
