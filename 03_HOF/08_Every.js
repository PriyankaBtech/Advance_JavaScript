/****************************** Every **********************************/

// Syntax
//array.every(function(currentValue, currentIndex, array))

// This method check the all element in the Array same Datatype of not
// If all are same will return True, if not same then return False

let arr = ["PW Skills", "HTML", "CSS", "JavaScript"]

// Apply every method
let result = arr.every((curr) => typeof curr == "string")
console.log(result) // true


// add one number element in array 
let arr1 = ["PW Skills", "HTML", "CSS", "JavaScript", 500]

let result1 = arr1.every((curr) => typeof curr == "string")
console.log(result1) // false






//check if all values are numbers

const gameScore = [200, 100, 310, 300, 250, 150]


console.log(typeof gameScore[1]) // number => datatype return in string format

const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
//const gameScoreCheck = gameScore.every((v) => typeof v === Number) => arror
//const gameScoreCheck = gameScore.every((v) => typeof v === number) => error

console.log("check: ", gameScoreCheck)