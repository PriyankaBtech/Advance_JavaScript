/*********************** forEach() *************************/

// ECMAScript 5 (ES5) in 2009.
// more thing to note is that within forEach we cannot use the break, and continue.
// The return value of this method is always undefined


// Syntax
//array.forEach(callback(item, index, array) => Statements)


let fruits = ["apple", "Mango", "orange", "banana", "cherry"]

let count = 0
fruits.forEach((element) => {
    if(element == "cherry"){
        count++
    }
})
console.log(count) // 1


// PwSkills

let arr = [2, 3, 4]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("arrow: ", index, element, arr);
})

/* OUTPUT :
arrow:  0 2 [ 2, 3, 4 ]
arrow:  1 3 [ 2, 3, 4 ]
arrow:  2 4 [ 2, 3, 4 ] 
*/


const heros = ["naagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => { console.log(el.toUpperCase())})

/*
NAAGRAJ
DOGA
DHRUVA
MANIRAJ
*/




// Let’s imagine you are assign a task to display all the items added to the cart

let itemsInCart = [
    "apple",
    "comb",
    "mike",
    "keyboard",
    "t-shirt",
    "mobile holder",
]

// Display the items in cart
itemsInCart.forEach((item) => console.log(item));

/* OUTPUT :
    apple
    comb
    mike
    keyboard
    t-shirt
    mobile holder
*/


// with forEach    
itemsInCart.forEach((item, index, arr) =>
    console.log(
    `The item ${item} was added to cart in position ${index + 1}. The items in cart are ${arr}.`
))


/*
The item apple was added to cart in position 1. The items in cart are apple,comb,mike,keyboard,t-shirt,mobile holder.
The item comb was added to cart in position 2. The items in cart are apple,comb,mike,keyboard,t-shirt,mobile holder.
The item mike was added to cart in position 3. The items in cart are apple,comb,mike,keyboard,t-shirt,mobile holder.
The item keyboard was added to cart in position 4. The items in cart are apple,comb,mike,keyboard,t-shirt,mobile holder.
The item t-shirt was added to cart in position 5. The items in cart are apple,comb,mike,keyboard,t-shirt,mobile holder.
The item mobile holder was added to cart in position 6. The items in cart are apple,comb,mike,keyboard,t-shirt,mobile holder.
*/

