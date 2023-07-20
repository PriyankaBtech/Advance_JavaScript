// Async 

async function printResult() {
    return "Hello"            
}
console.log(printResult()) // Promise { 'Hello' }
console.log(typeof printResult()) // object


async function printResult2() {
    return "Hello Async"            
}
printResult2().then(function(result) {
    console.log(result) // Hello Async
})
