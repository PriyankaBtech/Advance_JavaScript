/***************** Function with Parameter **********************/

// Parameter => parimeter is a variable in a function definiation
// Argument => is the actual value passed to the function when the function is called

/********************* Single/One Parameter function *****************************/

function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed);
}
displayMessage("Hello Guys!") // Hello Guys!



/********************* function with Two Parameter *****************************/

function sumOfTwoNumber(num1, num2){
    return num1 + num2;
}
let result = sumOfTwoNumber(10, 40)
console.log(result) // 50


/********************* Array as an Argument *****************************/

let number = [10, 40]
let Newresult = sumOfTwoNumber(number)
console.log(Newresult);