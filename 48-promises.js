// Promise is for "eventual" completion of task. It is object in JS.

// It is solution to callback hell

// promise object syntax ->> let promise = new Promise((resolve, reject) => {...});

// Promise object contains function which contains 2 handlers or callbacks which are 1) resolve 2) reject

// Below is basic example of promise

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



// When we creates a promise, there are 3 states in which it present:
// 1) Pending - this state occurred when no any promise return in a promise object
// 2) Resolve(fulfilled) - this state occurred when any value successfully returned without any error
// 3) Reject - this state occurred when any error occurred with some response from promise object

// Basically we don't creates promise ourself, but when we work with APIs then the promises are creates API side, so we can get the state accordingly

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", dataId);

            resolve("success");
    
            if(getNextData) {
                getNextData();
            }
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






