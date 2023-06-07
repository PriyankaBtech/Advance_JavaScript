// function returning value
// basic syntax

/* function functionName() {
    // body
    return expression / value
}
let returnValue = functionName() */


// functions


function sayHello() {
    console.log("Hello world");
    console.log("Hello again");
}

// sayHello()

// console.log("Something");

// sayHello()

function addTwoNumbers(num1, num2){
   let result = num1 + num2
    return result
   
}

function subTwoNum(num1, num2){
    let result = num1 - num2
    return result
}

const result = addTwoNumbers(3, 5)
// console.log(result);


function pwlogin(username = "hiteshhhh"){
    if (!username) {
        return "please provide a username!"
    }
    return username + ' is logged in'
}

// console.log(pwlogin("hitesh"))


function cartSum(...numbers){
    // get a variable - total
    let total = 0;
    // loop through all values
    // add each value to total
    for(const num of numbers){
        total += num
    }
    // return total
    return total
}

// console.log(cartSum(2, 5, 7, 4))

const user = {
    id: 1,
    name: "hitesh",
    email: "hitesh@pw.live"
}

function addUserToDb(obj){
    console.log(`User name is ${obj.name}`);
}
// addUserToDb(user);


function learnThis(){
    console.log(this);
}

// learnThis()

function addnums(num1, num2){
    console.log(this);
    return num1 + num2
}

const addnumsStyleTwo = (num1, num2) =>  num1 + num2

// addnums(3, 3)
// console.log(addnumsStyleTwo(3, 3))

const getObject = () => ({value: "id1233"})


// iife

(() => {
    console.log("DABASE CONNECTED");
    console.log("hitesh")
})()