
let numbers = [19, 20, 30, 4, 50, 334, 6, 100]

let numberInIncreasingOrder = numbers.sort((x , y) => {
    return x - y
})
console.log(numberInIncreasingOrder); 