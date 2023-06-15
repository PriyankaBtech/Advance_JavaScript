// Array

const myArray = [1, 2, 3, 4, 5]
console.log(typeof myArray) // object

// function

// function testOne(){
//   console.log(arguments)
// }

//testOne(1, 2, 3, 4, 5) // [agruments]  {'0':1, '1':2, '2:3', '3':4, '4':5} => functions are also object
// console.log(typeof testOne) // function


function testOne(){
  console.log(typeof arguments)
}

testOne(1, 2, 3, 4) // object

// conver object to array => array.from()



/******************************* Spread Operator *****************************************/
// spread unpack the all elements from array

const oneArray = [1, 2, 3, 4, 5]
const twoArray = [6, 7, 8, 9, 10]

// Question : how to combine the both arrays in new variable

// 1.  way
// const threeArray = oneArray.concat(twoArray)
// console.log(threeArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 2. way
// const threeArray = [oneArray, twoArray]
// console.log(threeArray) // [ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] ] // hard excess the element


// 3. effective and most used way
const threeArray = [...oneArray, ...twoArray]
//console.log(threeArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// ... the syntax are same of rest and spread operator , the use and how the impliment define it rest or spread.

// ...oneArray = 1, 2, 3, 4, 5 => spread out all its element in new array, become an indiviual element


// ++++++++++++++++++++++++++ EXAMPLES +++++++++++++++++++++++++++++++++++++++++++++++

const names = ["apple", "mango", "Orange", "banana"]
const newNames = ["cherry", ...names, "stawberry"]
console.log(newNames)


const myName = "priyanka"
console.log([...myName])
