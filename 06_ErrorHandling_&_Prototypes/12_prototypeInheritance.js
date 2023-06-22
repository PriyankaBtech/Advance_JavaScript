/**************************** Prototype Inheritance ********************************/


// prototype inheritance => refers to the ability of an inherit properties and methods from its prototype.


const user = {
    name : "priyanka",
    email : "priyanka@gmail.com",
    age : 23
}

const bookShop = {
    book : "ThinkAndGrowRich",
    price : 300,
    page : 200    
}

const life = {
    happy : true
}

const learn = {
    Language : "Javascript",
    framework : "React",
    __proto__ : life
}

// Ques : How to excess the data of one Object to the another object

// convensional way

// Change property by adding proto inside the object
console.log(learn.happy) // true


// Change property by adding proto outside the object
console.log(bookShop.__proto__ = user) // { name: 'priyanka', email: 'priyanka@gmail.com', age: 23 }

console.log(bookShop) // { book: 'ThinkAndGrowRich', price: 300, page: 200 }



// MODERN  way of inherit

Object.setPrototypeOf(bookShop, life)

console.log(bookShop.happy) // true