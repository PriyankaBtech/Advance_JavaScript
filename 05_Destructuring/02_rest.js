/****************************** REST *************************************/

// rest operator => pack the all elements in array

// ques : create the function which coverts all arguments in array.

function manyArguments() {
    let arr = Array.from(arguments) // conver object/Argument to array => array.from()
    let finalArr = arr.map(e => e) // map for looping
    console.log(finalArr)
  }
  
  manyArguments(1, 2, 3, 4, 5) // [ 1, 2, 3, 4, 5 ]
  manyArguments("priyanka", true, 23) // [ 'priyanka', true, 23 ]
  
  
  // How this problem another way ?
  
  function manyArguments2(...arr) { // oberve => save the one line code and conver arguments in array
     console.log(typeof arr) // object
     let finalArr = arr.map(e => e) // map for looping
     console.log(finalArr)
  }
  
  manyArguments2(1, 2, 3, 4, 5) // [ 1, 2, 3, 4, 5 ]
  manyArguments2("priyanka", true, 23) // [ 'priyanka', true, 23 ]
  
  
  // ++++++++++++++++++++++++++ EXAMPLES +++++++++++++++++++++++++++++++++++++++++++++++
  
  function details(...values) {
    return values
  }
  
  console.log(details("name", "age", "location", "id")) // all convert into array form



function check(a, ...b){
    console.log(a, b)
}
check(1, 4, 5, 6, 4, 3) // 1 [ 4, 5, 6, 4, 3 ]