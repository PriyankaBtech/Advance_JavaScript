// Indepth Object Revision

const user = {
    userName: "priyanka",
    userEmail: "priyanka@gmail.com",
    UserId: 2536747
}
// lenthy way
user.userName
user.userEmail

// #Destructure the Object
const {userName, userEmail, UserId} = user

userName
UserId // directly excess the value
console.log(userName)//priyanka


//Array with Object
const myArray = [
    {
        userName: "Bheem",
        Id: 123
    },
    {
        userName: "Doremon",
        Id: 456
    },
    { 
        userName: "Pockeymon",
        Id: 789
    }
]

//first apply loop
myArray.map((ele) => {
    console.log(ele.userName)
})


let technicalCourse = {
    courseName: "fullStack",
    price: 2000,

    courseDetail: function() {
        console.log(`course name is ${this.courseName} and price is ${this.price}`)        
    }
}

console.log(technicalCourse.courseDetail) // [Function: courseDetail]
technicalCourse.courseDetail() // course name is fullStack and price is 2000


//Object prototype

Object.prototype.myMsgFunction = function () {
    console.log("Welcome to Everyone !")    
}

// with Object
technicalCourse.myMsgFunction() // Welcome to Everyone !

// with Array
const aNewArray = [1, 2, 3, 4, 5, 6]
aNewArray.myMsgFunction() // Welcome to Everyone !

// with String
const aNewString = "priyanka"
aNewString.myMsgFunction() // Welcome to Everyone !


// Array Prototype
Array.prototype.greetMsg = function () {
    console.log("Good Morning to All")    
}

// with object
// technicalCourse.greetMsg() // TypeError: technicalCourse.greetMsg is not a function

// with array
aNewArray.greetMsg() // Good Morning to All

// with string
//aNewString.greetMsg() // TypeError: aNewString.greetMsg is not a function


const user1 = {
    language: "Javascript",
    price: 2000
}
const user2 = {
   email: "course@gmail.com"
}
const user3 = {
    isLoggedIn: true
}
const user4 = {
    support: "PwSkills",
    __proto__: user1
}

// How excess value of another object

// first way -> __proto__: user1 (inside user4)
console.log(user4.language) // Javascript


// Second way -> user3.__proto__ = user2
user3.__proto__ = user2
console.log(user3.email) // course@gmail.com


// Third way | Latest way
Object.getPrototypeOf(user1, user2)
//console.log(user1.email)


