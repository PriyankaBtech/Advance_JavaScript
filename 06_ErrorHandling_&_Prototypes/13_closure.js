/*************************** Closure ********************************/

// Closure is refers combination of functions, its gives you access to an outer function's scope from inner function.

// its having access to the parent scope even after the parent function has closed

// ice-cream example



// Closure basics and basic of scopes

let score = 5
function one() {
  let score = 0
  console.log(score)
}

function two() {
  let score = 2
  console.log(score)
}

function three() {
  console.log(score) // take excess of global score if score variable is not define
}

one() // 0
two() // 2
three() // 5
console.log(score) // 5



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function outerFunc() {
    let outerValue = "I am at scope Level one"
  
    function innerFunc () {
      let innerValue = "I am at scope Level two"
      console.log(outerValue) // I am at scope Level one
    }
    //console.log(innerValue) // ReferenceError: innerValue is not defined
    innerFunc()
    
}
outerFunc()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const myGlobalValue = 0

function fun() {
    const val1 = 1
    console.log(myGlobalValue) 
    
    function innerFun() {
        const val2 = 2
        console.log(val2, val1, myGlobalValue)  
        
        function innerOfinnerFun() {
            const val3 = 3
            console.log(val3, val2, val1 , myGlobalValue)        
        }
        innerOfinnerFun()
    }
    innerFun()
}
fun()



// closure 

// Example
function outerFunction() {
    const outerVar = 'I am in the outer function'

    function innerFunction() {
    console.log(outerVar) // logs "I am in the outer function"
    } 
    innerFunction()
}  
outerFunction()


// In this example, the “innerFunction” has a reference to the “outerFunction's” lexical environment,which includes the “outerVar” variable. When “innerFunction” is invoked, it can access and log the value of “outerVar”.



function superFun() {
    let outerVal = "I am Out"
    function minorFun() {
        console.log(outerVal)
    }
    minorFun()
}
superFun()
// I am Out


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// real world example

const errorMessage = "File not found"

setTimeout(function callback() {
    console.log(errorMessage)
}, 5000)


let pageCount = 0

const items = [2, 4, 5, 6, ,7, 8, 9]

items.forEach(function iterator(nums) {
    pageCount ++ // 7
    console.log(nums)
})

console.log("page count", pageCount) // page count 7






