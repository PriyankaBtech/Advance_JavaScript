/****************************** Functions ************************************/


// Basic Syntax
//function Declaration

function functionName() {
    // function body
}
functionName() // calling a function


//example-1
function greet() {
    console.log("Hello guys!")
    console.log("learn functions")
}
greet()


//example-2
function sqr(x) { // x => Parameter
    console.log(x * x)
}
sqr(5) // 25

/************************ Function without Argument *****************************/

function saySomething() {
    console.log("let's learn JavaScript")
}
saySomething()

// function returning value
// basic syntax

/* function functionName() {
    // body
    return expression / value
}
let returnValue = functionName() */


function passMassage() {
    return "I am priyanka"
}
let message = passMassage() // return statement msg store in the message variable
console.log(message)

