// ✅ $$$$$$$$$$$$$$$$$ Call, Apply, Bind Methods $$$$$$$$$$$$$$$$$ ✅ //

    // These are methods available with a JavaScript function to let explicitly set the value of `this` during function invocation.

    // 📌 $$$$$$$$$$$$$$$$$ call() Method $$$$$$$$$$$$$$$$$ 📌 //

        // 1) Calls the function immediately
        // 2) We pass arguments individually

        // Eg:
            function greet(greeting) {
                console.log(greeting+" "+this.fname)
            }

            const person = {fname: "Shahbaz"};

            greet.call(person, "Hello");     // Hello Shahbaz

        // Eg: (Practical example)
            function applyDiscount(discount) {
                console.log(`${this.name} after ${discount}% discount: ${(this.price - (this.price * discount /100)).toLocaleString("en-IN", { style: "currency", currency: "INR" })}`)
            }

            const laptop = {
                name: "Laptop",
                price: 89000
            };

            const mobile = {
                name: "iPhone 16",
                price: 79900
            }

            applyDiscount.call(laptop, 28);     // Laptop after 28% discount: ₹64,080.00

            applyDiscount.call(mobile, 18);     // iPhone 16 after 18% discount: ₹65,518.00

    // 📌 $$$$$$$$$$$$$$$$$ call() Method $$$$$$$$$$$$$$$$$ 📌 //


    // 📌 $$$$$$$$$$$$$$$$$ apply() Method $$$$$$$$$$$$$$$$$ 📌 //

        // 1) Calls the function immediately
        // 2) We should pass arguments in a single array

        // Eg:
            function greet1(greeting1, greeting2) {
                console.log(`${greeting1}, ${greeting2} ${this.firstName} ${this.lastName}.`);
            }

            const personn = {firstName: "Shahbaz", lastName: "Patel"}

            greet1.apply(personn, ["Hello", "How R U"]);        // Hello, How R U Shahbaz Patel.

    // 📌 $$$$$$$$$$$$$$$$$ apply() Method $$$$$$$$$$$$$$$$$ 📌 //

    
    // apply() & call() both are works simillarly but major difference is call() takes single or multiple value(s) and apply() takes a single array as an argument during function call.


    // 📌 $$$$$$$$$$$$$$$$$ bind() Method $$$$$$$$$$$$$$$$$ 📌 //

        // 1) Does not call the function immediately
        // 2) Returns a new function with this and optional arguments which were permanently bound

        // Eg: 
            function greet3(greet) {
                console.log(`${greet} ${this.name}`);
            }

            const person3 = {name: "Shahbaz"};
            
            const greetAlice = greet3.bind(person3, "Hey");
            greetAlice();       // "Hey, Alice"

    // 📌 $$$$$$$$$$$$$$$$$ bind() Method $$$$$$$$$$$$$$$$$ 📌 //


    // ✅ $$$$$$$$$$$$$$$$$ Practical Use Case Example $$$$$$$$$$$$$$$$$ ✅ //

        // Eg:
            const person1 = {
                name: "Shahbaz",
                greet: function() {
                    console.log(`Hello, ${this.name}!`);
                }
            }

            const anotherPerson = {name:"Kaleem"};

            person1.greet.bind(anotherPerson);
            person1.greet.apply(anotherPerson);
            const boundGreet = person1.greet.bind(anotherPerson);
            boundGreet();



        // Eg:
            // function sayHello() {
            //     console.log(`Hello, ${this.name}...`);
            // }
            
            // sayHello.call({name: "Shahrukh"});
            // sayHello.call({name: "Salmaan"});



        // Eg:
            // const numbers = [15, 2, 99, 7];
            // const maxNumber = Math.max.apply(null, numbers);
            // console.log(maxNumber);



        // Eg:
            // function multi(x,y) {
            //     return x*y;
            // }
            
            // const double = multi.bind(null, 2);
            
            // console.log(double(10));      // 20
            // console.log(double(7));        // 14

    // ✅ $$$$$$$$$$$$$$$$$ Practical Use Case Example $$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$ Call, Apply, Bind Methods $$$$$$$$$$$$$$$$$ ✅ //



// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Practice Questions (call(), apply(), bind() methoda) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    
    // #1 =>
        // const student1 = {name: "Chagya"};
        // const student2 = {name: "Fugya"};
        
        // function introduce() {
        //     console.log(`Hi, I'm ${this.name}.`);
        // }
        
        // introduce.call(student1);
        // introduce.call(student2);



    // #2 =>
        // const nums = [10, 55, 3, 98, 44];

        // console.log(Math.max.apply(null, nums));



    // #3 =>
        // const person = {
        //   name: "Rahul"
        // };
        
        // function greet(greeting) {
        //   console.log(`${greeting}, ${this.name}`);
        // }

        // const greetRahul = greet.bind(person);
        // greetRahul("Hello");



    // #4 =>
        // const car1 = {
        //       brand: "Tesla",
        //       show() {
        //         console.log(`Brand is ${this.brand}`);
        //       }
        // };
        
        // const car2 = { brand: "BMW" };

        // car1.show.call(car2);



    // #5 =>
        // function sum() {
        //     let total = 0;
        //     for(let i=0;i<arguments.length;i++) {
        //         total +=arguments[i];
        //     }
        //     return total;
        // }

        // const result = sum.apply(null, [2, 5, 8, 10]);
        // console.log(result);



    // #6 =>
        // const user = {
        //   name: "Shahbaz",
        //   showName() {
        //     console.log(this.name);
        //   }
        // };

        // setTimeout(user.showName.bind(user), 2000);



    // #7 =>
        // function details(city, age) {
        //   console.log(`${this.name} from ${city}, age ${age}`);
        // }
        
        // const obj = { name: "Aditya" };

        // details.apply(obj, ["Mumbai", 60]);



    // #8 =>
        // const arrayLike = { 0: "A", 1: "B", 2: "C", length: 3 };

        // console.log(Array.prototype.slice.apply(arrayLike));



    // #9 =>
        // function multiply(a, b) {
        //   return a * b;
        // }

        // const double = multiply.bind(null, 2);
        // console.log(double(10))     // 20

// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Practice Questions (call(), apply(), bind() methoda) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //


