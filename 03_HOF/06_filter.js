/*********************** filter *****************************/

let fruits = ["apple", "Mango", "orange", "banana", "cherry"]

let singleFruit = fruits.filter((element) => {
    if(element == "Mango"){
        return fruits
    }
})
console.log(singleFruit); // [ 'Mango' ] 
// if you want to print particular thinks from the array we use filter() function not map.
// return an Array

// Example 2 
// print the element which are divisble by 10

let numbers = [19, 20, 30, 4, 50, 334, 6, 100]

