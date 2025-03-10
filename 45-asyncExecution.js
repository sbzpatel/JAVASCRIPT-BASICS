// Async programming is a sequence of execution of statements where some tasks may take time, so these tasks not break the loop but instead of parallely executes side by side for achieve a better performance level.

// javascript supports both type of programming executions(Synchronous and Asynchronous programming).

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Synchronized execution in JS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    console.log("One");     // executes 1st

    console.log("Two");     // executes 2nd

    console.log("Three");   // executes 3rd

    console.log("Four");    // executes 4th

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Synchronized execution in JS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Asynchronization execution in JS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    console.log("One");     // executes 1st

    console.log("Two");     // executes 2nd

    // after 2nd execution completes, program dont wait to executes this one for 4 seconds
    // execution flow goes on next statement and paralelly this statement executing, so once its complete then will be executes
    // this is a concept of async execution in javascript which leads to better performance in large applications
    setTimeout(() => {
        console.log("Hello Sbz!!!");
    }, 4000);

    console.log("Three");   // executes 3rd

    console.log("Four");    // executes 4th

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Asynchronization execution in JS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@