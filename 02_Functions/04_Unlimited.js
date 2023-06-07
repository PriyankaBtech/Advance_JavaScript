/******************* Function with unlimited number of parameter ********************/

function sumOfAllParameter() {
    let sum = 0
    for(let i = 0; i<arguments.length; i++)
    sum = sum + arguments[i]
    return sum
}

let result = sumOfAllParameter(1, 2, 3, 4, 5)
console.log(result); // 15