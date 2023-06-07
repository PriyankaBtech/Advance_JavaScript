// function check even and odd number

function checkNumber(num) {
    if(num%2 == 0){
      return "Even"
  }
  else {
    return "Odd"
  }  
    
  }
  let result = checkNumber(2)
  // console.log(result)


  // check character small or capital

  function checkTheCase(char) {

    let character = "abcdefghijklmnopqrstuvwxyz"

    for(let i=0 ; i<character.length ; i++){
        if( char === character[i]){
            return true
        }
    }
    return false 
  }

  let value = checkTheCase("a")

  if(value === true){
    console.log("it is smaller")
  }
  else {
    console.log("it is capital")
  }

// it is smaller
