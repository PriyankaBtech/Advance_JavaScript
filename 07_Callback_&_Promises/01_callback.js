/****************************** Callback **********************************/

// A callback is a function that is passed as an argument to another function and executed one the main function has finish executing.

// The purpose of a callback is to allow a program to perform actions asynchronously

// callback especially usefull when dealing with tasks that taks a long time to complete or when you want to execute multiple tasks at the same time.


function h(x, fn) {
    // h -> HOF
    // fn -> callback
    console.log(x * x)
    fn(x + x)
}

/*
h(10, function (){
    console.log("Done with Callback")
})

// Output :
100
Done with Callback
*/

h(5, exce)
//25
//Square value is  10


function exce(n) {
    console.log("Square value is ", n)
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #synchronous callbacks:


console.log("Start")

setTimeout(function f() {
    console.log("Timer Done")
}, 5000) // js is not wait for native feature / runtime features

console.log("End")

// Start
// End
// Timer Done
// => The browser or the nodeJS engine will not wait for the setTimeout()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// # Asynchronous callbacks:

console.log("Start Loop")

for(let i = 0; i < 100; i ++) {} 

console.log("End Loop")

// End print after the excecution of for loop



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// # Nested Callback

console.log("Start Nested")

setTimeout(function () {
    console.log("Executing Function 01")
setTimeout(function () {
    console.log("Executing Function 02")
setTimeout(function () {
    console.log("Executing Function 03")
}, 1000)
}, 1000)
}, 1000)

console.log("End Nested")

// Start Nested
// End Nested
// Executing Function 01
// Executing Function 02
// Executing Function 03



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  # Callback Hell

// Callback hell is a situation in asynchronous programming where multiple levels of nested callbacks make the code difficult to read, understand, and maintain.

// When you use a lot of nested callbacks, the code can become difficult to read and maintain.

// if there are any errors in the code, it can be difficult to debugg.

//To avoid callback hell, there are several techniques you can use in JavaScript, such as Promises and async/await functions.
