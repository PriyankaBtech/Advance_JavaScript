/************************** Default Parameter ******************************/

// sometimes functions are written with default parameter values to avoid errors when the function id called without passing any argument.

// function declaration

function displayMessage (
    messageToBeDisplayed = "I am proud to learn JavaScript"
) {
    console.log(messageToBeDisplayed) // nothing come
}

// calling in a function

displayMessage("I am happy to learn full stack web development")
 // output : I am happy to learn full stack web development
 
 displayMessage()
// output : I am proud to learn JavaScript


// confusing example

function add(x = 5, y = 10) {
    return x + y 
}
console.log(add(1)) // 11