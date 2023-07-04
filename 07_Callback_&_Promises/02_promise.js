/******************************* Promise Constructor ************************************/



// Syntax :


/*
new Promise(function (resolve, reject) {
    // Asynchronous operation
})
*/


function createPromise() {
     return new Promise(function exec(resolve, reject){
        setTimeout(() => {
            console.log("Timer Done")  
            resolve(10)   // print in last when the task complete      
        }, 3000)
     } ) 
}

//console.log(createPromise())

console.log("Start")

let x = createPromise()

console.log("get the new Promise")

x.then(function f() {  // x.then() => register
    console.log("promise done")
})

.catch(function g(value){
    console.log("Handled", value)
}).finally(function fn(value) {
    console.log("Finally")
})

console.log("End")

//loop
// for(let i = 0; i<1000; i++) {    
// }