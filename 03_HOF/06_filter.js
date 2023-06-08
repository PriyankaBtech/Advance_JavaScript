/*********************** filter *****************************/

/*
The callback function can be passed to the filter function in the following ways
1.  Function declaration
2.  Arrow Function
3.  Callback Function.


// Function Declaration
array.filter(function (item, index, array) {}

// Arrow Function
array.filter((item, index, array) => {}

// Call back Function
array.filter(callback)
*/



let fruits = ["apple", "Mango", "orange", "banana", "cherry"]

let singleFruit = fruits.filter((element) => {
    if(element == "Mango"){
        return fruits
    }
})
console.log(singleFruit); // [ 'Mango' ] 
// if you want to print particular thinks from the array we use filter() function not map.
// return an Array


// example
const heros = ["naagraj", "doga", "dhruva", "maniraj"]

const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
    // without return => []
})
console.log(herosWithRaj) // [ 'naagraj', 'maniraj' ]



// another example
let userNames = ["Mithun", "Anurag", "Alka", "Prabir", "Vinay"]

let longUserNames = userNames.filter((item) => item.length > 5)
console.log(longUserNames); // OUTPUT : [ 'Mithun', 'Anurag', 'Prabir' ]

