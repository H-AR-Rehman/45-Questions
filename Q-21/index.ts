// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface type {
    Name: string, Age: number, profession: string
}

let OBJ: type  = {Name: `AR`, Age:47, profession: `Teacher`};


console.log(`\n Object containing infromation about me : \n`);
console.log(`My Name is ${OBJ.Name}`);
console.log(`My Age is ${OBJ.Age}`);
console.log(`My profession is ${OBJ.profession}`);