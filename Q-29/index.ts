// 29.  avorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!




let favorite_fruits: string[] = ["grapes", "apple", "mango"];
// favorite_fruits === grapes

if (favorite_fruits.includes(`grapes`)){
    console.log("\n You really like grapes! ");
}

if (favorite_fruits.includes(`apple`)){
    console.log("\n You really like apple! ");
}

if (favorite_fruits.includes(`mango`)){
    console.log("\n You really like mango! ");
}

if (favorite_fruits.includes(`strawberry`)){
    console.log(" You really don't like strawberry!");
}

if (favorite_fruits.includes(`orange`)){
    console.log(" You really don't like orange!");
}