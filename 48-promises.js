// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ JavaScript Promises $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // Promise object is a solution to callback hell.

    // A Promise is a JS Object which represents the eventual completion(or failure) status of an asynchronous operation and it returns the resulting value.

    // Each Promise has one out of below 3 states:
        // ✅ 1) Pending: The initial state, where the operation has not completed yet.
        // ✅ 2) Fulfilled(Resolved): The operation completed successfully.
        // ✅ 3) Rejected: The operation gets failed.

    // Once a promise is created, it can be used with .then() & .catch() methods to handle its fulfilled & rejected states respectively. 	

    // The .then() method allows to chain multiple promises, creating a sequence of asynchronous operations that executes one after another completes.

    // The .catch() method is used to handle any errors that occurs in the promise chain when operation failed.

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
    // ✅ 1) Pending - this state occurred when no any promise return in a promise object
    // ✅ 2) Resolved(fulfilled) - this state occurred when any value successfully returned without any error
    // ✅ 3) Reject - this state occurred when any error occurred with some response from promise object

    // Basically we don't creates promise ourself, but when we work with APIs then the promises are creates at API side, so we can get the state accordingly

    function getData(dataId) {
        console.log("Fetching Data"+dataId+"...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data"+dataId+" successfully fetched.");
                
                resolve("success");
            }, 3000)
        })
    }

    // Now above we saw the concept how to change the state of the promises according to our result, 
    // but we can use it through using then() or catch(), then() use if promise resolve or use catch() if promise rejects where we handle or getting the errors

    // ✅ Syntax - promise.then((res) => {...})    // .then contain function which is executes only when promise fulfill successfully
    // ✅ Syntax - promise.catch((res) => {...})   // simillarly .catch contain function which is executes only when promise rejected

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
    });



    // Eg: (Get Weather data of cities with Promise object)
        function getWeather(city) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(city === "London") {
                        resolve("☀️ Sunny, 25°C");
                    } else {
                        reject("❌ Weather data not found for this city");
                    }
                }, 3000);
            })
        }

        getWeather("London")
            .then((response) => {
                console.log("Weather data received: " + response);
            })
            .catch((e) => {
                console.log("Error: " + e);
            })

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ JavaScript Promises $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Practice Questions (Promises) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // #01 =>
	// function doWork(callback) {
	//     isReady = false;

	//     if(isReady) {
	//         callback(null, "Everything worked fine!!!");
	//     } else {
	//         callback("Something went wrong...", null);
	//     }
	// }

	// doWork((err, res) => {
	//     if(err) {
	//         console.error(err);
	//     } else {
	//         console.log(res);
	//     }
	// })




	// const promise = new Promise((resolve, reject) => {
	//     const isReady = true;
		
	//     if(isReady) {
	//         resolve("Everthing worked fine!!!");
	//     } else {
	//         reject("Something went wrong...");
	//     }
	// });

	// promise
	// .then((res) => {
	//     console.log(res);
	// })
	// .catch((err) => {
	//     console.log(err);
	// })



    // #02 =>
        // function getWeather(city, callback) {
        //     if(city === "London") {
        //         callback(null, "☀️ Sunny, 25°C");
        //     } else {
        //         callback("❌ Weather data not found for this city", null)
        //     }
        // }

        // getWeather("New york", (err, res) => {
        //     if(err) console.error(err);
        //     else console.log(res);
        // })


        // function getWeather(city) {
        //     return new Promise((resolve, reject) => {
        //         if(city === "London") {
        //             resolve("☀️ Sunny, 25°C");
        //         } else {
        //             reject("❌ Weather data not found for this city");
        //         }
        //     })
        // }

        // getWeather("Beijing")
        // .then(res => console.log(res))
        // .catch(err => console.error(err));



    // #03 =>
        // const fetchData = new Promise((resolve, reject) => {
        //     message = "Data loaded successfully...";
            
        //     console.log("Fetching data...");
        //     setTimeout(() => {
        //         if(message) {
        //             resolve(message);
        //         } else {
        //             reject("Something went wrong!!!");
        //         }
        //     }, 2000);
        // })

        // fetchData
        // .then(res => console.log(res))
        // .catch(err => console.error(err));



    // #04 =>
        // const promise = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve("Data loaded...");
        //     }, 2000);
        // });

        // promise
        // .then(res => console.log(res))
        // .catch(err => console.error(err))
        // .finally(() => {
        //     console.log("Operation completed!!!");
        // })



    // #05 =>
        // const promise = new Promise((resolve, reject) => {
        //     const result = Math.random() > 0.5;
        //     if(result) {
        //         resolve("Operation completed...");
        //     } else {
        //         reject("Something went wrong!!!");
        //     }
        // })

        // promise
        // .then(res => console.log(res))
        // .catch(err => console.log(err));



    // #06 =>
        // function loginUser() {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             console.log("User logged in...");
        //             resolve();
        //         }, 1000);
        //     });
        // }

        // function getUserDetails() {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             console.log("User details fetched...");
        //             resolve();
        //         }, 1000);
        //     })
        // }

        // function showDashboard() {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             console.log("Dashboard displayed...");
        //             resolve();
        //         }, 1000);
        //     })
        // }

        // loginUser()
        // .then(getUserDetails)
        // .then(showDashboard)
        // .catch(console.error);



    // #07 =>
        // const loadPosts = new Promise(resolve => setTimeout(() => resolve("Posts loaded"), 1000));
        // const loadComments = new Promise(resolve => setTimeout(() => resolve("Comments loaded"), 1000));
        // const loadLikes = new Promise(resolve => setTimeout(() => resolve("Likes loaded"), 1000));

        // Promise.all([loadPosts, loadComments, loadLikes])
        // .then(() => console.log("All data loaded"))
        // .catch(console.error);



    // #08 =>
        // const download = (id, time) => new Promise((resolve) => setTimeout(() => resolve(`File ${id} downloaded...`), time));
        // const download = (id, time) => {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //            resolve(`File ${id} downloaded!!!`); 
        //         }, time)
        //     })
        // }

        // Promise.race([
        //     download(1, Math.random() * 3000),
        //     download(2, Math.random() * 3000),
        //     download(3, Math.random() * 3000)
        // ]).then(console.log);



    // #09 =>
        // const getData = new Promise(resolve => setTimeout(() => resolve("Data recieved!!!"), 1000));

        // getData.then(res => console.log(res));



    // #10 =>
        // fetchUser()
        //   .then(getPosts)
        //   .then(showDashboard)
        //   .catch(console.error);

        // async function loadDashboard() {
        //     try {
        //         const user = await fetchUser();
        //         const posts = await getPosts(user);
        //         await showDashboard(posts);
        //     } catch(error) {
        //         console.log(error);
        //     }
        // }



    // #11 =>
        // const result = new Promise(resolve => console.log("success"));

        // const result = Promise.resolve("success"); 	// (above code in more consice way as below)



    // #12 =>
        // const p1 = Promise.resolve("Success");
        // const p2 = Promise.reject("Error occurred");
        // const p3 = new Promise((resolve) => setTimeout(() => resolve("Done"), 1000));

        // Promise.allSettled([p1, p2, p3]).then(console.log);
        
        
        
    // #13 =>
        // function timeoutPromise(promise, ms) {
        //     const timeout = new Promise((_, reject) => {
        //         setTimeout(() => reject("Timeout exceeded!!!"), ms);
        //     });
        //     return Promise.race([promise, timeout]);
        // }

        // const fetchData = () =>
        //   new Promise((resolve) => setTimeout(() => resolve("Data received"), 3000));

        // timeoutPromise(fetchData(), 4000)
        //     .then(console.log)
        //     .catch(console.error);
        
        
        
    // #14 =>
        // function fakeApi() {
        //     return new Promise((resolve, reject) => {
        //         const success = Math.random() > 0.7;
        //         setTimeout(() => (success? resolve("Success!!!") : reject("API failed...")), 500)
        //     });
        // }

        // async function fetchWithRetry(apiFn, retries) {
        //     for(let i=1;i<=retries;i++) {
        //         try {
        //             const result = await apiFn();
        //             console.log(`Success on attempt ${i}: ${result}`);
        //             return result;
        //         } catch(err) {
        //             console.warn(`Attempt ${i} failed!!!`);
        //             if(i === retries) throw new Error("Max error reached!!!");
        //         }
        //     }
        // }

        // fetchWithRetry(fakeApi, 3).catch(console.error);
        
        
        
        
    // #15 =>
        // function fetchUserData(userId) {
        // 		console.log("Fetching user data...");
                
        // 		return new Promise((resolve, reject) => {
        // 			setTimeout(() => {
        // 				let user = {
        // 					id: userId,
        // 					name: "Shahrukh Khan",
        // 					email: "Srk@gmail.com"
        // 				}
                        
        //                 // user = null;
        //                 if(user) {
        //                     console.log("User data fetched successfully...");
        //                     resolve(user);
        //                 } else {
        //                     reject("User data not available!!!");
        //                 }
        // 			}, 2000);
        // 	});
        // }

        // 	fetchUserData(1)
        // 	.then(user => {
        // 		console.log(`User Id: ${user.id}`);
        // 		console.log(`User Name: ${user.name}`);
        // 		console.log(`User Email: ${user.email}`);
        // 	})
        //  .catch(err => {
        //      console.log(err);
        //  });

    

    // #16 =>
        // function waitFor3Secons() {
        //     return new Promise(resolve => {
        //         setTimeout(() => {
        //             resolve("Done!!!");
        //         }, 3000);
        //     })
        // }

        // waitFor3Secons
        //     .then(msg => {
        //         console.log(msg)
        //     });



    // #17 =>
        // function checkNum(num) {
        //     return new Promise((resolve, reject) => {
        //         if(num >= 10) {
        //             resolve("Valid...");
        //         } else {
        //             reject("Too small number!!!")
        //         }
        //     })
        // }

        // checkNum(1)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    
        
        
    // #18 =>	(Convert the following callback code into a Promise:)
        // function getData(callback) {
        // setTimeout(() => callback("Data received"), 2000);
        // }
        
        // function getData() {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve("Data received");
        //         }, 2000);
        //     });
        // }
        
        
        
    // #19 =>
        // function getUser() {
        //     console.log("Fetching users...");

        //     return new Promise((resolve, reject) => {
        //         const user = {id: 1};
                
        //         resolve(user);
        //     })
        // }

        // function getOrders(userId) {
        //     console.log(`Getting orders of user id ${userId}...`);

        //     return new Promise((resolve, reject) => {
        //         resolve(["Order1", "Order2"]);
        //     })
        // }


        // getUser()
        //     .then(user => {
        //         return getOrders(user.id);
        //     })
        //     .then(orders => {
        //         console.log(`Order details: ${orders}`);
        //     });
        
        
        
    // #20 =>
        // Promise.resolve("Start")
        // .then(res => {
        //     console.log(res);
        //     return Promise.reject("Something went wrong");
        // })
        // .catch(err => console.log("Error:", err));
        
        

    // #21 =>	(Run 3 promises together and print combined results)
        // const p1 = Promise.resolve("A");
        // const p2 = Promise.resolve("B");
        // const p3 = Promise.resolve("C");

        // Promise.all([p1, p2, p3])
        //     .then(result => {
        //         console.log(result);
        //     });
            
            
            
    // #22 =>
        // const fast = new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve("Fast (dhoom machaa le)....");
        //     }, 500);
        // });

        // const slow = new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve("Slow....");
        //     }, 2000);
        // });

        // Promise.race([slow, fast])
        //     .then(msg => {
        //         console.log(msg);
        //     });

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Practice Questions (Promises) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Nested Callbacks, Promise methods & Async-await function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // function getUser(callback) {
    //     setTimeout(() => {
    //         console.log("Fetched user");
    //         callback({ id: 1, name: "Alice" });
    //     }, 1000);
    // }

    function getUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Fetched user");
                resolve({ id: 1, name: "Alice" });
            }, 1000);
        })
    }



    // function getPosts(userId, callback) {
    //     setTimeout(() => {
    //         console.log("Fetched posts for user", userId);
    //         callback([{ id: 101 }, { id: 102 }]);
    //     }, 1000);
    // }

    function getPosts(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Fetched posts for user", userId);
                resolve([{ id: 101 }, { id: 102 }]);
            }, 1000);
        })
    }



    // function getComments(postId, callback) {
    //     setTimeout(() => {
    //         console.log("Fetched comments for post", postId);
    //         callback(["Nice post!", "Very helpful."]);
    //     }, 1000);
    // }

    function getComments(postId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Fetched comments for post", postId);
                resolve(["Nice post!", "Very helpful."]);
            }, 1000);
        })
    }



    // (callback pattern output) =>
            // getUser(user => {
            //     getPosts(user.id, posts => {
            //         getComments(posts.id, comments => {
            //             console.log("Comments:", comments);
            //         })
            //     })
            // })

    // (promise then pattern output) =>
            // getUser()
            // .then(user => getPosts(user.id))
            // .then(posts => getComments(posts[0].id))
            // .then(comments => console.log(comments))
            // .catch(error => console.error(error));


    // (try catch pattern output) =>
            async function showComments() {
                try {
                    const user = await getUser();
                    const posts = await getPosts(user.id);
                    const comments = await getComments(posts[0].id);
                    console.log("Comments:", comments);
                } catch(error) {
                    console.log("Comment fetching Error: " + error);
                }
            }

            showComments();

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Nested Callbacks, Promise methods & Async-await function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //