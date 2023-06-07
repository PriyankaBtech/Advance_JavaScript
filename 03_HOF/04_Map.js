/***************** Map ********************/

let fruits = ["apple", "Mango", "orange", "banana", "cherry"]

// fruits.map((fruits) => {
//     console.log(fruits)
// })
/*
output :
apple
Mango
orange
banana
cherry
*/


// Example when we store in variable with return => it will give array output

let basket = fruits.map((fruits) => {
    return fruits
})
console.log(basket) // [ 'apple', 'Mango', 'orange', 'banana', 'cherry' ]

/*
- it will iterate over the entire array and return a new array.
- high order function only works on array not string, object etc.
- it is like a loop which is inbuild function.
- it will iterate over the entire array.
*/

// if you want to print particular element in the array, example "apple" with map.

let firstOutput = fruits.map((fruits) => {
    if(fruits == "apple"){
        return fruits   
    }
})
console.log(firstOutput); // [ 'apple', undefined, undefined, undefined, undefined ]
// because we running a loop and did not write any conditions.

/*
// but what if you only want to print "apple" in the array.

let secondOutput = fruits.map((fruits) => {
    if(fruits == "apple"){
        return fruits   
    }
    else {
        break
    }
})
console.log(secondOutput); // syntaxError => Illegal break statement
*/


// note : we are facing this kind of problem with map function , we can't print single particular element in array so we use another inbuild function called filter.