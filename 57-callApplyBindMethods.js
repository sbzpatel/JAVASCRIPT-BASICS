// The call(), apply() and bind() methods in javascript are used to manually set the value of this in a function (which is especially useful when borrowing methods or controlling context).

// 1) call() ->>
    // Invokes a function immediately, with a specified this value and comma-separated arguments.

    function greet(greeting, name) {
        console.log(`${greeting} ${name}!`);
    }

    greet.call(this, "Hello", "Shahbaz");



// 2) apply() ->>
    // Also invokes immediately, like call(), but takes arguments as an array (or array-like object).

    greet.apply(this, ["Hey", "Kaleem"]);



// 3) bind() ->>
    // Does NOT invoke the function immediately.
    // Instead, it returns a new function with this bound and optionally some preset arguments.

    const greetHello = greet.bind(this, "Love U");
    greetHello("Shabu!!");



// Practical Use Case Example //

    const person = {
        name: "Shahbaz",
        greet: function() {
            console.log(`Hello, ${this.name}!`);
        }
    }

    const anotherPerson = {name:"Kaleem"};

    person.greet.bind(anotherPerson);
    person.greet.apply(anotherPerson);
    const boundGreet = person.greet.bind(anotherPerson);
    boundGreet();

// Practical Use Case Example //




