/**************************** set() *********************************/

// A value in the set may only occur once, it is unique in the set's collection.
// add, clean, delete, entries, forEach, has, key, size, values

const mySet = new Set()

console.log(mySet) // Set(0) {}

console.log(mySet.size) // 0

const myArray = [1, 2, 3, 4, 5, 6, 7]

// const newSet = new Set(myArray)  // Set(7) { 1, 2, 3, 4, 5, 6, 7 }
const newSet = new Set([...myArray])  // Set(7) { 1, 2, 3, 4, 5, 6, 7 }
console.log(newSet) 


// add()
newSet.add(6)
console.log(newSet) // not add because 6 is already there and only unique element add

newSet.add(10)
console.log(newSet) // Set(8) { 1, 2, 3, 4, 5, 6, 7, 10 }

newSet.add({a:1, b:2})
console.log(newSet) // Set(9) { 1, 2, 3, 4, 5, 6, 7, 10, { a: 1, b: 2 } }



// has()
// asked question give result in Boolean

console.log(newSet.has(5)) // true


// delete()
newSet.delete(5)
console.log(newSet) // removes 5 from the set


// clear()
// clear all values 

newSet.clear() 
newSet.clear(5) // if you give any value still its delete the all value => Set(0) {}
console.log(newSet) // Set(0) {}



// Use to remove duplicate elements from an array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]

console.log([...new Set(numbers)]) // [2, 3, 4, 5, 6, 7, 32]



// set relation with String
const text = "India";

const textSet = new Set(text); // Set(5) {'I', 'n', 'd', 'i', 'a'}
textSet.size // 5

// case sensitive & duplicate omission
new Set("Firefox") // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
new Set("firefox")// Set(6) { "f", "i", "r", "e", "o", "x" }




// little advance examples

const items = [1, 3, 5, "priyanka", {a : 1, b : 2}]

const itemsSet = new Set(items)
console.log(itemsSet) // Set(5) { 1, 3, 5, 'priyanka', { a: 1, b: 2 } }

for (const elements of items) {
    console.log(elements)    
}


// set difference 

function setDifference(setA, setB){
   return new Set([...setA].filter(element => !setB.has(element)))
}





 




