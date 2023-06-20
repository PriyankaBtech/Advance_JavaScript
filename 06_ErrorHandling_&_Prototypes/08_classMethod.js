/*************************** Class Method ****************************/

// class methods are function that belong to a class and can be called on instance of that class

// In class method, always add a constructor() method before adding any number of methods.


/* SYNTAX :

class ClassName {
    constructor() {}
    method1() {}
    method2() {}
   // body
    method() {}
} 
*/

// Example

class Person {
    constructor(n) {
        this.name = n
    }

    sayHello() {
        console.log(`Hello my name is ${this.name}`) // this.keyName
    }
}

const p = new Person("priyanka")
console.log(p) // Person { name: 'priyanka' }

p.sayHello() // Hello my name is priyanka

