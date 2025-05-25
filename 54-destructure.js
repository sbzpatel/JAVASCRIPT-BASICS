// Destructuring in javascript is a powerful way to unpack the items of an array or properties of an objects in a distinct variables.

// We can destructure arrays & objects both of.

// @@@@@@@@@@@@@@@@@@@@@ Array Destructuring @@@@@@@@@@@@@@@@@@@@@ //

    // Basic Syntax

        const arr = [10, 30, 50];
        const [a, b, c] = arr;

        console.log(a);     // 10
        console.log(b);     // 30
        console.log(c);     // 50

    

    // Skipping items

        const [first, , third, ] = [1,3,6,0];

        console.log(first);     // 1
        console.log(third);     // 6



    // Default Values

        const [x = 200, y=400] = [1];

        console.log(x);     // 1
        console.log(y);     // 400 (prints default value)



    // Swapping Variables

        let n1 = 1, n2 = 2;
        [n2, n1] = [n1, n2];

        console.log(n1);    // 2
        console.log(n2);    // 1



    // Nested Array

        let [m, [n, o]] = [1, [2, 3]];
        console.log(n);     // 2


// @@@@@@@@@@@@@@@@@@@@@ Array Destructuring @@@@@@@@@@@@@@@@@@@@@ //



// @@@@@@@@@@@@@@@@@@@@@ Object Destructuring @@@@@@@@@@@@@@@@@@@@@ //

    // Basic Syntax

        const person = {
            fullname: "Shahbaz Patel",
            email: "shabya@gmail.com",
            isMarried: true,
            age: 35
        }


        const {name, email, isMarried, age} = person;

        console.log(`Name: ${fullname}`);       // Name: Shahbaz Patel
        console.log(`Email: ${email}`);     // Email: shabya@gmail.com
        console.log(`isMarried: ${isMarried}`);     // isMarried: true
        console.log(`Age: ${age}`);         // Age: 35

    

    // Renaming Variables

        const laptop = {
            brand: "ASUS",
            price: 78500 
        }

        const { brand: maker } = laptop;

        console.log(maker);



    // Nested Objects
    
        const user = {
            info: {
                school: "Anglo Urdu High School, Aurwad"
            }
        }

        const {
            info: { school }
        } = user;

        console.log(school);



    // Destructuring in Function Parameters

        function greet({ name, age }) {
            console.log(`Hello ${name}, age ${age}`);
        }

        const employee = { name: "Bob", age: 30 };
        greet(employee); // Hello Bob, age 30



    // Combine Array & Object Destructuring
    
        const people = [
            { name: "Tom", age: 40 },
            { name: "Sara", age: 32 }
        ];

        const [{ name: firstName }, { age: secondAge }] = people;
        console.log(firstName);     // Tom
        console.log(secondAge);     // 32

// @@@@@@@@@@@@@@@@@@@@@ Object Destructuring @@@@@@@@@@@@@@@@@@@@@ //

