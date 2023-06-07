/***************************** Manipulating values in object ********************************************/

/*
# Accessing Data
# Adding Data
# Changing Data
# Deleting Data
*/

// 1. ACCESSING 

//We can use Dot notation or Square bracket notation to access object values.

const person = {
    name : "priyanka",
    age : 22,
    place : "delhi",
    number : 888888,
    penCard : true,
}

// Dot notation: objectName.propertyName
console.log(person.name) // priyanka

// Square bracket notation: objectName['propertyName']
console.log(person["name"]) // priyanka

// Dot notation is more commonly used.



// 2. ADDING

// It is simple to add add key-value pairs in object.
// Dot notation or square bracket notation can be used.

person.ID = "priya1@gmail.com"
console.log(person) // ID key add in object

person["ID"] = "priya1@gmail.com"
console.log(person)

 


// 3. CHANGING

// It is simple to change key-value pairs in object.
// Dot notation or square bracket notation can be used.

person.age = 24
console.log(person)

person["age"] = 24
console.log(person)



// 4. DELETING

// It is simple to delete key-value pairs in object.
// Dot notation or square bracket notation can be used.

delete person.place
console.log(person)

delete person["place"]
console.log(person)




