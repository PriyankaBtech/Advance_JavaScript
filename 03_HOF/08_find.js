/****************************** find **********************************/

//The find() is a method used to find the first element in an array that satisfies the condition.

// Syntax
// array.find(function (currentValue, currentIndex, array) {})  

/*
1. The find condition is applied to every array elementR
2. The find method returns the first element satisfied by the condition
3. If no element satisfies the find condition, undefined is return
4. find method is not valid on an empty array
5. The original array is not changed by applying the find method.
*/


const numbers = [5, 12, 8, 130, 44];

const result = numbers.find(element => element > 10)
console.log(result)
//output: 12 // single output


const gameScore = [200, 100, 310, 300, 250, 150]

const above200 = gameScore.find((score) => score > 200 )
console.log(above200) // 310


// Apply [{}, {}, {}]

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ]
  
  function isCherries(fruit) {
    return fruit.name === "cherries"
  }
  
  console.log(inventory.find(isCherries))
  // { name: 'cherries', quantity: 5 }
  





