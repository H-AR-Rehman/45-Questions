// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// let Name = "Sir Kamran Tesori";
// for (let i=0 ; i < 5 ; i++){
//     console.log(Name)
// }


// let Name = "Sir Kamran Tesori";
// let i = 0
// while ( i <=5) {
//     console.log(Name);
//     i++;
// }



let guestList : string [] = ["Sir Kamran Tesori", "Sir Daniyal Nagori", "Sir Usama"];
for ( let i = 0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]} : \n you are invited to dinner! \n`)
}
