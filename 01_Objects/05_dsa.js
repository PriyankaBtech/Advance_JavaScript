// Some DSA Question of Object

// #  how many character are present in this string

const str = "School"

const obj = {}

for(let i = 0; i < str.length; i ++){
  let key = str[i]
 
//obj[key]==> adding character into the object

  if(obj[key] == undefined){
    obj[key] = 1
  }
  else{
    obj[key] ++
  }
}
console.log(obj) // { S: 1, c: 1, h: 1, o: 2, l: 1 }



// # Occurance => how many times a single number is present

let numbers = [1, 2, 3, 1, 2, 3, 4, 5];
let container = {}

for(let i = 0; i < numbers.length; i++){
  let key = numbers[i]

if(container[key] == undefined){
  container[key] = 1
}
  else{
    container[key] ++
  }
}
console.log(container) // { '1': 2, '2': 2, '3': 2, '4': 1, '5': 1 }



// # which element in array come only one time (single occurance)

let nums = [1, 2, 3, 1, 2, 3, 4, 5];
let singleNums = {}

for(let i = 0; i < nums.length; i ++){
  let key = nums[i];
if(singleNums[key] == undefined){
  singleNums[key] = 1
}
  else{
    singleNums[key] ++
  }
}
//for in loop

for(let left in singleNums){
  if(singleNums[left] == 1){
    console.log(left) 
  }
}

// Output :
// 4
// 5