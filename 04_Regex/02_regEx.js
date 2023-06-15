/**************************** Regex Expression *******************************/

// Eexamples of regex

let learn = "PW Skills is the best educational platform to learn from."
let learnPattern = /PW Skills/

// test() => this method used to check the string of given expression
// its give Boolean result

console.log(learnPattern.test(learn)) // true


// "/i" => flag which ignore case insenstive matching

let iPattern = /PW Skills/i
console.log(iPattern.test(learn)) // true


// match()

// => this method used to find all matches of regular expression
// It returns an array containing the matched substrings, or null if no matches are found.

let matchPattern = /PW Skills/i
console.log(learn.match(matchPattern))

/**
OUTPUT : 
[
  'PW Skills',
  index: 0,
  input: 'PW Skills is the best educational platform to learn from.',
  groups: undefined
]

 */


// “/g” => flag to find multiple matches

let string = "PW Skills is the best educational platform to learn from. PW Skills has launched its Full Stack Web Development Course.";
let multiPattern = /PW Skills/g
console.log(learn.match(multiPattern)) // [ 'PW Skills' ] => Array output


// with numbers

let nums = "1, 2, 3, 4, 5, 6, 7"
let numspattern = /[1-4]/g
console.log(nums.match(numspattern))  // [ '1', '2', '3', '4' ]



// let’s look at some real-life challenges like using regex to validate email addresses.

//An email is a string separated into two parts by @ symbol. nhe first part contains personal information while the other contains the domain name at which the email is registered.


let email = "mithun@pw.live"
let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

console.log(emailPattern.test(email)) // true

let newEmail = "someone@gmail.com"
let newPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

console.log(emailPattern.test(newEmail)) // true




// pwSkills 

let pattern = "pw"

// declare regex
let regExOne = new RegExp(pattern)


let flag = "gi"
let regExTwo = new RegExp(pattern , flag)

// short way to declare regex
let regExThree = /pw/gi

let check = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

let result  = regExThree.test(check)
console.log(result) // true


let anotherResult = check.match(regExThree)
console.log(anotherResult) // [ 'PW', 'Pw', 'pw' ]


let anotherResult2 = check.replace(regExThree, "P-W")
console.log(anotherResult2)
// Ouput : P-W is growing at a rapid speed and recently they are working on P-Wskills to create skills based P-Wcontent

const webUrl = "https://pwskills.com/priyanka%20kaushal"

const changeWebUrl = webUrl.replace(/%20/, "-")
// (/%\d0/, "-") => https://pwskills.com/priyanka-kaushal

console.log(changeWebUrl) // https://pwskills.com/priyanka-kaushal


// LEARN PLATFORM => https://regexr.com/
