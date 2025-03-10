// A Promise is a JS Object which represents the eventual completion(or failure) of an asynchronous operation and it returns the resulting value.

// Promise object is a solution to callback hell

// A Promise can be one out of 3 states:
// 	1) Pending: The initial state, where the operation has not completed yet.
// 	2) Fulfilled(resolved): The operation completed successfully.
// 	3) Rejected: The operation failed.

// Once a promise is created, it can be used with .then() & .catch() methods to handle the fulfilled or rejected state. 	

// The .then() method allows to chain multiple promises, creating a sequence of asynchronous operations that execute one after other complete.

// The .catch() method is used to handle any errors that occur in the promise chain when operation failed.

// promise object syntax ->> let promise = new Promise((resolve, reject) => {...});



let promise = new Promise((resolve, reject) => {    // here state will be "pending", because dont return any state programmatically(resolve or reject)
    console.log("I am a promise...");
})

let promise1 = new Promise((resolve, reject) => {
    console.log("I am a promise1 of state resolve....");
    resolve("success");
})

let promise2 = new Promise((resolve, reject) => {
    console.log("I am a promise2 of state reject....");
    reject("error");
})



// When we create a promise, there are 3 states in which it present:
// 1) Pending - this state occurred when no any promise return in a promise object
// 2) Resolved(fulfilled) - this state occurred when any value successfully returned without any error
// 3) Reject - this state occurred when any error occurred with some response from promise object

// Basically we don't creates promise ourself, but when we work with APIs then the promises are creates at API side, so we can get the state accordingly

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", dataId);

            resolve("success");
        }, 5000);
    });
}

// Now above we saw the concept how to change the state of the promises according to our result, 
// but we can use it through using then() or catch(), then() use if promise resolve or use catch() if promise rejects where we handle or getting the errors

// Syntax - promise.then((res) => {...})    // .then contain function which is executes only when promise fulfill successfully
// Syntax - promise.catch((res) => {...})   // simillarly .catch contain function which is executes only when promise rejected

// below example where we creates "getPromise" promise and then according to state sent from it we can handle it using then() or catch() method of promise as below,

const getPromise = () => {          // creates function with Promise object to send state (resolve or reject)
    return new Promise((resolve, reject) => {
        console.log("I am a Promise...");
        // resolve("success");
        reject("error");
    })
}

let sbzpromise = getPromise();      // call promise

sbzpromise.then((res) => {          // handle response if promise return resolve state
    console.log("Promise fulfilled!!!!", res);
})

sbzpromise.catch((err) => {         // handle response if promise return reject state
    console.log("Error:", err);
})






