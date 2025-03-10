// The Fetch API provides an interface for fetching (sending/receiving) resources.
// It uses Request & Response Objects.
// The fetch() method is used to fetch a resource(data).
// HTTP ->> Hypertext transfer Protocol (according to that rules, defined some methods as below)



// HTTP Methods ->> 
// 1) GET ->> Simple request to get data
// 2) POST ->> Here we pass or send some data with API request
// 3) PUT ->> Here we are edit some data on the server side through passing data and using specific id 
// 4) DELETE ->> Here we delete the particular field or document in database through that API by passing specific id



// HTTP Status Codes ->>
// 1) 200 ->> Getting Successful Response
// 2) 201 ->> POST Method successfully created or inserted field in database
// 3) 404 ->> Not found
// 4) 400 ->> client side error occurred
// 5) 500 ->> server side error occurred

// 400 onwards ->> Status code shows the errors occurred at the client side
// 500 onwards ->> Status code shows the errors occurred at the server side



// Headers ->> Headers are an extra information send from both client or server side, 
// It may be request headers or response headers



const URL = "https://catfact.ninja/facts";
let factPara = document.querySelector("#fact");


// let promise = fetch(URL);
// console.log(promise);

const getApiData = async () => {
    console.log("getApiData calling (using async await function)");

    let response = await fetch(URL);    // here fetch sending "GET" method request
    console.log(response);      // here actual data not present because at this stage data available in a JSON format

    // So first we need to convert our JSON format data to the "Real Object Readable data"
    // Which is also promise function like fetch() as below

    let data = await response.json();        // here we converts the JSON to Object readable format (we say parsing json data to JS Object)

    console.log(data);          // fetch whole response data in JS Object
    console.log("Cat's related 1st fact by sbz:", data.data[0].fact);     // extract and print only 1st fact from JS Object
    factPara.innerHTML = data.data[0].fact;
}

const getFactsThroughPromiseChain = () => {
    console.log("getFactsThroughPromiseChain calling...");

    fetch(URL)              // fetch function is a promise function which returns its state, and we will get it using .then()
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            factPara.innerHTML = data.data[0].fact;
        })
}

getApiData();       // we are using async-await over promise chain due to its code simplicity, 


// getFactsThroughPromiseChain();       // Its a promise chaining code to getAPIData 