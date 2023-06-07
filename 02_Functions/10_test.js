// add number

function addTheNumber(){
    let num1 = 5
    let num2 = 10
    let sum = num1 + num2
    console.log(sum)
  }
  addTheNumber() // 15
  console.log(typeof addTheNumber) // function
  
  function addTheNumbers (num1, num2) { // reciver
    let sum = num1 + num2
    console.log(sum)
  }
  addTheNumbers(20, 40) // 60
  console.log(typeof addTheNumbers)

  
  function addTheNumberWithReturn (num1, num2) {
    return num1 + num2
  }
  
  console.log(addTheNumberWithReturn(4, 8))
  
  let result = addTheNumberWithReturn(10, 20)
  console.log(result)
  
  let result2 = addTheNumberWithReturn("pankaj", "priyanka")
  console.log(result2)
  
  let result3 = addTheNumberWithReturn(true, false) // 1 | false, false => 0, true, true => 2
  console.log(result3)
  
  //let result4 = addTheNumberWithReturn(undefine, undefine)
  //console.log(result4)
  
  let result5 = addTheNumberWithReturn(null, null) // 0
  console.log(result5)
  
  console.log(typeof result) // number
  console.log(typeof result2) // string
  console.log(typeof result3) // number
  
  console.log(typeof result5) // number


  function callANumber(number) {
    console.log(number)
    
  }
  callANumber(10) // 10


/************************* Divide ***************************/

function divTheNum() {
    let num1 = 15
    let num2 = 10
    let divide = num1 / num2
    console.log(divide)
  }
  divTheNum()
  
  
  // return with parameter
  
  function divTheNum2(num1, num2) {
    let divide = num1 / num2
    return divide
  }
  
  let numResult = divTheNum2(15 / 10)
  console.log(numResult) // NaN