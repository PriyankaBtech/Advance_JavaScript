/*
# Heap
- Non-Primitive datatypes are store in Heap memory
- Heap memory give the reference (means original) of the original store data.
*/

const userFirst = {
    email : "user@gmail.com",
    user : "user@ybl"
}

const userSecond = userFirst
userSecond.email = "priyanka@gmail.com"

console.log(userFirst) // { email: 'priyanka@gmail.com', user: 'user@ybl' }
console.log(userSecond); // { email: 'priyanka@gmail.com', user: 'user@ybl' }

// Heap change the original value
