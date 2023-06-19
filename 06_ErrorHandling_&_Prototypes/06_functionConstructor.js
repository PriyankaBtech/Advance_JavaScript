/*************************** Function Constructor *********************************/


function Product(n, p, r) {
    this.name = n
    this.price = p
    this.rating = r   
    
    //return {x : 10}
    //return this
}

const myProducts = new Product("Book", 250, 4.5)
console.log(myProducts) // Product { name: 'Book', price: 250, rating: 4.5 }


let x = {
    p : Product
}

x.p("Water Bottle", 200, 5)
console.log(x) // { p: [Function: Product], name: 'Water Bottle', price: 200, rating: 5 }


/**
# Important Points to be noted 

1. this keyword in js is different than others languages
2. this keyword refers to the context from where we called 

# in the function constructor also

- if you return primitive it is ignored and we return the Object referred by this
- if you return a custom obj, then the custom obj is returned 
- if you dont return anything, then object referred by this is returned 
 */
