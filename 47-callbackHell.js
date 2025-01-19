// $$$$$$$$$$$$$$$$$$$$$$ callback hell (with getNextData function) $$$$$$$$$$$$$$$$$$$$$$$

    function getData(dataId, getNextData) {
        setTimeout(() => {
            console.log("Data:", dataId);

            if(getNextData) {
                getNextData();
            }
        }, 2000);
    }

// $$$$$$$$$$$$$$$$$$$$$$ callback hell (with getNextData function) $$$$$$$$$$$$$$$$$$$$$$$


// $$$$$$$$$$$$$$$$$$$$$$ changes for Promise chain $$$$$$$$$$$$$$$$$$$$$$$

    /* function getData(dataId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data:", dataId);
                resolve("success");
            }, 2000);
        });
    } */

// $$$$$$$$$$$$$$$$$$$$$$ changes for Promise chain $$$$$$$$$$$$$$$$$$$$$$$

// Basically we are getting data and then only processing it. but here we achieve through call back functions which will be run after getData() function 
// Such a below code is call nested call backs where we assign a callback function on each callback in a nested form.
// but in real life its difficult to achieve and maintain the code like below. so we called that situation "callback hell"
// to overcome from problem "callback hell", we are using Promises(will discuss in next point) 
// The callback function are only used in some simple condition where there are only single callBack situation occured, 
// but for dipper nested callback we are using "Promises" to avoid "callback hell"

// $$$$$$$$$$$$$$$$$$$$$$$$$ callback hell $$$$$$$$$$$$$$$$$$$$$$$$$

    getData(1, () => {
        console.log("Processing data 1...");
        getData(313, () => {
            console.log("Processing data 313...");
            getData(786, () => {
                console.log("Processing data 786...");
                getData(0, () => {
                    console.log("Pocessing completed...");
                });
                
            });
        });
    })

// $$$$$$$$$$$$$$$$$$$$$$$$$ callback hell $$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$$$$ to solve callback hell (promise chaining) $$$$$$$$$$$$$$$$$$$$$$$$$

    /* getData(1).then((res) => {
        console.log(res);

        getData(313).then((res) => {
            console.log(res);

            getData(786).then((res) => {
                console.log(res);
            })
        })
    }) */

// $$$$$$$$$$$$$$$$$$$$$$$$$ to solve callback hell (promise chaining) $$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$$$$ Promise chain written more convinient $$$$$$$$$$$$$$$$$$$$$$$$$
// in this scenario we are returning the function and create chain of then after one to another like below

    /* getData(1)
    .then((res) => {
        // console.log(res);

        return getData(313);
    }).then((res) => {
        // console.log(res);

        return getData(786);
    }).then((res) => {
        console.log(res);
    }) */

// $$$$$$$$$$$$$$$$$$$$$$$$$ to solve callback hell (promise chaining) $$$$$$$$$$$$$$$$$$$$$$$$$

// getData(313);

// getData(786);


/*
At first we are only use nested callback method to achieve asynchronous programming, 
but in large application the callback gets code very hard to maintain which called "callback hell"
To overcome from "callback hell" we are using promise chaining which make code more convinient than before
to achieve a same output with code maintainability & more understandable 
*/