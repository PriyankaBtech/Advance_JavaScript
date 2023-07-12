// Revision of Async and Await

async function getAllusers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    console.log(data)
}

getAllusers() // Promise { <pending> }

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })
