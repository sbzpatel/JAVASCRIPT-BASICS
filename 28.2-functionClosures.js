// ✅ $$$$$$$$$$$$$$$$$ Function Closure $$$$$$$$$$$$$$$$$ ✅ //

    // A closure allows a function to access variables from an outer function even after that outer function has returned.

    // Eg:
      function outerFunction() {
          let outerVariable = "I am Shahbaz Patel!!";
          
          function innerFunction() {
              console.log(outerVariable);         // still can access this outerVariable
          }
          
          return innerFunction;
      }

      const myClosure = outerFunction();
      myClosure();        // Output: "I am outside!"



    // We can use closures in data encapsulation as explained in below example

    // Eg:
      function createCounter() {
        let count = 0;

        return {
          increment: () => ++count,
          getCount: () => count
        };
      }

      const counter = createCounter();
      console.log(counter.increment());       // 1
      console.log(counter.getCount());        // 1



    // Closures are used to create a Function Factories(Creating customized functions) for a specific behaviour

    // Eg:
      function makeMultiplier(factor) {
          return function(num) {
              return num*factor;
          };
      }

      const double = makeMultiplier(2);
      const triple = makeMultiplier(3);

      console.log(double(5))      // Here makes double of given number 5;
      console.log(triple(5))      // Here makes triple of given number 5;  



    // Closures capture the correct variable state when using timeouts, intervals, or event handlers.

    // Eg:
      for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
          console.log(`After ${i} second(s): ${i}`);
        }, i * 1000);
      }

    // Closures allow functions to "remember" results to avoid repeated computation (Memoization/Caching).


    // Below is a Real World Example of Function Closure:

    // Eg:
      function createBankAccount(owner, initialBalance) {
        let balance = initialBalance;

        return {
          getBalance: function() {
            return `${owner}'s Balance: ${balance}`;
          },
          deposit: function(amount) {
            balance += amount;
            return `Deposited ${amount}, Balance: ${balance}`;
          },
          withdraw: function(amount) {
            if(amount > balance) {
              return `Insufficient funds!!`;
            } 
            balance -= amount;
            return `Withdraw ${amount}, Balance: ${balance}`;
          }
        }
      }

      const srkAccount = createBankAccount("Shahrukh Khan", 780000000);
      console.log(srkAccount.getBalance());
      console.log(srkAccount.deposit(500000));
      console.log(srkAccount.withdraw(15000000));


// ✅ $$$$$$$$$$$$$$$$$ Function Closure $$$$$$$$$$$$$$$$$ ✅ //
