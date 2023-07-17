// Async 

async function printResult() {
    return "Hello"            
}
console.log(printResult()) // Promise { 'Hello' }


async function printResult2() {
    return "Hello Async"            
}
printResult2().then(function(result) {
    console.log(result) // Hello Async
})
