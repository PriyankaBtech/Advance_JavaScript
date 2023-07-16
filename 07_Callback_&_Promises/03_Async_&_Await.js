/************************* Async and Await *****************************/

function createPromise() {
    return new Promise(function exec(resolve, reject){
       setTimeout(() => {
           console.log("Timer Done")  
           reject(10)   // print in last when the task complete      
       }, 3000)
    } ) 
}

async function test() {
    return 10    
}
console.log(test()) // Promise { 10 } => promise come because of async

// with Try and Catch 
async function consume() {
    try {
        console.log("Inside the function")
        let response = await createPromise() 
        let response1 = await createPromise() 
        console.log("Response is", response)
    }
    catch(error) {
        console.log("Handled", error)
    }   
}


// async function consume() {
//     console.log("Inside the function")
//     let response = await createPromise() 
//     console.log("Response is", response)   
// }

console.log("Start")
consume()
console.log("End")

// Promise { 10 }
// Start
// Inside the function
// End
// Timer Done
// Timer Done
// Handled 10

