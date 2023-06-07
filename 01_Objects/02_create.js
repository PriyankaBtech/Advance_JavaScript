// HOW CREATE AN OBJECT

// 3 ways to create an Object in javascript

// 1. By object literal
// 2. By creating instance of object directly (using new keyword)
// 3. By using an object constructor (using this keyword)



// 1. object literal

// SYNTAX => const variable_name = {key1 : value1, key2 : value2,}

const person = {
    name : "priyanka",
    age : 22,
    place : "delhi",
    number : 888888,
    penCard : true,
}

console.log(person)



// 2. creating instance of object directly
// new keyword is used

// SYNTAX => const variable_name = new Object()

const detail = new Object()

detail.name = "priyanka"
detail.age = 23
detail.penCard = true
detail.place = "Delhi"

console.log(detail) // { name: 'priyanka', age: 23, penCard: true, place: 'Delhi' }




// 3. using an object constructor

// Here, we create a function with arguments.
// Each argument value can be assigned in the current object by using this keyword.

// this keyword refers to the current object.

function mydetails(name, age, place) {
    this.name = name        
    this.age = age        
    this.place = place      
}

const information = new mydetails("Priyanka", 23, "Delhi")

console.log(information)
// OUTPUT : mydetails {name: 'Priyanka', age: 23, place: 'Delhi'}

console.log(mydetails.age) // undefined




