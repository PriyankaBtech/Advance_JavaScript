// Revision of Functions

// In simple words, function is rapper
// () => paraenesis
// [] => bracket
// {} => curely braces

// Function Defination
function sayHello() {
    console.log("Hello to all")
    console.log("Hello to all")
    console.log("Hello to all")
} 

// sayHello => reference of function
sayHello // nothing come

// sayHello() => Execution of function
sayHello()


function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
    console.log("print sum") // after return the value there is nothing execute    
}
 
function subTwoNum(num1, num2){
    let result = num1 - num2
    return result
}
 
const result = addTwoNumbers(3, 5)
console.log(result) // 8

console.log(subTwoNum(10, 6)) // 4



//  Register the user

function registerUser(user) { // also give the default value (user = "Rahul")
    if(user === undefined) return "Please enter the username"
    //if(!user) => used this way in production
    return user + " successfully register"    
}
registerUser("priyanka") // nothing come in result
console.log(registerUser("priyanka")) // priyanka successfully register
//console.log(registerUser()) // undefined successfully register => if condition not written
console.log(registerUser()) // Please the username


// Shopping Cart

function cartBillTotal(...numbers) {
    // take a variable total
    let total = 0
    // loop all values and keep adding to total
    for (const num of numbers) {
        total += num         
    }
    // return total
    return total
}

console.log(cartBillTotal(100, 4500, 500)) // 5100


// function with Object

const user = {
    name: "Priyanka",
    email: "priyanka@gmail.come",
    id: "12345"
}

function addUser(obj) {
    return `A user name ${obj.name} got an email ${obj.email}`  
    // wrong => user.name, this.name  
}
console.log(addUser(user)) // A user name Priyanka got an email priyanka@gmail.come



// Normal function => function function_name() {}
function addTwoNumber(num1, num2) {
    return num1 + num2    
}

// Arrow Function => () => {}
const addTwoNumber2 = (num1, num2) => {
    return num1 + num2
}

// if code is only of single line then you can remove the {}
const addTwoNumber3 = (num1, num2) => num1 + num2

// single parameter
const addTwoNumber4 = num => 5 // implicit return (means return apply automatically)


//{email: "rahul@gmail.com"} // How get this type(object) of Output ?
const addTwoNumber5 = num => ({email: "rahul@gmail.com"})

// for two parameters
const addTwoNumber6 = (num1, num2) => ({email: "rahul@gmail.com"}) // implicit return



// this
function learning() {
    console.log(this)    
}

const learningTwo = () => {
    console.log(this)
}

learning()// Object [global]{} => with lot of values
learningTwo() // {}

// In Browser
learning() // window{}
learningTwo() // window{}


