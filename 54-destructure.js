// ✅ @@@@@@@@@@@@@@@@@@@@@ JS Destructure @@@@@@@@@@@@@@@@@@@@@ ✅ //

    // Destructuring in JavaScript is a powerful way to unpack the elements of an array or properties of an object in a distinct variables.

    // We can destructure arrays & objects both of.

    // ✅ @@@@@@@@@@@@@@@@@@@@@ Array Destructuring @@@@@@@@@@@@@@@@@@@@@ ✅ //

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Basic Syntax @@@@@@@@@@@@@@@@@@@@@ ✅ //

            const arr = [10, 30, 50];
            const [a, b, c] = arr;

            console.log(a);     // 10
            console.log(b);     // 30
            console.log(c);     // 50

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Basic Syntax @@@@@@@@@@@@@@@@@@@@@ ✅ //

        

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Skipping items @@@@@@@@@@@@@@@@@@@@@ ✅ //

            const [ first, , third, ] = [1,3,6,0];

            console.log(first);     // 1
            console.log(third);     // 6

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Skipping items @@@@@@@@@@@@@@@@@@@@@ ✅ //



        // ✅ @@@@@@@@@@@@@@@@@@@@@ Default Values @@@@@@@@@@@@@@@@@@@@@ ✅ //

            const [x = 200, y=400] = [1];

            console.log(x);     // 1
            console.log(y);     // 400 (prints default value)

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Default Values @@@@@@@@@@@@@@@@@@@@@ ✅ //



        // ✅ @@@@@@@@@@@@@@@@@@@@@ Swapping Variables @@@@@@@@@@@@@@@@@@@@@ ✅ //

            let n1 = 1, n2 = 2;
            [n2, n1] = [n1, n2];

            console.log(n1);    // 2
            console.log(n2);    // 1

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Swapping Variables @@@@@@@@@@@@@@@@@@@@@ ✅ //



        // ✅ @@@@@@@@@@@@@@@@@@@@@ Nested Array @@@@@@@@@@@@@@@@@@@@@ ✅ //

            let [m, [n, o]] = [1, [2, 3]];
            console.log(n);     // 2

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Nested Array @@@@@@@@@@@@@@@@@@@@@ ✅ //


    // ✅ @@@@@@@@@@@@@@@@@@@@@ Array Destructuring @@@@@@@@@@@@@@@@@@@@@ ✅ //



    // ✅ @@@@@@@@@@@@@@@@@@@@@ Object Destructuring @@@@@@@@@@@@@@@@@@@@@ ✅ //

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Basic Syntax @@@@@@@@@@@@@@@@@@@@@ ✅ //

            const person = {
                fullname: "Shahbaz Patel",
                email: "shabya@gmail.com",
                isMarried: true,
                age: 35
            }


            const {fullname, email, isMarried, age} = person;

            console.log(`Name: ${fullname}`);       // Name: Shahbaz Patel
            console.log(`Email: ${email}`);     // Email: shabya@gmail.com
            console.log(`isMarried: ${isMarried}`);     // isMarried: true
            console.log(`Age: ${age}`);         // Age: 35

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Basic Syntax @@@@@@@@@@@@@@@@@@@@@ ✅ //

        

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Renaming Variables @@@@@@@@@@@@@@@@@@@@@ ✅ //

            const laptop = {
                brand: "ASUS",
                price: 78500 
            }

            const { brand: maker } = laptop;

            console.log(maker);

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Renaming Variables @@@@@@@@@@@@@@@@@@@@@ ✅ //



        // ✅ @@@@@@@@@@@@@@@@@@@@@ Nested Objects @@@@@@@@@@@@@@@@@@@@@ ✅ //
        
            const user = {
                info: {
                    school: "Anglo Urdu High School, Aurwad"
                }
            }

            const {
                info: { school }
            } = user;

            console.log(school);

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Nested Objects @@@@@@@@@@@@@@@@@@@@@ ✅ //



        // ✅ @@@@@@@@@@@@@@@@@@@@@ Destructuring in Function Parameters @@@@@@@@@@@@@@@@@@@@@ ✅ //

            function greet({ name, age }) {
                console.log(`Hello ${name}, age ${age}`);
            }

            const employee = { name: "Bob", age: 30 };
            greet(employee); // Hello Bob, age 30

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Destructuring in Function Parameters @@@@@@@@@@@@@@@@@@@@@ ✅ //



        // ✅ @@@@@@@@@@@@@@@@@@@@@ Combined Array of Object Destructuring @@@@@@@@@@@@@@@@@@@@@ ✅ //
        
            const people = [
                { name: "Tom", age: 40 },
                { name: "Sara", age: 32 }
            ];

            const [{ name: firstName }, { age: secondAge }] = people;
            console.log(firstName);     // Tom
            console.log(secondAge);     // 32

        // ✅ @@@@@@@@@@@@@@@@@@@@@ Combined Array of Object Destructuring @@@@@@@@@@@@@@@@@@@@@ ✅ //

    // ✅ @@@@@@@@@@@@@@@@@@@@@ Object Destructuring @@@@@@@@@@@@@@@@@@@@@ ✅ //

// ✅ @@@@@@@@@@@@@@@@@@@@@ JS Destructure @@@@@@@@@@@@@@@@@@@@@ ✅ //