/************************* What is HOF *********************************/

// The function which is taken another function as parameter is called Function.


// example

let myMessage = () => {
    console.log("hello everyone");
}

function intro(myMessage) {
    myMessage()
    console.log("bye everyone")
} 
intro(myMessage)
// output : 
// hello everyone
// bye everyone

// Callback function : the function that is passed into another function as a function is called Callback function. (ex-myMessage)

