function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data:", dataId);

        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

// Basically we are getting data and then only processing it. but here we achieve through call back functions which will be run after getData() function 
// Such a below code is call nested call backs where we assign a callback function on each callback in a nested form.
// but in real life its difficult to achieve and maintain the code like below. so we called that situation "callback hell"
// to overcome from problem "callback hell", we are using Promises(will discuss in next point) 
// The callback function are only used in some simple condition where there are only single callBack situation occured, 
// but for dipper nested callback we are using "Promises" to avoid "callback hell"

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
});

// getData(313);

// getData(786);