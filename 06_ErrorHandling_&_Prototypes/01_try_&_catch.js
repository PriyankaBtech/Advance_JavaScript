/**************************** Try and Catch ***************************************/

//syntax

try {
    // block of code for testing
} catch {
    // block of code for addressing errors
} finally {
    // block of code run after try-catch
}


// with example

try {
    let name = undefined
    console.log(name[0]) // TypeError: Cannot read properties of undefined (reading '0')
} catch(err) {
    console.log("error handling in catch", err)
    // err => excess of error , optional argument
} finally {
    console.log("finally always gets executed")
}
/*
Output :
error handling in catch
finally always gets executed
*/


console.log("end")
// even the error come in try block , still the end is print 


