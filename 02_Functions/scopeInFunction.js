
// Local and Global scope

// what is the difference when you declare a variable inside the function and the variable which are not present inside the function.


function family() {
    let live = "delhi"  // local variable
    console.log(live);
   // console.log(live1);   => it will give error, so how you , UK come in your home
   family2() // you need to call there function name
}

//priyanka() 
// output :
// delhi
// UK

function family2() { 
    let live1 = "UK"  // local variable => have there family
    console.log(live1)
    console.log(globalVaribaleInFamily2)
   // console.log(globalVaribaleInFamily3)
   // return live1;
    
}

function family3() {
    let live2 = "US" // local variable
    console.log(live2);
    console.log(globalVaribaleInFamily3) 
}

var globalVaribaleInFamily2 = "cananda"
family2()
//output :
// UK
// cananda

// if you use let

let globalVaribaleInFamily3 = "cananda"
family3() // us cananda