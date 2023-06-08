/************************* What is HOF *********************************/


// A function that returns a function or takes other functions as arguments is called a higher-order function.
// The function which is taken another function as parameter is called High Order Function.

// if function treat as variable we can say that HOF
// the function which are not HOF, those functions called First class function


// Examples

const powerTwo = (n) => {
    return n ** 2    
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n   // 9 * 3
}

console.log(powerCube(powerTwo, 3)) // 27


// another example

function sayHello() {
    return () => {
        console.log("Hello Priyanka")
    }
}

let storeMessage = sayHello()
console.log(storeMessage) // [Function (anonymous)]

storeMessage() // Hello Priyanka
sayHello() // no result


// another example

const multipleFun = (x) => {
    const oneFun = (y) => {
        const twoFun = (z) => {
            return x + y + z
        }
        return twoFun
    }
    return oneFun
}
console.log(multipleFun(2)(3)(4)) // 9


// another example

const nums = [1, 2, 3, 4, 5]

const sumOfNums = arr => {
    let total = 0
    arr.forEach(function (e) {
        total = total + e        
    })
    return total
}
console.log(sumOfNums(nums)) // 15




