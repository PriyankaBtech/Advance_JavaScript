/************************ more about class ********************************/

class Product {
    // properties -> variables -> data members
    name
    price
    rating

    // behaviour -> function -> member function
    display() { 
        console.log("displaying the current products")
    }
}

const p = new Product() // new -> create an empty plain Object
// Product() -> in the above we are calling constructor method

// NOTE : every class contain the default constructor



/**************************** class constructor ***********************************/

// What : Whenever you create object within a class, there is a particular method constructor 

// The constructor() is two types : 1. Default , 1. Create by Own

// only one constructor is use per class, otherwise give => SyntaxError: A class may only have one constructor

// Syntax : constructor(arg0, arg1, /* ... ,*/ argN) {}


// Example

class Introduction {
    // # you can also write the below property inside constructor
    // name 
    // age 
    // place
    
    // also pass the agruments
    // one's you declare the constructor then default constructor stop
    constructor(n, a, p) {
         // name = n  -> wrong way
         this.name = n
         this.age = a
         this.place = p
        console.log("Calling the constructor")

        // return 10  => if you are returning primitive then it will be avoided in consturctor
        // return {x : 10, y : 20}  => if you are returning non primitive then it will be return

        
    } 
    
    display() {
        console.log("this refers to", this)
        console.log("display the details !", this.name, this.age, this.place)
    }
}

const myDetails = new Introduction("priyanka", 23 , "delhi")
// above constructor call

console.log(myDetails) // Introduction { name: 'priyanka', age: 23, place: 'delhi' }

myDetails.display()
// this refers to Introduction { name: 'priyanka', age: 23, place: 'delhi' }

// display the details ! priyanka 23 delhi





/************** Default values with class onstructor **************************/

// Just like regular functions, constructor function properties may have a default value too.


class person {
    constructor(
        firstName = "Priyanka",
        lastName = "Kaushal",
        city = "Delhi",
        age = 23
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age    
    }
}

const person1 = new person()
const person2 = new person("Rahul", "sharma", "Mumbai", 26)


console.log(person1) //  it will take the default value
console.log(person2) // it will take the value you provide 




// NOTE :class keyword inroduce in ES6, but what happen before when the class keyword was not in the market ?

// then "function contructor" come in the picture




