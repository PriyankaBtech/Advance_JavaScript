/******************* Function Constructor *************************/

// # Anonymous function expression

const Product = function (n, p, r) {
    this.name = n
    this.price = p
    this.rating = r    
}

const p = new Product("School Bag", 500, 4)
console.log(p) // Product { name: 'School Bag', price: 500, rating: 4 }


// # Arrow function 


const newProduct = (n, p, r) => {
    this.name = n
    this.price = p
    this.rating = r
}


//const storeNewPorduct = new newProduct("Collage Bag", 600, 5)
//console.log(storeNewPorduct) // TypeError: newProduct is not a constructor

// NOTE :
// Arrow function is not use as function constructor.
// The theory of this keyword pointing to calling context is not applicable with arrow function


const myObject = {
    x : 10,
    fun() {
        console.log(this.x)
    }
    // /* with arrow */
    // fun : () => {
    //     console.log(this.x) // undefined
    // }
}

myObject.fun() // 10


// another good example

let anotherObject = {
    a : 20,
    fun() {
        y = {
            gun : () => {
                console.log(this.a)
            }
        }

        y.gun()
    }
}

anotherObject.fun() // 20


