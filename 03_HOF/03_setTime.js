/************ Setting Time (SetInterval and SetTimeOut)************/

// setInterval() global function

// => A function to be executed every delay milliseconds.
// The first execution happens after delay milliseconds.

function alarmCall() {
    console.log("Wakeup Priyanka !", Math.random())
}
//setInterval(alarmCall, 1000)


// setInterval((alarmCall) => {
//     console.log("Wakeup Priyanka")    
// }, 1000);



// setTimeOut()

// => A function to be executed after the timer expires.

setTimeout(alarmCall, 5000)

