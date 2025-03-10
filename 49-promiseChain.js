// Promise chaining is a javascript technique that allows you to run multiple asynchronous tasks in the sequence.
// The .then() method allows to chain multiple promises, creating a sequence of asynchronous operations that execute one after other complete.
// The .catch() method is used to handle any errors that occur in the promise chain when operation failed.

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000)
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000)
    });
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Here in the below sequence the data1 and data2 fetching at a same time
// So need to solve this problem below

/* console.log("fetching data1...");   // run 1st
let p1 = asyncFunc();   // run 3rd
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2...");   // run 2nd
let p2 = asyncFunc2();  // run 4th
p2.then((res) => {
    console.log(res);
}); */

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Here we required the output to fetch data1 after 4 secs and then after 4 secs fetch data2 as below in asynchronous manner

/* console.log("fetching data1...");   // run 1st
let p1 = asyncFunc();   // run 2nd
p1.then((res) => {
    // console.log(res);

    console.log("fetching data2...");   // run 3rd

    let p2 = asyncFunc2();  // run 4th

    p2.then((res) => {
        // console.log(res)
    })
}); */

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Even we can simplify above code with below code for more convinient

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// this is a concept called "Promise chain" where we chain one Promise with another Promise to achieve asynchronous output

console.log("fetching data1...");   // run 1st
// let p1 = asyncFunc();   // run 2nd
asyncFunc().then((res) => {
    // console.log(res);

    console.log("fetching data2...");   // run 3rd

    // let p2 = asyncFunc2();  // run 4th

    asyncFunc2().then((res) => {
        // console.log(res)
    })
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

