/****************************** Prototype ***********************************/

// A Prototype is an Object that contains properties and methods
// Every Javascript Object has a prototype property



// prototype

const fruits = ["apple", "mango", "orange"]

const vegetables = ["potato", "tomato", "onion"]


// normal way to work on Object
let garden = {
  flower1 : "Rose",
  flower2 : "Lily",
  flower3 : "sunflower",

  getOneFlower : function() {
    console.log(`I really like ${this.flower3}`)
  }
}

console.log(garden.getOneFlower()) // I really like sunflower
console.log(garden.getOneFlower) // [Function: getOneFlower]



// Direct way to work on Object

Object.prototype.priyanka = function() {
  console.log("Priyanka is present in all Object")
  console.log(typeof priyanka) // function
}
console.log(priyanka()) // priyanka is present in all Object

//console.log(fruits.priyanka()) // Priyanka is present in all Object

//console.log(getOneFlower().Priyanka())


// WITH ARRAY

Array.prototype.heyPriyanka = function () {
    console.log(`Priyanka say Hey to all !`)    
}

console.log(fruits.heyPriyanka()) // Priyanka say Hey to all !
console.log(vegetables.heyPriyanka()) // Priyanka say Hey to all !



// How to add a method and property to the prototype?
function Person(name, age) {
    this.name = name
    this.age = age
}
const mydetail = new Person("priyanka", 23)


// create a new constructor function and add proporty and method to the prototype.
function Person(n) {
    this.name = n
}


// adding a method to the Person prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`)
}

// adding a property to the Person prototype
Person.prototype.age = 0


let person1 = new Person("Priyanka")
person1.sayHello() // "Hello, my name is Priyanka."
console.log(person1.age) // 0



//we can also add methods and properties to an existing object's prototype, including the built-in Array and String objects.
//example of adding a method to the Array and string prototype:

String.prototype.strLength = function(){
    return this.length,
    Array.prototype.arrlength = function(){
    return this.length
}
}

console.log('Priyanka'.strLength())  // [Function (anonymous)]
console.log([1, 2 ,3, 4, 5].arrlength()) // 5




