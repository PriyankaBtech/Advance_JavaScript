/****************************** Map ******************************/

// The Map object holds key-value pairs like Object

// declare Map()
const printMap = new Map()

console.log(printMap) // Map(0) {}
console.log(printMap.size) // 0

// methods apply on Map => size, clear, delete, entries, forEach, get, has, keys, set, values

const newMap = new Map()

newMap.set('a', 1)
newMap.set('b', 2)
newMap.set('c', 3)

console.log(newMap.get('a')) // 1

newMap.set('a', 97)

console.log(newMap.get('a')) // 97

console.log(newMap.size) // 3

newMap.delete('b')

console.log(newMap.size) //2



// Map with Array Object

let students = [
   [1, "priyanka"],
   [2, "Rahul"],
   [3, "Chinki"],
   [4, "Pinki"],
   [5, "Risabh"]
]

// logic build
// students.map((arrayValue) => map.Set(arrayValue[0], arrayValue[1]))


const arrayMap = new Map(students)
console.log(arrayMap.get(1)) // priyanka

console.log(Array.from(arrayMap)) // exactly the same as Array

console.log(Array.from(arrayMap.keys())) // [ 1, 2, 3, 4, 5 ]



// Using NaN as Map keys

const numberMap = new Map()
numberMap.set(NaN, "not a number")
console.log(numberMap) // Map(1) { NaN => 'not a number' }

numberMap.get(NaN) // "not a number"

const otherNaN = Number("priyanka")
numberMap.get(otherNaN) // "not a number"



// Iterating Map with forEach()

const myMap = new Map()

myMap.set(0, "zero")
myMap.set(1, "one")

myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`)
})
// 0 = zero
// 1 = one



// Merging Map

const animals = new Map([
    [1, "dog"],
    [2, "cat"],
    [3, "cow"],
  ])
  
  const birds = new Map([
    [1, "pigeon"],
    [2, "parret"],
  ])
 
  // Spread syntax  converts a Map to an Array
  const merged = new Map([...animals, ...birds])

  console.log(merged) // Map(3) { 1 => 'pigeon', 2 => 'parret', 3 => 'cow' }
  
  console.log(merged.get(1)) // pigeon
  console.log(merged.get(2)) // parret
  console.log(merged.get(3)) // cow



// cloning the Map

const original = new Map([[1, "one"]])

const clone = new Map(original)

console.log(clone.get(1)) // one
console.log(original === clone) // false (useful for shallow comparison)

  
  
