console.log("@@@@@@@@@@@ For Each Loop @@@@@@@@@@@");

// forEach loop is a method used to retrieve one by one data of an array

// It is a method to execute for each element in the array

// Generally callBackFunction is a function that is passed as an argument to another function

// Syntax ->> arr.forEach(callBackFunction)

let arr = [1, 2, 3, 4, 5, 6];                                           // example 1

arr.forEach((val) => {
    console.log("Fetched value is:",val);
});






let cities = ["Pune", "Mumbai", "Kolhapur", "Sangli", "Solapur"];       // example 2

console.log("$$$$$$ Cities $$$$$$");

    cities.forEach((val) => {
        console.log("city name is", val);
    })

console.log("$$$$$$ Cities $$$$$$");





console.log("$$$$$$ forEach Callback comes with 3 arguments (val, id , arr) $$$$$$");

    // by default argument are val(current value), id(current index) & (arr)array itself

    cities.forEach((val, id, arr) => {       
        console.log(val.toUpperCase(), id, arr);
    });

console.log("$$$$$$ forEach Callback comes with 3 arguments (val, id , arr) $$$$$$");