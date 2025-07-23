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

    // ✅ $$$$$$$$$$$$$$$$$ Practical Use Case Example $$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$ Call, Apply, Bind Methods $$$$$$$$$$$$$$$$$ ✅ //