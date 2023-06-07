// also called "Fat arrow"

// Arrow function can written in different ways depending upon the number of parameters it accepts and the opereation it performs.


// 1. One parameter, and a single return parameter statment
const square = (x) => x * x
let result1 = square(8)
console.log(result1); // 64


// 2. Multiple parameter, and a single return expression
const sumOfTwo = (x, y) => x + y
let result2 = sumOfTwo(10, 50)
console.log(result2); // 60


// 3. Multiple statements in function expression 
const sum = (x, y) => {
    console.log(`Adding ${x} and ${y}`); // Adding 20 and 40
    return x + y
}
let result3 = sum(20, 40)
console.log(result3) // 60


// 4. Returning an Object
const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y})
let result4 = sumAndDifference(15, 25) 
console.log(result4) // { sum: 40, difference: -10 }