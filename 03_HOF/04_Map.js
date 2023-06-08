/***************** map() ********************/

/*
The map method applied to Array in 3 ways :
1. Function Declaration
2. Arrow Function 
3. Callback function
/*

// Function Declaration
//array.map(function (item, index, array) {}

// Arrow Function
//array.map((item, index, array) => {}

// Call back Function
//array.map(callback)



let fruits = ["apple", "Mango", "orange", "banana", "cherry"]

  fruits.map((fruits) => {
    console.log(fruits)
})

/*
output :
apple
Mango
orange
banana
cherry
*/


// Example when we store in variable with return => it will give array output


let fruits = ["apple", "Mango", "orange", "banana", "cherry"]

let basket = fruits.map((fruits) => {
    return fruits
})
console.log(basket) // [ 'apple', 'Mango', 'orange', 'banana', 'cherry' ]

/*
- it will iterate over the entire array and return a new array.
- this high order function only works on array not string, object etc.
- it is like a loop which is inbuild function.
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



// Pwskills

let arr = [1, 2, 3]

const heros = ["naagraj", "doga", "dhruva", "maniraj"]

arr.map(function(element, index, arr){
    console.log(element, index, arr);
})

/* OUPUT :
1 0 [ 1, 2, 3 ]
2 1 [ 1, 2, 3 ]
3 2 [ 1, 2, 3 ]
*/

// with Arrow
heros.map((h) => console.log(h.toUpperCase()))
/* OUTPUT :
NAAGRAJ
DOGA
DHRUVA
MANIRAJ
*/


// Array of item prices as strings
let cartItemsPriceAsStrings = ["100", "58.50", "134", "175", "146", "205"]

// Array of item prices as numbers
let cartItemsPriceAsNumbers = cartItemsPriceAsStrings.map((item) => Number(item));
console.log(cartItemsPriceAsNumbers) // [ 100, 58.5, 134, 175, 146, 205 ]