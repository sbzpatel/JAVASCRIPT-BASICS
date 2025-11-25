// ✅ ############## Data Types ############## ✅ //
    // Data is a raw information that is used to store, process, manipulate & display within the program. 

    // Each data has its specific type that determines how it can be use and which type of operations we can perform on it. 

    // Data usage with specific type in programming for a purpose of memory management, which leads to ensures efficient memory allocation, preventing wastage and optimizing performance.

    // There are 2 different categories(types) of data available in JavaScript as below:

        // ✅ 1) Primitive DataTypes => (Number, String, Boolean, Undefined, Null, BigInt, Symbol) 
            // Primitive DataTypes are basic, immutable and store or copy by value. 
        // ✅ 2) Non-Primitive DataTypes (Array, Object, Function, Date, Map, Set)
            // Non-Primitive DataTypes are complex, mutable & store or copy by reference.



        // ✅ ############## Primitive DataTypes ############## ✅ //

            // ✅ ############## Number ############## ✅ //

                // In JavaScript, `Number` datatype represents both integer and floating point number.

                // Eg:
                    let age = 24;       // Integer
                    console.log(typeof age);    // number (Represents numerical value)

                    let percentage = 78.13;     // Floating-point number
                    console.log(typeof percentage);     // number

                    let mstetNegativeMarks = -20    // Negative number
                    console.log(typeof mstetNegativeMarks);     // number

                    let large = 1e6;        // 1000000 (scientific notation)
                    let small = 1e-6;       // 0.000001 


                // 📌 ############## Special Numeric Values ############## 📌 //
                    /*
                    | Value       | Description                                |
                    | ----------- | ------------------------------------------ |
                    | `Infinity`  | Positive infinity                          |
                    | `-Infinity` | Negative infinity                          |
                    | `NaN`       | "Not-a-Number", result of invalid math ops | 
                    */

                    // Eg:
                    console.log(1/0);       // Infinity
                    console.log(-1/0);      // -Infinity
                    console.log("Shahbaz"*10);      // NaN

                // 📌 ############## Special Numeric Values ############## 📌 //


                // 🧠 ############## Number Methods ############## 🧠 //

                    // Eg:
                    let n = 123.456;

                    n.toFixed(2);       // "123.46" — rounds to 2 decimal places
                    n.toString();       // "123.456" — converts to string
                    n.toExponential();      // "1.23456e+2"

                // 🧠 ############## Number Methods ############## 🧠 //

            // ✅ ############## Number ############## ✅ //


            // (String represents sequence of characters enclosed in single or double inverted commas)
            console.log(typeof "Sbz");          // string


            // Boolean means a logical value which can be one out of `true` or `false`, are used for controlling program flow and making decisions.
            let married = true;         // true
            console.log(typeof married);    // boolean


            // `Undefined` represents "absence of a value". When we declares a variable but not initialize any data to it, then JavaScript compiler automatically(implicitly) sets the value `undefined` to it.
            let wifeName;
            console.log(typeof wifeName);   // undefined
            

            // ✅ ############## Optional Chaining (?.) ############## ✅ //

                // This allows safe access to nested properties, returning undefined if an intermediate property is null or undefined.

                let emptyObj = {};

                console.log(emptyObj?.address?.city);       // undefined

            // ✅ ############## Optional Chaining (?.) ############## ✅ //


            // null datatype also same as undefined "no value" but it is explicitly assigned using assignment operator(=).
            let salary = null;
            console.log(typeof salary);     // null variable is treated as an "object"


            // ✅ ############## BigInt ############## ✅ //

                // BigInt is allow to represents integer larger than the safe limit of the `Number` type.

                // We can declare bigInt in 2 ways
                let bigNum = 9007199254740991n;    // way1
                let big1 = BigInt("9007199254740991");      // way2

                console.log(bigNum);       // 9007199254740991n
                console.log(big1);      // 9007199254740991n

            // ✅ ############## BigInt ############## ✅ //


            // ✅ ############## Symbol ############## ✅ //

                // Symbols are introduced in ES6 that represent unique and immutable values.
                // Primarily used as a unique identifiers for object properties, offering a way to avoid naming collision and create a form of weak encapsulation.

                let Id = Symbol("userID");
                console.log(Id);        // Symbol(userID)

                // We can assign symbol to the object's key
                const personn = {
                    name: "Shahbaz Patel",
                    [Id]: 786
                }
                console.log(personn);        // { name: 'Shahbaz Patel', [Symbol(userID)]: 786 }
                console.log(personn[Id]);        
                // 786, Actual key "userID" was hidden to use, in substitute used Symbol "Id"
                // We can access Object property(declare with Symbol) only using bracket([]) notation

                console.log(Object.keys(personn));      // ["name"]     // missing [Id]

            // ✅ ############## Symbol ############## ✅ //

        // ✅ ############## Primitive DataTypes ############## ✅ //


        // ✅ ############## Non-primitive DataTypes ############## ✅ //

            // ✅ ############## Array ############## ✅ //

                // In JavaScript, array is an ordered collection of values of any type(string, number, another array and functions) to store a complex data. Each value of an array called `Element`.
                // Each element of an array has numerical index to access it separately, first element's index is 0, next element's index is 1 and so on.
                // Arrays are dynamic, so its size can change(increase or shrink) during program execution.


                // ✅ Syntax ->> (Using literal [])
                    const fruits = ["Banana", "Orange", "Mango"];
                    console.log(fruits);
                    
                // ✅ Syntax ->> (Using `Array` Constructor)
                    const Fruits = new Array("Banana", "Orange", "Mango");
                    console.log(Fruits); 
                    
                // The literal "[]" syntax is preferred for readability and simplicity.

                // In array, each element has a numeric index, starting from 0, in "fruits" array variable contains 3 elements & "Banana" present on index 0, simillarly "Orange" element present on index 1 and "Mango" element present on index 2.

            // ✅ ############## Array ############## ✅ //


            // ✅ ############## Object ############## ✅ //

                // An object is a collection of values in the form of key-value pairs separated by the commas which is used to represents real-world entity and complex data. 

                const student = {
                    fullName: "Shahbaz Shaikh",
                    age: 36,
                    cgpa: 8.9,
                    isPass: true
                };
                // fullName, age, cgpa & isPass ->> Object's keys
                // Shahbaz Patel, 36, 8.9, true ->> Object's values

            // ✅ ############## Object ############## ✅ //


            // ✅ ############## Function ############## ✅ //

                // Function is a group of statements that performs a specific task on its invocation where it needed, that prevent us from writing redundant code and makes code more reliable.

                // A JS function is defined with the `function` keyword, followed by a name, followed by parantheses() and curly braces({}) which having functional code.
                function callSbz() {                                    // function definition
                    console.log("Bolo Barkhurdaar, I am Shahbaz Patel(The Great coder of Asia).");
                }

                callSbz();                                              // function call
                callSbz();

            // ✅ ############## Function ############## ✅ //


            // ✅ ############## Map ############## ✅ //

                // In JavaScript, Map is a built-in object that stores value in a key-value pair format and remembers the original insertion order of the keys.
                // Unlike objects, we can store any type of keys in Map object.

                const mymap = new Map();
                mymap.set("name", "Shahbaz");
                mymap.set(2, "Patel");

                console.log(mymap);     // Map(2) { 'name' => 'Shahbaz', 2 => 'Patel' }

            // ✅ ############## Map ############## ✅ //


            // ✅ ############## Set ############## ✅ //

                // In JavaScript, Set is a built-in object used to store collection of unique values(means no duplicates are allowed) of any type(primitive or non-primitive).

                const set = new Set();

                set.add(1);
                set.add(2);
                set.add(2);     // Duplicate will ignore

                console.log(set);       // Set(2) {1, 2}

                // We can also initialize set with an array
                const friends = new Set(["Shahbaz", "Kaleem", "Ilham"]);
                console.log(friends);   // Set(3) { 'Shahbaz', 'Kaleem', 'Ilham' }


                // Iterating Set values by for of loop
                for(let friend of friends) {
                    console.log(friend);
                }

                // We can remove duplicate items from an array
                const arr = [1, 2, 2, 3, 4];
                console.log([...new Set(arr)]);     // [ 1, 2, 3, 4 ]

            // ✅ ############## Set ############## ✅ //


            // ✅ ############## Date ############## ✅ //

                // Date is a non-primitive data type (It's an object).
                // Internally it saves a time in milliseconds as a number since 1 Jan, 1970 UTC.

                let currentDate = new Date();   // created current date by Date constructor
                console.log(currentDate);   // 2025-05-21T13:46:20.520Z


                let specificDate = new Date("2025-05-20T13:46:20.520Z");     // Specific date and time
                console.log(specificDate);


                // Date with year, month (0-indexed), day, hour, minute, second
                const custom = new Date(2025, 4, 21, 10, 30); 
                console.log(custom);    // May 21, 2025 at 10:30

                // There are many Date methods available which returns year, month, day, hour, minutes, seconds, milliseconds as below.
                console.log(currentDate.getFullYear());     // 2025
                console.log(currentDate.getMonth());        // 4 (0 -> January, 11 -> December)
                console.log(currentDate.getDate());         // 21
                console.log(currentDate.getDay());          // 3 (0 -> Sunday, 6 -> Saturday)
                console.log(currentDate.getHours());        // 14 (UTC Timing)
                console.log(currentDate.getMinutes());      // 6 (UTC Timing)
                console.log(currentDate.getSeconds());      // 5
                console.log(currentDate.getTime());         // get milliseconds since Jan 1 1970
                console.log(new Date().toString());     // Wed May 21 2025 14:09:36 GMT+0000 (Coordinated Universal Time)
                console.log(new Date().toISOString());      // 2025-05-21T14:09:36.367Z
                console.log(new Date().toLocaleDateString());   // 5/21/2025
                console.log(new Date().toDateString());   // Wed May 21 2025


                // Dates can be compared using .getTime() or direct subtraction
                const d1 = new Date("2025-01-01");  
                const d2 = new Date("2026-01-01");

                console.log(d2 > d1); // true
                console.log(d2 - d1); // milliseconds difference


                // Eg: (Flipkart Offer Starts In)
                    const nowDate = new Date();
                    const eventDate = new Date("2025-09-05T08:54:59");

                    const diff = eventDate - nowDate;

                    // console.log(diff);

                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
                    const minutes = Math.floor(diff / (1000 * 60) % 60);
                    const seconds = Math.floor((diff / 1000) % 60);

                    console.log(`Flipkart Offer Starts: ${days} days ${hours} hours ${minutes} minutes & ${seconds} seconds`);

                    
                // Eg: (Meetings in different regions on same time)

                    let meetingOn = new Date("2025-09-05T12:30:00");
                    
                    let zones = ["America/New_York", "Asia/Kolkata", "Europe/London", "Asia/Tokyo"];
                    
                    zones.forEach(zone => {
                        console.log(`${zone} => ${meetingOn.toLocaleString("en-US", {timeZone: zone})}`);
                    });
            
            // ✅ ############## Date ############## ✅ //

        // ✅ ############## Non-primitive DataTypes ############## ✅ //

// ✅ ############## Data Types ############## ✅ //


// ✅ ############## Primitive vs Reference Behaviour ############## ✅ //

    // ✅ Primitive: copied by value
    let a = 10;
    let b = a;
    b = 20;
    console.log(a); // 10

    // ✅ Reference: copied by reference
    let obj1 = { name: "Bob" };
    let obj2 = obj1;
    obj2.name = "Alice";
    console.log(obj1.name); // "Alice"

    // Here 'obj1' and 'obj2' refers to the same object.

// ✅ ############## Primitive vs Reference Behaviour ############## ✅ //

// ✅ ############## Interview Questions ############## ✅ //

    let college;
    console.log(typeof college);        // undefined



    console.log(typeof [1, 2, 3]);      // object



    console.log(typeof null);       // object



    let big = 12345678901234567890n;
    console.log(typeof big);        // bigint



    console.log(typeof NaN);        // number

// ✅ ############## Interview Questions ############## ✅ //


// ✅ ############## Dynamically Typed Language ############## ✅ //

    // We don't need to declare variable type explicitly.
    // Variable can hold value of any type, and the type can change at runtime.

    // ✅ Eg:
        let xx = 10;        // xx is a Number
        xx = "Hello";       // xx is a String
        xx = true;          // Now xx is a Boolean

    // At each level when we stored different type of data, accordingly its type changes dynamically.

// ✅ ############## Dynamically Typed Language ############## ✅ //


// ✅ ############## Statically Typed Language ############## ✅ //
    // In statically typed languages like Java or C++, we must declare variable type explicitly, and this type we cannot change at runtime.
    
    // int x = 10;
    // x = "hello"; // ❌ Compile-time error

    // Typescript is a Statically Typed Language which is superset(Advanced version) of javascript.
// ✅ ############## Statically Typed Language ############## ✅ //


// ✅ ############## What is the difference between typeof, instanceof, and Array.isArray()? ############## ✅ //

    // typeof is a javascript operator used to determine the type of variable or value.
    // typeof, instanceof, and Array.isArray() are all used in JavaScript to inspect types.
    // They used for different purposes and behave differently depending on the value.

    // ✅ 1) typeof:     (checks the type of a value)
        // ✅ Eg:
            console.log(typeof 35);     // number
            console.log(typeof "Shahbaz");      // string
            console.log(typeof true);       // boolean
            console.log(typeof undefined);      // undefined
            console.log(typeof null);       // object
            console.log(typeof 12324234524532523452345n);   // bigint
            console.log(typeof(BigInt("12324234524532523452345")));     // bigint
            console.log(typeof Symbol("green"));    // symbol   
            console.log(typeof {});     // object
            console.log(typeof []);     // object
            console.log(typeof function() {});      // function
            console.log(typeof(new String("Patel")));   // object
            console.log(typeof(new Number(35)));    // object
            console.log(typeof(new Boolean(false)));    // object 

    // ✅ 2) instanceof:   (checks whether an object is an instance of specific constructor/class)
        // ✅ Eg:  (Below all console's output are returned `true`)
            console.log(new Map() instanceof Object);
            console.log(new Map() instanceof Map);
            console.log(new Set() instanceof Object);
            console.log(new Set() instanceof Set);
            console.log([] instanceof Object);
            console.log([] instanceof Array);
            console.log({} instanceof Object);
            console.log(new Date() instanceof Date);
            console.log(new Date() instanceof Object);
            console.log(function() {} instanceof Function);
            console.log(function() {} instanceof Object);
            console.log(new Number() instanceof Object);
            console.log(new Number() instanceof Number);
            console.log(new String() instanceof Object);
            console.log(new String() instanceof String);
            console.log(new Boolean() instanceof Object);
            console.log(new Boolean() instanceof Boolean);

    // ✅ 3) Array.isArray():   (Specifically checks whether a value is an array)
        // ✅ Eg:
            console.log(Array.isArray(35));     // false
            console.log(Array.isArray("Shahbaz"));  // false
            console.log(Array.isArray([]));     // true
            console.log(Array.isArray(new Array()));    // true

// ✅ ############## What is the difference between typeof, instanceof, and Array.isArray()? ############## ✅ //


// ✅ ############## symbols ############## ✅ //

    // A Symbol is a primitive data type introduced in ES6 (ES2015). It's used to create unique, immutable identifiers.
    // It used to create non-enumerable, hidden object keys.
    // Can’t automatically coerce to strings (throws error).
    // Useful for creating hidden object properties and avoiding naming conflicts.

    const myName = Symbol("name");
    console.log(typeof myName);         // symbol

    // ✅ Eg:
        const ID = Symbol("userID");

        let user = {
            name: "Shahbaz",
            [ID]: 786
        }

        console.log(user[ID]);       // 786
        console.log(user.name);      // Shahbaz 
        console.log(Object.keys(user));     // ["name"]

// ✅ ############## symbols ############## ✅ //


typeof x === "object" && !Array.isArray(x) && x !== null
// Above expression returns boolean value where it checks whether the 'x' is an object but its not an array or null.


// ✅ ############## Deep Copy vs Shallow Copy in JavaScript (Reference Types) ############## ✅ //

    // When working with reference types like objects and arrays, copying values isn’t always straightforward. JavaScript offers two types of copying:

    // Eg:      (Objects, arrays, and functions are stored by reference, not by value)
        let obj11 = { name: "Alice" };
        let obj22 = obj11;
        obj22.name = "Bob";
        console.log(obj11.name); // "Bob" → both point to the same object
    // In above situation, both objects `obj11` & `obj22` are points with a same constructor, so if we change `name` property of `obj22` then `obj11's name property` also changed.

    // Now to overcome from this situation, we are using 2 types of copying methods 1) Shallow copy 2) Deep copy

    // ✅ 1) Shallow copy ->>
        // `Shallow copy` copies the top-level properties of Object or Array, but nested objects/arrays are still shared between the original and the copied object.
        
        // There are some methods which creates shallow copies:
            // 1) Object.assign()
            // 2) Spread syntax ({...obj}, [...arr])
            // 3) Array.slice()

        // ✅ Eg: (Spread syntax)
            const person = {
                name: "Shahbaz Patel",
                email: "shabya@gmail.com",
                address: {
                    city: "Bangalore",
                    country: "India"
                }
            }

            const dupPerson = {...person};  // (prevent from mutates original object 'person' at shallow level)
            // const dupPerson = person;    (Here it mutates original object 'person')

            dupPerson.name = "Kaleem Patel";
            dupPerson.email = "kalya@gmail.com";
            dupPerson.address.city = "Dar-e-salaam";
            dupPerson.address.country = "Africa";

            console.log(person);

            // person object's name property doesn't change. Its still "Shahbaz Patel" now after shallow copied through spread syntax.

    // ✅ 2) Deep Copy ->>
        // A deep copy creates a completely independent clone(that not affects original copy), including all nested objects and arrays.

        // methods which creates shallow copies:
            // structuredClone() (modern, built-in)

        // ✅ Eg:
            const original = {
                name: "Alice",
                address: { city: "New York" }
            };

            const deep = structuredClone(original);
            deep.address.city = "Boston";

            console.log(original.address.city); // "New York" ✅ (not affected)

// ✅ ############## Deep Copy vs Shallow Copy in JavaScript (Reference Types) ############## ✅ //
