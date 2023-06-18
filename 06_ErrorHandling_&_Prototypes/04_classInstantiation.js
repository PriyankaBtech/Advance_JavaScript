/****************************** Class Instantiation ************************************/

// => creating an Object using class is called Class Instantiation

// The Object we create using class is a kind of primitive data type that show:
// 1. Behaviour 
// 2. Charaterstics

// examples
// Syntax : class ObjectName {}

class person {
    setName(name) {
        this.name = name
    }
    setAge(age) {
        this.age = age
    }
    introduce() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} year old`)
    }
}

console.log(person.introduce) // undefined

// Note : for excess the data you need to store the class in a variable

const mydetail = new person()
console.log(mydetail) // person {} => empty object come


// How you excess the data ?
console.log(mydetail.name) // undefined
console.log(mydetail.age) // undefined
console.log(mydetail.introduce) //  [Function: introduce]
console.log(mydetail.introduce()) // Hello my name is undefined and I am undefined year old


// right way 
mydetail.setName("priyanka")
console.log(mydetail.name) // Priyanka

mydetail.setAge(23)
console.log(mydetail.age) // 23

console.log(mydetail.introduce()) // Hello my name is priyanka and I am 23 year old



// A class may also be instantiated as expression.
// Example :

const myClass = class {
    constructor (expression) {
        this.result = expression
    }
}

const myInstance = new myClass(10 + 5)
console.log(myInstance) // myClass { result: 15 }