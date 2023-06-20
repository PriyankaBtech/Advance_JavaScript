/***************************** Static Method ********************************/

// static class methods are defined on the class itself
// you cannot  call a static method on an Object but only on an Object class


class Person {
    constructor(n) {
        this.name = n
    }

    sayHello() {
        console.log(`Hello my name is ${this.name}`) // this.keyName
    }

    static custom() {
        console.log(`Calling a static method`)
    }
}

const p = new Person("priyanka")
p.sayHello() // Hello my name is priyanka

//update the value
p.name = "Rahul"
console.log(p.name) // Rahul


// NOTE : p.custom()
//p.custom()
// TypeError: p.custom is not a function 


// => you can only call the static data with class name
Person.custom() // Calling a static method




/************************** Private data Member *******************************/

// secure or private your particular data

class MyClass {
    #price
    constructor(s, d, p) {
        // all data is public means can excessible out the class
        this.subject = s
        this.duration = d
        //this.price = p

        // let's private the price 
        this.#price = p
    }

    saySomthing() {
        console.log(`I Happy to Learn ${this.subject}`)
    }    
}

const learn = new MyClass("Maths", "6 Months", 5000)
console.log(learn) //  MyClass { subject: 'Maths', duration: '6 Months' } 
// => observe rating is not print

console.log(learn.rating) // undefined

