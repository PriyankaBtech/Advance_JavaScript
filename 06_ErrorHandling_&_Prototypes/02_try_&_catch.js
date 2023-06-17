/************ Use of try-catch in real-world Application ****************/


try {
    // block of code for testing
    console.log("Hello Everyone")
    console.log(name) // ReferenceError: name is not defined
} catch {
    // block of code for addressing errors
    console.log("handle the Error")
}  finally {
    console.log("no matter what, code will be print")
}

// no imapact of try and catch
console.log("The End")
/*
Output :
Hello Everyone
handle the Error
no matter what, code will be print
The End
*/



// example

console.log("Hello my name is Priyanka")
console.log("I am learning JavaScript")
console.log("I am happy to learn this Programming language")


try {
    console.log(webDevelopment)
    } catch (error) {
    console.log(error.message) // webDevelopment is not defined
    }
    console.log("woh I am done")



    
// Example when students not complete the assignments

console.log("Hello my name is Priyanka")
console.log("I am learning JavaScript")
console.log("I am happy to learn this Programming language")

let assignmentCompletion = false

try {
    // block of code for testing
    if(assignmentCompletion === false)
     throw new Error("You have not completed the assignment") // You have not completed the assignment

} catch(error) {
    console.log(error.message)
    // block of code for addressing errors
} finally {
    // block of code run after try-catch
    console.log("you can now create the static webpages")
}

console.log("I done my work")





