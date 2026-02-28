// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Hell $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // Callback is used for handle asynchronous operations like reading files, making API requests and working with a timers.

    // When there are accessive nesting function calls, it becomes difficult to read, debug & maintain the code. Such a situation is leads to a problem known as `Callback Hell`.
    
    // To overcome from this problem we are using promise object and async/await function which improves the code readability and maintainability. 


    
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

        console.log("Fetching Data1...");
        getData(1, () => {
            console.log("Fetching Data2...");
            getData(2, () => {
                console.log("Fetching Data3...");
                getData(3, () => {
                    console.log("All data successfully fetched!!!!");
                })
            })
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

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Hell $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Hell (Best Example to Understand) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // 1) Login User
        // 2) Get User Profile
        // 3) Get user posts
        // 4) Get post comments

        /*
        function loginUser(username, password, callback) {
            console.log("Fetching User...");
            
            setTimeout(() => {
                if(username !== "john" || password !== "1234") {
                    return callback("Invalid username or password!!!", null);
                }
                
                const user = {
                    id: 1,
                    name: "john",
                    password: "1234"
                }
                
                callback(null, user);
            }, 2000);
        }

        function getUserProfile(userId, callback) {
            console.log("Getting User Profile using 'userId'...");
            
            setTimeout(() => {
                if(!userId) {
                    return callback("User ID not found!!!", null);    
                }
                
                const profile = {
                    id: 101,
                    name: "Shahrukh Khan"
                };
                
                callback(null, profile);
            }, 2000);
        }

        function getUserPosts(profileId, callback) {
            console.log("Fetching User's posts using 'profileId'...");
            
            setTimeout(() => {
                if(!profileId) {
                    return callback("Invalid Profile Id!!!", null);
                }
                const posts = [
                    { id: 101, title: "post1", description: "post1 description" },
                    { id: 102, title: "post2", description: "post2 description" }
                ];
                
                callback(null, posts);
            }, 2000);
        }

        function getPostComments(postId, callback) {
            console.log("Fetching posts comments using 'postId'...");
            
            setTimeout(() => {
                if(!postId) {
                    return callback("Post ID missing!!!", null);
                }
                
                const comments = [
                    "Nice",
                    "Awesome",
                    "I am not agreed!!!"
                ];
                
                callback(null, comments);
            }, 2000);
        }

        loginUser("john", "1234", function(err, user) {
            if(err) {
                return console.log("Error: " + err); 
            }
            
            getUserProfile(user.id, function(err, profile) {
                if(err) {
                    return console.log("Error: " + err); 
                }
                
                getUserPosts(profile.id, function(err, posts) {
                    if(err) {
                        return console.log("Error: " + err);
                    }
                    
                    getPostComments(posts[0].id, function(err, comments) {
                        console.log("Comments: " + comments);
                    });
                });
            });
        });
        */

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Hell (Best Example to Understand) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //