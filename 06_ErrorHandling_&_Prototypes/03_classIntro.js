/**************************** Classes ***********************************/

// NOTE : dont compare javascript classes to the other programming language class.

// Classes : The common blueprint we use to developed real life entity is called Classes


class Product {
    // properties behaviour
    // behaviour -> functions -> member functions
    // properties -> variables -> data members

    name
    price
    rating
    // no need to declare with let and const

    display() { // no need to write function keyword
        console.log("displaying the current products")
    }
}


const printProduct = new Product()
console.log(printProduct) 
// Product { name: undefined, price: undefined, rating: undefined }


printProduct.display()
// displaying the current products


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



class Animal {
    makeSound() {
        console.log("Animal sound")
    }
} 

const myAnimal = new Animal()
//console.log(myAnimal) // Animal {}

// properties and method can be accessed using dot notation
myAnimal.makeSound() // Animal sound




// Demonstrate an example of class definition -> Car class is defined.
class Car {
    honk() {
        console.log("Beep Beep!")    
    }
}
const myCar = new Car()
console.log(myCar) // Car {}

myCar.honk() //Beep Beep!


// let's try add some data in the same newCar class object


class newCar {
    setMake (makes) {
        this.makes = makes
    }
    setModel (model) {
        this.model = model
    }
    setYear (year) {
        this. year = year
    }

    honk() {
        console.log("Beep Beep!")    
    }
}


const carDetails = new newCar()
console.log(carDetails) // newCar {}


carDetails.setMake("Toyota")
carDetails.setModel("Camry")
carDetails.setYear(2020)

// excess data through dot operator
console.log(carDetails.makes) // Toyota
console.log(carDetails.model) // Camry
console.log(carDetails.year) // 2020

carDetails.honk() // Beep Beep!




