// Revision of Object

console.log({} + []) // [object Object]

const obj1 = {
    name: "priyanka",
    id: "12345",
    email: "priya@gmail.com",
    isLoggedIn: true,

    registeredUser: function () {
        console.log(`${this.name} is a registered user`)
        // this means => current object      
    }      
}

const obj2 = {  
    10: "Number10",  
    20: "Number20"  
}

// Symbol => A Symbol is a unique and immutable primitive value and may be used as the key of an Object property

// Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.

//declare => Symbol()
const name = Symbol("key1")
const age = Symbol("key2")

// how use symbol in Object as key
const obj3 = {
    [name]: "Rahul", // [name] => its not array its a syntax of use symbol in object
    [age]: 25
}

console.log(obj3) // { [Symbol(key1)]: 'Rahul', [Symbol(key2)]: 25 }

// how to excess the symbol key value

console.log(obj3.name) // undefined // not excess through dot notation
console.log(obj3[name]) // Rahul


//Object Declaration => both are same
//const obj = new Object()
//const obj = {}

const obj4 = new Object()
obj4.email = "Rahul@gmail.com"
obj4.is = "1010101"
console.log(obj4) // { email: 'Rahul@gmail.com', is: '1010101' }


// Object Methods
const obj5 = {
    name: "priyanka",
    id: "12345",
    email: "priya@gmail.com",
    isLoggedIn: true
}
console.log(obj5) // come old value

//update object
obj5.name = "Rohit"
obj5["isLoggedIn"] = false

console.log(obj5) //come updated value

//let's use methods to excess value
// keys()
console.log(Object.keys(obj5)) // [ 'name', 'id', 'email', 'isLoggedIn' ]

//values()
console.log(Object.values(obj5)) // [ 'Rohit', '12345', 'priya@gmail.com', false ]










