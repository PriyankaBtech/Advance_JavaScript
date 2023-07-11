// Revision 

// Declare promises => new Promise


// Creating a Promise
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task => like DB call, crypto

    setTimeout(function() {
        console.log("Async Task is Completed")
        resolve()        
    }, 1000)    
})


// Consuming a Promise
promiseOne.then(function() {
    console.log("Promise consumed")    
})


new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Second Async Task is Completed")
        resolve()
    }, 1000)    
}).then(function() {
    console.log("Second Promise consumed")    
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // DB call to get all users from Database
        resolve({userName: "Priyanka", userEmail: "priyanka@gmail.com"})
    }, 1000)
    
})
promiseThree.then(function(user) {
    console.log(user) // { userName: 'Priyanka', userEmail: 'priyanka@gmail.com' }
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Rahul", useremail: "rahul@gmail.com"})
        } else{
            reject("Error: something went wrong")
        }       
    }, 1000)
    
})
// then().then().catch() => also write this way
promiseFour
    .then(function(user) {
        console.log(user)
        return user.username
    })
    .then(function(name) {
        console.log(name)
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log("The promise is either resolved or rejected")
    })

// true => Error: something went wrong 
// false => { username: 'Rahul', useremail: 'rahul@gmail.com' }



const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "Tina", useremail: "tina@gmail.com"})
        } else{
            reject("Error: something went wrong")
        }       
    }, 1000)    
})

// Consume the promise
async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response)    
}

// Without async and await
//consumePromiseFive() // Promise { <pending> }

// With async and await
consumePromiseFive() // { username: 'Tina', useremail: 'tina@gmail.com' }




