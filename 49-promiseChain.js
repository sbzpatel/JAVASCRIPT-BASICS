// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Promise Chain $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // Promise chaining is a JavaScript technique that allow us to run multiple asynchronous tasks in a sequence.
    // A .then() method allows to chain multiple promises, creating a sequence of asynchronous operations that execute one after other complete.
    // A .catch() method is used to handle any errors that occurs in the promise chain when operation failed.

    // Eg:
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

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

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

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // Here we required the output to fetch data1 after 4 secs and then after 4 secs fetch data2 as below in asynchronous manner

        /* console.log("fetching data1...");   // run 1st
        let p1 = asyncFunc();   // run 2nd
        p1.then((res) => {
            // console.log(res);

            console.log("fetching data2...");   // run 3rd

            let p2 = asyncFunc2();  // run 4th

            p2.then((res) => {
                // console.log(res);
            })
        }); */

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // Even we can simplify above code with below code for more convinient

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
    
        // This is a concept called "Promise chain" where we chain one Promise with another Promise to achieve asynchronous output

        // Eg:
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

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Promise Chain $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Promise Chain (Best Example to Understand) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // 1) Login User
        // 2) Get User Profile
        // 3) Get user posts
        // 4) Get post comments

        /*          
        function loginUser(username, password) {
            console.log("Fetching User...");
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(username !== "john" || password !== "1234") {
                        reject("Invalid username or password!!!");
                    } else {
                        const user = {
                            id: 1,
                            name: "john",
                            password: "1234"
                        }
                        
                        resolve(user);
                    }
                }, 2000);
            })
        }

        function getUserProfile(userId) {
            console.log("Getting User Profile using 'userId'...");
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(!userId) {
                        reject("User ID not found!!!");    
                    } else {
                        const profile = {
                            id: 101,
                            name: "Shahrukh Khan"
                        };
                        
                        resolve(profile);
                    }
                }, 2000);
            });
        }

        function getUserPosts(profileId) {
            console.log("Fetching User's posts using 'profileId'...");
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(!profileId) {
                        reject("Invalid Profile Id!!!");
                    } else {
                        const posts = [
                            { id: 101, title: "post1", description: "post1 description" },
                            { id: 102, title: "post2", description: "post2 description" }
                        ];
                        
                        resolve(posts);
                    }
                }, 2000);
            });
        }

        function getPostComments(postId) {
            console.log("Fetching posts comments using 'postId'...");
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(!postId) {
                        reject("Post ID missing!!!");
                    } else {
                        const comments = [
                            "Nice",
                            "Awesome",
                            "I am not agreed!!!"
                        ];
                        
                        resolve(comments);
                    }
                }, 2000);
            });
        }

        loginUser("john", "1234")
            .then(user => getUserProfile(user.id))
            .then(profile => getUserPosts(profile.id))
            .then(posts => getPostComments(posts[0].id))
            .then(comments => console.log("Comments: " + comments.join(",")))
            .catch(error => console.log(error));
        */

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Promise Chain (Best Example to Understand) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //