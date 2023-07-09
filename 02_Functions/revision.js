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



