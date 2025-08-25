// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Fetch API $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.
    // Fetch is the modern replacement for XMLHTTPRequest in JavaScript.

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ HTTP Methods $$$$$$$$$$$$$$$$$$$$$$$$ ✅ // 

        // 1) GET ->> Simple request to get data
        // 2) POST ->> Here we pass or send some data with API request
        // 3) PUT ->> Here we are edit some data on the server side through passing data and using specific id 
        // 4) DELETE ->> Here we delete the particular field or document in database through that API by passing specific id

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ HTTP Methods $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //  

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ HTTP Status Codes (Server Response) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // 1) 200 ->> Getting Successful Response
        // 2) 201 ->> POST Method successfully created or inserted field in database
        // 3) 404 ->> Not found
        // 4) 400 ->> client side error occurred
        // 5) 500 ->> server side error occurred

        // 400 onwards ->> Status code shows the errors occurred at the client side
        // 500 onwards ->> Status code shows the errors occurred at the server side

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ HTTP Status Codes (Server Response) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Syntax (Promise-then) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // fetch('https://api.example.com/data')
        //     .then(response => response.json()) // Parse JSON response
        //     .then(data => {
        //         console.log(data); // Use the data
        //     })
        //     .catch(error => {
        //         console.error('Error:', error); // Handle errors
        //     });

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Syntax (Promise-then) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ GET Method $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // Eg: (GET Method -- using promise-then method)
            fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then(response => {
                    if(!response.ok) {
                        throw new Error("HTTP error!, status:", response.status);
                    } else {
                        return response.json();     // parse response data in json format
                    }
                })
                .then(data => {
                    console.log("API data:", data);

                    // code to do with receiving API `data`
                })
                .catch(e => {
                    console.log("Error occurred, status:", e);
                })


        // Eg: (GET Method - using async await function) 
            async function fetchAPIData() {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

                    if(!response.ok) {
                        throw new Error("HTTP error!, status:", response.status);
                    } else {
                        const data = await response.json();     // parse response data in json format
                    }
                } catch(e) {
                    console.log("Error occurred, status:", e);
                }
            }

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ GET Method $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Headers $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // Headers are an extra information send from both client or server side, 
        // It may be request headers or response headers

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Headers $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ POST Method $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // Eg: (POST Method - Promise-then method)
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                header: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({      // stringify the JSON data
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                })
            })
                .then(response => {
                    if(!response.ok) {
                        throw new Error("HTTP error!, status:", response.status);
                    } else {
                        return response.json();     // parse response data in json format
                    }
                })
                .then(data => {
                    console.log("API data:", data);

                    // code to do with receiving API `data`
                })
                .catch(e => {
                    console.log("Error occurred, status:", e);
                })

        // Eg: (POST Method - async await function)
            async function sendPOSTData() {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                        method: "POST",
                        header: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({      // stringify the JSON data
                            title: 'foo',
                            body: 'bar',
                            userId: 1
                        })
                    });

                    if(!response.ok) {
                        throw new Error("HTTP Error occurrred!!!, status", response.status);
                    } else {
                        const data = await response.json();     // parse response data in json format

                        console.log("POST data:", data);
                    }
                } catch(e) {
                    console.log("Error occurred!! status:", e);
                }
            }

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ POST Method $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ PUT Method $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // Eg: (PUT Method - Promise-then method)
            fetch("https://jsonplaceholder.typicode.com/posts/1", {
                method: "PUT",
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({      // stringify the JSON data
                    id: 1,
                    title: 'Updated Title',
                    body: 'Updated Body',
                    userId: 1
                })
            })
            .then(response => {
                if(!response.ok) {
                    console.log("Response HTTP error occurred!!!, status:", response.status);
                } else {
                    return response.json();         // parse response data in json format
                }
            })
            .then(data => {
                console.log("API data Updated:", data);

                // code to do with updated API `data`
            })
            .catch(e => {
                console.log("Error occurred!!, status:", e);
            })

        // Eg: (PUT Method - async await function)
            async function APIUpdateData() {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
                        method: "PUT",
                        header: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({      // stringify the JSON data
                            id: 1,
                            title: 'Updated Title',
                            body: 'Updated Body',
                            userId: 1
                        })
                    });

                    if(!response.ok) {
                        throw new Error("Response HTTP Error occurred!, status", response.status);
                    } else {
                        const data = await response.json();         // parse response data in json format

                        console.log("Updated Data received: ", data);
                    }
                } catch(e) {
                    console.log("Error occurred! Error Detail:", e);
                }
            }

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ PUT Method $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Fetch API $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //