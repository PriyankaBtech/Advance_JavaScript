/*************************** reduce ********************************/


//As name sugguest the reduce method reduces the array values to a single value
// return a single output result
// the input array can have Number, string and Object

// The reduce method is not valid for empty array
// reduce method does not change the original array

// Syntax
//array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)



//shopping cart

const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 10)
console.log(sumOfCartBill) // 110


// Find the sum of all elements in an array
let nums = [1, 2, 44, 67, 89]

// Apply reduce method
let result = nums.reduce((acc, curr) => acc + curr, 0);
console.log(result) // 203

/*
Note: If the initial value is not passed to the reduce method, the first item in the  sequence is used as the initial value and the operation starts from the second item in the sequence.
If the sequence is empty, a TypeError israised.
*/