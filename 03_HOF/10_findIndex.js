/************************** findIndex() ********************************/

//The findIndex() is a method used to find the first element in an array that satisfies the condition.
// but if condition not satisfies then its return -1


const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13
//const isLargeNumber = (element) => element < 1   // -1


console.log(array.findIndex(isLargeNumber));
//output: 3