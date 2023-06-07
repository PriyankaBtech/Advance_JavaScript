/************** Stack and Heap Memory **************/

// In traditional languages : developers or programmers are fully responsible for maintaining the memory, and it was one the difficult task for developers.

// In Modern languages : todays languages improves the memory system, now a days you can easily reserved and free the memory effective way.

// Memory in JS : stack memory and heap memory.

/*
# Stack
- Primitive datatypes are store in stack memory
- stack memory give the copy of the original store data
*/

let myName = "priyanka"

let anotherName = myName
anotherName = "Developer"

console.log(myName) // priyanka
console.log(anotherName); // Developer

// stack memory only change the copy value not the original value.