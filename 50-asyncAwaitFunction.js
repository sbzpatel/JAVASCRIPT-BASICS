// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Async Await Function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // async-await Function is used to handle asynchronous operations that simplify asynchronous code, which makes it more synchronous and readable than traditional Promise chaining or callbacks.

    // `await` pauses the execution of its surrounding async functions until the current promise is settled.

    // Syntax ->> async function myFunc() {...}

    // Eg:
        function asyncFun1() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Data1...");
                    resolve("success");
                }, 3000);
            })
        }
        
        function asyncFun2() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Data2...");
                    resolve("success");
                }, 3000);
            })
        }
        
        async function program() {
            const val1 = await asyncFun1();
            console.log(val1);
            
            const val2 = await asyncFun2();
            console.log(val2);
        }
        
        program();

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Async Await Function $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //