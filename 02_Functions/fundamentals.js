// normal function

function sayHello(){
    console.log("Hello everyone")
    console.log("Gud Morning")
}

// sayHello()

function addTheNumber(num1, num2){
   
    let total = num1 + num2
    return total
   // console.log("let's Add") => whatever you write after the return it will not work
}

let total = addTheNumber(2, 6)
//console.log(total) // 8
//console.log(addTheNumber(5, 9)) // 14


// Registration in course

function registerInCourse(user){ // user => any datatype come
    return user + " is register in course"
    
}
registerInCourse("priyanka") // no value

console.log(registerInCourse()) // undefined is register in course
// if the parameter define in function but not give parameter during calling its gives undefined.


let result = registerInCourse("priyanka ") // add boolen, number, string anything
//console.log(result) // priyanka is register in course



function registerInCourse(user){ // user => any datatype come
   if(!user){ // (user === undefined)
    return "Please pass the user name"
   }
   else{ // without using else its also works 
    return user + " is register in course"    
   }
   
}

console.log(registerInCourse("pankaj")) // pankaj is register in course
console.log(registerInCourse()) // Please pass the user name




