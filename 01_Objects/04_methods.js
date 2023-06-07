/***************************** Object Methods *******************************/

// Inbuild function of objects is called Object Method

/**
# TYPES OF OBJECT METHODS

1. Object.keys()
2. Object.values()
3. Object.entries()
4. Object.assign()
5. Object.freeze()
6. Object.seal()
*/

// Example 
const person = {
    name : "priyanka",
    age : 22,
    place : "delhi",
    number : 888888,
    penCard : true,
}


// Object.keys()

// this method return an Array
// give the key data

const keyResult = Object.keys(person)
console.log(keyResult)// [ 'name', 'age', 'place', 'number', 'penCard' ]

//  with String
console.log(Object.keys("priya")); // [ '0', '1', '2', '3', '4' ]

// with Number
console.log(Object.keys(100)); // []

// with Array
console.log(Object.keys([1, 2, 3, 4])) // [ '0', '1', '2', '3' ]

// with null 
//console.log(Object.keys(null))

// with undefined
//console.log(Object.keys(undefined)) // TypeError: Cannot convert undefined or null to object





// Object.values()

// give the value data
// this method return an Array

const valueResult = Object.values(person)
console.log(valueResult)  // [ 'priyanka', 22, 'delhi', 888888, true ]


//  with String
console.log(Object.values("priya")); // [ 'p', 'r', 'i', 'y', 'a' ]

// with Number
console.log(Object.values(100)); // []

// with Array
console.log(Object.values([1, 2, 3, 4])) // [ 1, 2, 3, 4 ]

// with null and undefined 
//TypeError: Cannot convert undefined or null to object




// Object.entries()

// give the both key-value pair
// this method return an Array

const entriesResult = Object.entries(person)
console.log(entriesResult) // [[]]

console.log(Object.entries(person)[1]) // [ 'age', 22 ]


//  with String
console.log(Object.entries("priya"))

// with Number
console.log(Object.entries(100)) // []

// with Array
console.log(Object.entries([1, 2, 3, 4])) // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ], [ '3', 4 ] ]





// Object.assign()

// this method copy the key-value data in object

console.log(Object.assign({}, person)) // {} => result come inside object

console.log(Object.assign({Language : "Hindi"}, person)) // add new object on top

// Copy the two Object with assign()

const x = {a : 1, b : 2}
const y = {c : 3, d : 3}

console.log(Object.assign(x, y)) // { a: 1, b: 2, c: 3, d: 3 }

//  with String
console.log(Object.assign("priya")) // [String: 'priya']

// with Number
console.log(Object.assign(100)) // [Number: 100]

// with Array
console.log(Object.assign([1, 2, 3, 4])) // [ 1, 2, 3, 4 ]





// Object.freeze()

// this method stop the any change in object
// stop => add, update , delete

Object.freeze(person)

person.collage = "GJU University" // try to update
console.log(person) // no change happen



//  Object.seal()

// this method stop => add and delete but allow to update the object

Object.seal(person)

person.collage = "GJU University"
console.log(person) // not add

person.place = "Mumbai"
console.log(person) // update => delhi replace with Mumbai

















