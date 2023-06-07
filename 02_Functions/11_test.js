
// addition function

function Add(num1, num2) {
    let sum = num1 + num2
    return sum    
}

// square function

function square(num) {
    let sqr = num ** 2
    return sqr
}

// print function

function printTheValue(value) {
    console.log(value)
}


let result = Add(5, 5) // 10

let result2 = square(result) // 100

printTheValue(result2)

