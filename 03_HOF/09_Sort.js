/****************************** sort **********************************/


/*
1. The elements are compared according to their sequences of UTF-16 code unit values
2. By default, the arrays are sorted in ascending order
3. The sorting operation happens on the same array and no new array is created
*/

/*
// SYNTAX :

// Without any parameter
arr.sort()

// Compare function method
arr.sort(compareFunc)

// Arrow function method
arr.sort((x, y) => {} )

// Inline compare function method
arr.sort(function compareFunc(x, y) {} )
*/


const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)
// output: Array ["Dec", "Feb", "Jan", "March"]  // order alphabetically 


const array = [1, 30, 4, 21, 100000]
console.log(typeof array[1]) // number
array.sort()
console.log(array)
// output: Array [1, 100000, 21, 30, 4]

// observe, it is not sorting the array as expected because the sort() method sorts the elements of an array in ascending order as strings, which is not suitable for sorting numeric values.
// So, we need to use a compare function to sort the numbers.



let numbers = [19, 20, 30, 50, 100]

// sort the numerical value
numbers.sort((a, b) => a - b)
console.log(numbers)// [ 19, 20, 30, 50, 100 ]

// store in variable
let numberInIncreasingOrder = numbers.sort((x , y) => {
    return x - y
})
console.log(numberInIncreasingOrder) // [ 19, 20, 30, 50, 100 ]



// Compare Function
function compareFn(a, b) {
    if ("a is less than b by some ordering criterion") { // (a < b)
      return -1
    }
    if ("a is greater than b by the ordering criterion") { // (a > b)
      return 1
    }
    // a must be equal to b
    return 0
}



const stringArray = ["Blue", "Yellow", "Green"]
const numberArray = [40, 1, 5, 200]
const numericStringArray = ["80", "9", "700"]
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200]

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Yellow,Green'
stringArray.sort(); // ['Blue', 'Green', 'Yellow']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']




// sort() returns the reference to the same array

const nums = [3, 1, 4, 1, 5]
const sorted = nums.sort((a, b) => a - b)
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10
console.log(nums[0]); // 10


const digits = [3, 1, 4, 1, 5]
// [...digits] creates a shallow copy, so sort() does not mutate the original
const sortedDigits = [...digits].sort((a, b) => a - b)
sortedDigits[0] = 10
console.log(digits[0]); // 3



  