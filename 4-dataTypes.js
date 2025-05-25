console.log("@@@@@@@@@@@ Data Types @@@@@@@@@@@");

    /*
        Javascript DataTypes (There are 2 types of Datatypes) ->>

            1) Primitive DataTypes => (Number, String, Boolean, Undefined, Null, BigInt, Symbol) 
                Primitive DataTypes are basic & immutable and stored by value. 
            2) Non-Primitive DataTypes (Array, Object, Function, Date, Map, Set)
                Non-Primitive DataTypes are mutable & stored by reference.
    */

    let age = 24;
    console.log(typeof age);    // number


    console.log(typeof "Sbz");  // string


    let married = true;
    console.log(typeof married);    // boolean


    let wifeName;
    console.log(typeof wifeName);   // undefined


    let salary = null;
    console.log(typeof salary);     // null variable is treated as an "object"


    let x = BigInt("123456789n");
    console.log(typeof x);          // bigint 

    let y = Symbol("Sbz Patel");
    console.log(typeof y);      // symbol

console.log("@@@@@@@@@@@ Data Types @@@@@@@@@@@");

// ############## Primitive vs Reference Behaviour ############## //

    // Primitive: copied by value
    let a = 10;
    let b = a;
    b = 20;
    console.log(a); // 10

    // Reference: copied by reference
    let obj1 = { name: "Bob" };
    let obj2 = obj1;
    obj2.name = "Alice";
    console.log(obj1.name); // "Alice"

    // Here 'obj1' and 'obj2' refers to the same object.

// ############## Primitive vs Reference Behaviour ############## //


// ############## Interview Questions ############## //


    let college;
    console.log(typeof college);        // undefined



    console.log(typeof [1, 2, 3]);      // object



    console.log(typeof null);       // object



    let big = 12345678901234567890n;
    console.log(typeof big);        // bigint



    console.log(typeof NaN);        // number

// ############## Interview Questions ############## //


// ############## Dynamically Typed Language ############## //

    // We don't need to declare variable type.
    // Variable can hold value of any type, and the type can change at runtime.

    // Eg:
        let xx = 10;        // xx is a Number
        xx = "Hello";       // xx is a String
        xx = true;          // Now xx is a Boolean

    // At each level when we stored different type of data, accordingly its type changes dynamically.

// ############## Dynamically Typed Language ############## //


// ############## Statically Typed Language ############## //
    // In statically typed languages like Java or C++, you must declare variable types explicitly, and they cannot change.
    
    // int x = 10;
    // x = "hello"; // ❌ Compile-time error

    // Typescript is a Statically Typed Lanage which is superset(Advanced version) of javascript.
// ############## Statically Typed Language ############## //


// ############## Type Coercion in Javascript ############## //

    // Type coercion is the automatic or implicit conversion of values from one type to another by javascript during arithmetic or comparsion operations.

    // There are 2 types of coercions in javascript
        // 1) Implicit coercion ->> Done automatically by javascript    ->> 1 + "2" = "12"
        // 2) Explicit coercion ->> Done manually using JS Function     ->> Number("123") -> 123

    // 1) Implicit Coercion ->>

        // Eg:
            let result = 5 + "10";
            console.log(result);    // "510" (Here number 5 coerced to a string)


            // Comparing values with == (loose equality):
            console.log(0 == false);    // true
            console.log("" == false);   // true
            console.log(null == undefined)      // true

            // ❌ Using === (strict equality) prevents coercion:
            console.log(0 === false);  // false
            console.log("5" === 5);    // false
            // No type coercion happens with ===.
            

    // 2) Explicit Coercion ->>
        // Eg:
            Number("123");   // 123
            String(123);     // "123"
            Boolean(0);      // false
            Boolean("hello") // true

    // Some Important Expressions result given below:
    // 1) [] + []   ->> "" (Both array becomes empty strings)
    // 2) [] + {}   ->> "[object Object]"
    // 3) {} + []   ->> 0
// ############## Type Coercion in Javascript ############## //



// ############## What is the difference between typeof, instanceof, and Array.isArray()? ############## //

    // typeof, instanceof, and Array.isArray() are all used in JavaScript to inspect types.
    // They used for different purposes and behave differently depending on the value.

    // 1) typeof:     (checks the primitive type of a value)
        // Eg:
            console.log(typeof 35);
            console.log(typeof "Shahbaz");
            console.log(typeof true);
            console.log(typeof undefined);
            console.log(typeof null);
            console.log(typeof {});
            console.log(typeof []);
            console.log(typeof function() {});  

    // 2) instanceof:   (checks whether an object is an instance of specific constructor/class)
        // Eg:
            console.log([] instanceof Array);
            console.log({} instanceof Object);
            console.log(new Date instanceof Date);
            console.log(new String("Shahbaz") instanceof String);
            console.log("Shahbaz" instanceof String);

    // 3) Arra.isArray():   (Specifically checks whether a value is an array)
        // Eg:
            console.log(Array.isArray(35));
            console.log(Array.isArray("Shahbaz"));
            console.log(Array.isArray([]));
            Array.isArray(new Array());

// ############## What is the difference between typeof, instanceof, and Array.isArray()? ############## //



// ############## symbols ############## //

    // A Symbol is a primitive data type introduced in ES6 (ES2015). It's used to create unique, immutable identifiers.
    // It used to create non-enumerable, hidden object keys.
    // Can’t automatically coerce to strings (throws error).
    // Useful for creating hidden object properties and avoiding naming conflicts.

    const myName = Symbol("name");
    console.log(typeof myName);         // symbol

    // Eg:
        const ID = Symbol("userID");

        let user = {
            name: "Shahbaz",
            [ID]: 786
        }

        console.log(user[ID]);       // 786
        console.log(user.name);      // Shahbaz 
        console.log(Object.keys(user));     // ["name"]


// ############## symbols ############## //

typeof x === "object" && !Array.isArray(x) && x !== null
// Above expression returns boolean value where it checks whether the 'x' is an object but its not an array or null.



// ############## Deep Copy vs Shallow Copy in JavaScript (Reference Types) ############## //

    // When working with reference types like objects and arrays, copying values isn’t always straightforward. JavaScript offers two types of copying:

    // Eg:      (Objects, arrays, and functions are stored by reference, not by value)
        let obj11 = { name: "Alice" };
        let obj22 = obj11;
        obj22.name = "Bob";
        console.log(obj11.name); // "Bob" → both point to the same object

    // Now in this situation we are using 2 types of copying methods 1) Shallow copy 2) Deep copy

    // 1) Shallow copy ->>
        // Shallow copy copies the top-level properties of object or Array, but nested objects/arrays are still shared between the original and the copy.
        
        // There are some methods which creates shallow copies:
            // 1) Object.assign()
            // 2) Spread syntax ({...obj}, [...arr])
            // 3) Array.slice()

        // Eg: (Spread syntax)
            const person = {
                name: "Shahbaz Patel",
                email: "shabya@gmail.com",
                address: {
                    city: "Bangalore",
                    country: "India"
                }
            }

            const dupPerson = {...person};  // (prevent to mutates of original object 'person' at shallow level)
            // const dupPerson = person;    (Here it mutates original object 'person')

            dupPerson.name = "Kaleem Patel";
            dupPerson.email = "kalya@gmail.com";
            dupPerson.address.city = "Dar-e-salaam";
            dupPerson.address.country = "Africa";

            console.log(person);

            // person object's name property doesn't change. Its still "Shahbaz Patel" now after shallow copied through spread syntax.

    // 2) Deep Copy ->>
        // A deep copy creates a completely independent clone(that not affects original copy), including all nested objects and arrays.

        // methods which creates shallow copies:
            // structuredClone() (modern, built-in)

            // Eg:
                const original = {
                    name: "Alice",
                    address: { city: "New York" }
                };

                const deep = structuredClone(original);
                deep.address.city = "Boston";

                console.log(original.address.city); // "New York" ✅ (not affected)

// ############## Deep Copy vs Shallow Copy in JavaScript (Reference Types) ############## //
