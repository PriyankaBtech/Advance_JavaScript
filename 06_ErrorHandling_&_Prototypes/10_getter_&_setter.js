/****************************** Getter and Setter **********************************/


//  #Getter

// it is special type of function
// used to get/ retrieve the data from an Object

const person = {
    firstName : "Priyanka",
    LastName : "kaushal",

    get fullName () {
        console.log(`My name is ${this.firstName} ${this.LastName}`)
    }
}

console.log(person.fullName) // My name is Priyanka kaushal



// #Setter

// it is special type of function
// used to set the value of an Object


const anotherPerson = {
    firstName : "Priyanka",
    lastName : "Kaushal", 

    set fullName (name) { 
        const parts = name.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}
console.log(anotherPerson.firstName) // Priyanka
console.log(anotherPerson.lastName) // Kaushal

console.log(anotherPerson.fullName) // undefined
//console.log(anotherPerson.fullName()) // TypeError: anotherPerson.fullName is not a function

anotherPerson.fullName = "Rahul sharma"

console.log(anotherPerson.firstName) // rahul 
console.log(anotherPerson.lastName) // sharma

// Note : rahul sharma set in result

// you cannot directly read the value
// It's important to note that setters should not have any effects effects beyond setting the value of the corresponding property.

// They should not return any values or perform any other operations beyond updating the object state.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// advance Example


// Complex number

class complexNumber {

    #real
    #imag
    constructor(r, i) {
        this.#real = r
        this.#imag = i        
    }

    display () {
        console.log(this.#real, " + i", this.#imag )
    }

    get real() {
        return this.#real
    }

    get imag() {
        return this.#imag
    }

    addComplexNumber (c) {
        this.#real += c.real
        this.#imag += c.imag
    }
}

const c1 = new complexNumber(2, 3)
console.log(c1) // complexNumber {}
 
c1.display() // 2  + i 3


const c2 = new complexNumber(4, 5)

c1.addComplexNumber(c2)

c1.display() // 6  + i 8

















