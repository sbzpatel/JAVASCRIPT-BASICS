// ✅ ############## Currying Function ############## ✅ //

    // Currying is a functional programming technique where a function with multiple parameters is transformed into the sequence(series) of functions, each taking single argument at a time.

    // Eg:
        // Regular Function //
        // function sum(a,b) {
        //     return a+b;
        // }

        // Currying a regular function //
        function first(a) {
            return function withSum(b) {
                return a*b;
            }
        }

        let sum = first(5);
        console.log(sum(4));
        console.log(sum(5));

    // 🎯 ############## Why Is Currying Useful? ############## 🎯 //
        // 1) Partial Application (Pre-fill arguments) ->>
            // Currying lets you create specialized versions of function by pre-setting some arguments.

            // Eg:
                function greet(greeting) {
                    return function(name) {
                        return `${greeting} ${name}!`;
                    }
                }

                const sayHello = greet("Hello");
                console.log(sayHello("Shahbaz"));       // // "Hello, Shahbaz!"


        // 2) Function Reuse and Composition ->>
            // We can build reusable building blocks and combine them more easily.

            // Eg:
                const add = a => b => a+b;

                const add5 = add(5);
                console.log(add5(10));      // 15


        // 3) Cleaner Syntax in Functional Chains ->>
            // Currying pairs well with functional methods like map(), filter() and reduce().

            // Eg:
                const users = [
                    { name: "Shahrukh", age: 56 },
                    { name: "Shahbaz", age: 30 }
                ]

                const isOlderThan = age => user => user.age > age;

                const result = users.filter(isOlderThan(35));

                console.log(result);    // [ { name: 'Shahrukh', age: 56 } ]


        // 4) Improved Readability & Debugging ->>
            // Breaking down functions into smaller, single-argument steps makes them easier to read and test.
            

        // 5) Avoid Repetition ->>
            // We avoid writing the same code multiple times by reusing pre-curried functions.

    // 🎯 ############## Why Is Currying Useful? ############## 🎯 //

// ✅ ############## Currying Function ############## ✅ //


// ✅ ############## Currying Function (Real-World Examples) ############## ✅ //

    // Eg1:
        const products = [
          { name: "iPhone 15", category: "Mobile", price: 79999, rating: 4.8 },
          { name: "OnePlus 12", category: "Mobile", price: 55999, rating: 4.5 },
          { name: "Dell Laptop", category: "Laptop", price: 120000, rating: 4.6 },
        ];

        function filterProducts(category, priceRange, rating) {
          return products.filter(p => 
            p.category === "Mobile" &&
            p.price <= priceRange &&
            p.rating >= rating
          )
        }


        function filterProducts(category) {
          return function(priceRange) {
            return function(rating) {
              return products.filter(p => 
                p.category === category &&
                p.price <= priceRange &&
                p.rating >= rating
              )
            }
          }
        }

        // console.log(filterProducts("Mobile")(60000)(4.5));

        const filteredProducts = filterProducts("Mobile");
        const mobileUnder60k = filteredProducts(60000);
        const bestMobiles = mobileUnder60k(4.5);

        console.log(bestMobiles);

        

    // Eg2:
        function applyDiscount(category) {
            return function(discount) {
                return function(price) {
                return `${category} Price - ${price - (price * discount / 100)}`;   
                }
            }
        }

        const mobileDiscount = applyDiscount("Mobile")(10);

        console.log(mobileDiscount(50000));

        const laptopDiscount = applyDiscount("Laptop")(15);
        console.log(laptopDiscount(100000));

// ✅ ############## Currying Function (Real-World Examples) ############## ✅ //