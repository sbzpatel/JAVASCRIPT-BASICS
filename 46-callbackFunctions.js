// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // A callback is a function passed as an argument to another function during invocation. The callback function starts to execute when another function has finished its execution.
    
    // Callbacks are often used to handle asynchronous events such as Network Requests, File I/O operations and working with a timers.


    // Eg:
        function sum(a, b) {        // callback Function definition
            console.log(a + b);
        }

        function calculator(a, b, sumCallback) {    // we pass this callback function 'sumCallback' as an argument in function 'calculator'
            sumCallback(a, b);      // callback Function called
        }

        calculator(5, 5, sum);  // dont pass callBack function like sum(), its wrong

        calculator(8, 6, (a, b) => {    // here we directly pass the function definition by arrow function
            console.log(a + b);
        })



    // callback function is run synchronously and asynchronously as below where we are going to see 
    // the function hello runs asynchronously

    // Eg:
        const hello = () => {
            console.log("Hello Sbz!!!, how are u...");
        }

        setTimeout(hello, 3000);    // hello function will call after 3 seconds



    // Below code shows the "45-asyncExecution.js" program execution in sequentially using callback function
    // Here all the Statements are executes sequentially, after executes Statement1 goes to the Statment2 and after completing in 3 seconds then and only goes for Statement3 and Statement4

    // Eg:
        function initialExecution(callbackFun) {
            console.log("Statement1 executes...");
            
            setTimeout(() => {
                console.log("Statement2 executes...");
                
                callbackFun();
            }, 3000)
        }

        function afterExecution() {
            console.log("Statement3 executes...");
            console.log("Statement4 executes...");
        }

        initialExecution(afterExecution);

        // Above code shows the "45-asyncExecution.js" program's execution sequentially using callback function.

    // Eg: (Food Ordering with callback function)
        function orderFood(foodItem, callback) {
          console.log(`Ordering ${foodItem}...`);
        
          setTimeout(() => {
            console.log(`${foodItem} is ready to prepare.`);
            callback(foodItem);
          }, 3000);
        }

        orderFood("Pizza", (food) => {
          console.log(`Now eating ${food}. Yum!!!`);
        })

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Callback Function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Practice Questions (Callback Function) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // / #1 =>
    // function doHomework(subject, callback) {
    //     console.log(`Starting my ${subject} homework...`);
    //     callback(subject);
    // }
    
    // doHomework("Math", function(subject) {
    //     console.log(`I am done with (${subject} homework)!!!`);
    // });




    // #2 =>
        // function calculator(a, b, callback) {
        //     let result = a+b;
        //     callback(a,b,result);
        // }
        
        // calculator(5, 4, (a, b, result) => {
        //     console.log(`Addition of ${a} & ${b} is ${a+b}.`);
        // })




    // #3 =>
        // function performAction(data, callback) {
        //     setTimeout(() => {
        //         const processedData = data.toUpperCase();
        //         callback(processedData);
        //     }, 1000)
        // }

        // performAction("Shahrukh Khan", function(result) {
        //     console.log(`Result(Processed in UpperCase): ${result}`);
        // })




    // #4 =>
        // function greet(name, callback) {
        //     console.log(`Hello, ${name}!!!`);
        //     callback(name);
        // }

        // greet("Shahrukh Khan", function(str) {
        //     console.log(`Goodbye ${str}...`);
        // })




    // #5 =>
        // function sayAfterDelay(message, callback) {
        //     setTimeout(() => {
        //         console.log(message);
        //         callback();
        //     }, 1000);
        // }

        // sayAfterDelay("Call me after your work done...", function() {
        //     console.log("I can come for pickup to u in 5 minutes!!!");
        // });




    // #6 => (Custom map function)
        // function myMap(arr, callback) {
        //     const result = [];
        //     for(let i=0; i<arr.length; i++) {
        //         result.push(callback(arr[i]));
        //     }
        //     return result;
        // }

        // const squaredMap = myMap([1,2,3,4,5], function(singleItem) {
        //     return singleItem * 2;
        // });
        // console.log(squaredMap);




    // #7 =>
        // function fetchUser(id, callback) {
        //   console.log("Fetching user...");
        
        //   setTimeout(function() {
        //     const user = { id, name: "River Stone" };
        //     callback(user);
        //   }, 1500);
        // }
        
        // fetchUser(10, function(user) {
        //   console.log("User received:", user);
        // });




    // #8 =>
        // function step1(callback) {
        //     setTimeout(() => {
        //         console.log("step1 completed...");
        //         callback();
        //     }, 1000);
        // }

        // function step2(callback) {
        //     setTimeout(() => {
        //         console.log("step2 completed...");
        //         callback();
        //     }, 1000);
        // }
        
        // function step3(callback) {
        //     setTimeout(() => {
        //         console.log("step3 completed...");
        //         callback();
        //     }, 1000);
        // }
        
        // step1(function() {
        //     step2(function() {
        //         step3(function() {
        //             console.log("All steps are successfully completed.");
        //             console.log("Final output is @#!@#%#$%");
        //         });
        //     });
        // });
        
        
        
    // #9 =>
        // function processData(data, callback) {
        //     const result = data * 2;
        //     console.log("Data processed successfully, printing final output...");
        //     callback(result);
        // }

        // processData(5, function(res) {
        //     console.log(`Final Output: ${res}`);
        // })



    // #10 =>
        // function fetchUser(callback) {
        //     setTimeout(() => {
        //         callback({ id: 1, name: "srk" });
        //     }, 3000);
        // }

        // fetchUser(function(user) {
        //     console.log(`Fetched User: ${JSON.stringify(user)}`);
        // });
        
        
        
    // #11 =>
        // function getUser(id, callback) {
        //     if(id <= 0) {
        //         callback("Invalid ID", null);
        //     } else {
        //         callback(null, { id: 1, name: "srk" });
        //     }
        // }

        // getUser(-1, function(err, res) {
        //     if(err) return console.error(err);
        //     console.log(res);
        // });
        
        
        
    // #12 =>
        // function readFile(successcallback, errorcallback) {
        //     console.log(Math.random());
        //     const success = Math.random() > 0.5;
        //     console.log(success);
        //     if(success) 
        //     {
        //         successcallback("File read successfully...");
        //     } else 
        //     {
        //         errorcallback("Failed to read file!!!");
        //     }
        // }

        // readFile(successRes => console.log(successRes),
        // errorMessage => console.error(errorMessage)
        // );
        
        
        
    // #13 =>
        // function taskOne(callback) {
        //   console.log("Task 1 started");
        //   setTimeout(() => {
        //     console.log("Task 1 complete");
        //     callback();
        //   }, 1000);
        // }

        // function taskTwo() {
        //   console.log("Task 2 complete");
        // }

        // taskOne(taskTwo);



    // #14 =>
        // function greetUser(name, callback) {
        //     console.log(`Hello ${name}`);
        //     callback();
        // }

        // greetUser("Shahrukh Khan", function() {
        //     console.log("Welcome to Javascript");
        // })



    // #15 =>
        // function calculate(a,b,callback) {
        //     callback(a,b);
        // }

        // calculate(10, 5, function(a, b) {
        //     console.log(`Addition: ${a+b}`);
        //     console.log(`Substraction: ${a-b}`);
        //     console.log(`Multiplication: ${a*b}`);
        // })



    // #16 =>
        // function processArray(arr, callback) {
        //     const result = [];
        //     for(let i=0;i<arr.length;i++) {
        //         result.push(callback(arr[i]));
        //     }
        //     return result;
        // }

        // const multipleof2Arr = processArray([1,2,3,4,5], function(singleItem) {
        //     return singleItem * 2;
        // });

        // console.log(multipleof2Arr);



    // #17 =>
        // function getUser(id, callback) {
        //     if(id <= 0) {
        //         callback("Error: Invalid ID", null);
        //     } else {
        //         callback(null, { id: 1, name: "SRK" });
        //     }
        // }

        // getUser(1, (err, res) => {
        //     if(err) return console.error(err);
        //     console.log(res)
        // })



    // #18 =>
        // function fetchData(callback) {
        //     message = "Data loaded successfully";
        //     console.log("Fetching data...");
        //     setTimeout(() => {
        //         callback(message);
        //     }, 2000);
        // }

        // fetchData(function(mess) {
        //     console.log(mess);
        // })



    // #19 =>
        // function loginUser(callback) {
        //     setTimeout(() => {
        //         console.log("Logging in...");
        //         callback();
        //     }, 1000);
        // }

        // function fetchUserdata(callback) {
        //     setTimeout(() => {
        //         console.log("User data fetched...");
        //         callback();
        //     }, 1000);
        // }

        // function displayDashboard() {
        //     setTimeout(() => {
        //         console.log("Dashboard displayed!!!");
        //     }, 1000);
        // }

        // loginUser(() => {
        //     fetchUserdata(() => {
        //         displayDashboard();
        //     })
        // });



    // #20 =>
        // function customFilter(nums, callback) {
        //     let filteredNums = [];
        //     for(let i=0;i<nums.length;i++) {
        //         filteredNums.push(callback(nums[i]));
        //     }
        //     return filteredNums;
        // }

        // const filteredNums = customFilter([2,4,7,8,4,9,12], (singleItem) => {
        //     if(singleItem % 2 == 0) {
        //         return singleItem;
        //     }
        // })

        // console.log(filteredNums);



    // #21 =>
        // function readFile(successCallback, errorCallback) {
        //     const randomNum = Math.random();
        //     console.log(randomNum);
        //     const result = randomNum > 0.5;
        //     if(result) {
        //         successCallback("File loaded...");
        //     } else {
        //         errorCallback("File not found!!!");
        //     }
        // }

        // readFile(res => console.log(res), err => console.error(err));
        
        
        
    // #22 =>
        // function fetchUserData(userId, callback) {
        //     console.log("Fetching user data...");
            
        //     setTimeout(() => {
        //         const user = {
        //             id: userId,
        //             name: "Shahrukh Khan",
        //             email: "bsdkSrk@gmail.com"
        //         }
        //         console.log("User data fetched successfully...");
        //         callback(user);
                
        //     }, 2000);
        // }

        // fetchUserData(1, function(user) {
        //     console.log(`User Id: ${user.id}`);
        //     console.log(`User Name: ${user.name}`);
        //     console.log(`User Email: ${user.email}`);
        // });
        

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Practice Questions (Callback Function) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //