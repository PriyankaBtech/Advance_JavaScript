/*********************************** Object ******************************************/

// 1. WHAT 

// OBJECT : is an entity(properties and method) with a certain state and behavior. Ex- Car, Pen, Glass, person etc.
// Object is non-primitive datatype

// example

const person = {
  name : "priyanka",
  age : 22,
  place : "delhi",
  number : 888888,
  penCard : true,
}

// Object contain many key-values pairs (separat by colon)
//left side detail called key
//right side detail called value


// 2. HOW ARE OBJECTS DIFFERENT FROM VARIABLES

// A variable can contain only one value at a time
 const name = "Priyanka"
 const age = 23

// An object contains multiple values 

const customer = {
  name : "priyanka",
  age : 22,
  place : "delhi",
  number : 888888,
  penCard : true,
}

// HOW ARE OBJECTS DIFFERENT FROM ARRAY

const user = ["priyanka", 23, true, "Delhi", 87679]
// observe the problem => Only you understand what you write but if new person read your code he/she not understand what kind of detail you write.


// 3. WHY we need OBJECTS?

/**
We can already see from the differences that objects are far more superior to variables. Variables limit us to handling only one value at a time whereas objects enable us to have multiple values of multiple data types to be stored under one name. This allows us to escape many variables for our applications and organize the code for better data handling.
*/



