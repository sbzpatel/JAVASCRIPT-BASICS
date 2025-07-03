// ✅ ############## JavaScript Object ############## ✅ //

    // An object is a non-primitive data that contains collection of key-value pairs which is used to represent real-world entity and complex data. 

    const student = {
        fullName: "Shahbaz Shaikh",
        age: 36,
        cgpa: 8.9,
        isPass: true
    };
    // fullName, age, cgpa & isPass ->> Object's keys
    // Shahbaz Patel, 36, 8.9, true ->> Object's values


    // ✅ Key Characteristics ->>
        // 🔹 Keys are always string
        // 🔹 Values can be of any data type(primitive or non-primitive value)
        // 🔹 Object is mutable(we can add, modify or delete properties)
        // 🔹 Object is stored and passed by reference


    // ✅ Accessing Object Properties ->>
        console.log(student.fullName);       // Dot notation ->> "Shahbaz Shaikh"
        console.log(student["age"]);        // Bracket notation ->> 36


    // ✅ Modifying Object Properties ->>
        person.age = 35;        // modify `age` property
        person.city = "Pune";   // Add new property `city`
        delete person.isPass;   // Delete property `isPass`


    // ✅ Object Methods ->>
        // Object can also contain functions, called methods:

        // Eg:
            let user = {
                name: "Shahbaz",
                greet: function() {
                    return "Hello, " + this.name;
                }
            };

            console.log(user.greet());      // "Hello, Shahbaz"

        
    // ✅ Creating Object in Different Ways ->>
        // ✅ 1)  Object literal ->>
            let obj1 = {};

        // ✅ 2) Object Constructor ->>
            let obj2 = new Object();

        // ✅ 3) Using function constructor ->>
            function Car(make, model) {
                this.make = make;
                this.model = model;
            }

            let myCar = new Car("Toyota", "Fortuner");


    // ✅ Common Object Methods ->>
        // ✅ 1) Object.keys(obj) ->>        (Returns array of keys)

            // Eg:
                Object.keys(student);       // [ 'fullName', 'age', 'cgpa', 'isPass' ]


        // ✅ 2) Object.values(obj) ->>     (Returns array of values)

            // Eg:
                Object.values(student);     // [ 'Shahbaz Shaikh', 36, 8.9, true ]


        // ✅ 3) Object.entries(obj) ->>    (Returns array of key-value pairs (object's properties))
            
            // Eg:
                console.log(Object.entries(student)); 
                
                // Output:  (returns array of array in response of Object.entries)
                    // [
                    //     [ 'fullName', 'Shahbaz Shaikh' ],
                    //     [ 'age', 36 ],
                    //     [ 'cgpa', 8.9 ],
                    //     [ 'isPass', true ]
                    // ]
        
        
        // ✅ 4) Object.assign() ->>        (copy all properties of one or more source objects to a target object)
            
            // Eg:
                const target = { a: 1 };
                const source = { b: 2, c: 3, d: 4 };

                const result = Object.assign(target, source);

                console.log(result);    // { a: 1, b: 2, c: 3, d: 4 }
                console.log(target);    // Also { a: 1, b: 2, c: 3, d: 4 }
                // ➡️ Note: It modifies the target object and also returns it.

// ✅ ############## JavaScript Object ############## ✅ //


// ✅ ############## Interview Questions ############## ✅ //

    // ✅ How does JavaScript handle copying objects by reference vs by value?
        // JavaScript assign or copy data to the variable by the value itself or by its reference.

        // ✅ 1) Primitive Data Types are copied by Value:
            // When we are going to assign a primitive data type(String, Number, Boolean, Null, Undefined, Bigint or Symbol), javascript copies or stores its value directly.

            // Eg:
                let a = 10;     // assign/store primitive data(10) to the variable 'a'
                let b = a;      // copies a variables's primitive data to the variable 'b'
                b = 20;         // replace primitive data(20) to the variable 'b'

                console.log(a);     // 10 (original remains unchanged)

            // ➡️ a & b are completely independent after the assignment.

        // ✅ 2) Objects are Copied by Reference:
            // When we are going to assign or copies the object(like arrays, functions non-primitive type of data), Javascript copies the reference to the memory location, not the actual object.

            // Eg:
                let obj7 = { name: "Shahbaz Patel" };   // here obj7 stores the reference of same object
                let obj8 = obj7;        // copies reference stored in obj7 to obj8

                obj8.name = "Kaleem Patel";     // here we are modifying actual object's property(name) value
                console.log(obj7.name);     // Kaleem Patel

            // ➡️ Both obj7 and obj8 point to the same object in memory, so a change in one object affects the other.

        // We cannot independently change the value of object seperately if we are using a reference, here we need to copy with their value only.


        // 🔁 To Actually Copy Objects (not reference):
            // There are 2 types of copy objects by value in JavaScript as below:

            // 🟡 Shallow Copy (copies top-level of properties only) ->>

            // Eg:
                let original = { name: "Shahbaz" };

                let copyBySpread = {...original};   // copy by value (both having reference of different object)

                copyBySpread.name = "Kaleem";   // modify copyBySpread object property 'name'

                console.log(original);  

                console.log(copyBySpread);      // original object can't affects

            // 🟡 Deep Copy (structuredClone() and Object.assign() both are used for deep copy of non-primitive data) ->>

            // Eg:
                const person786 = {
                    name: "Shahbaz",
                    age: 35,
                    address: {
                        city: "Pune",
                        country: "India"
                    }
                }

                const anotherPerson = {
                    dep: "IT"
                }

                let person1_786 = structuredClone(person786);   // Both objects point to the difference object

                Object.assign(anotherPerson, person786);    // returns and update target object(anotherPerson) with whole copy all the content of person786

                console.log(anotherPerson);     

                person1_786.address.city = "Mumbai";

                console.log(person786);
                console.log(person1_786);

            // Output:
                // {
                //     name: 'Shahbaz',
                //     age: 35,
                //     address: { city: 'Pune', country: 'India' }
                // }
                // {
                //     name: 'Shahbaz',
                //     age: 35,
                //     address: { city: 'Mumbai', country: 'India' }
                // }


    // ✅ What is the `this` keyword inside an object method? How does its behavior change in arrow functions?
        // The `this` keyword refers to the context in which function is executing.
        // In the context of an object method, `this` typically refers to the object when its method executes.

        // ✅ `this` Inside an Object Method (Regular Function) ->>
            
            // Eg:
            const user2 = {
                name: "Shahbaz",
                greet: function() {
                    console.log("Hello, " + this.name);
                }
            }

            user2.greet(); // Output: "Hello, Shahbaz"
            // 🟢 Here, this.name refers to user2.name because greet() is called as a method of user2.

        // ❗ Arrow Function & this ->>
            // Arrow function in JavaScript provides a simple syntax for writing functions.
            // Unlike regular functions, arrow functions do not have its own `this` context. Instead, they inherit the `this` value from its outer scope where it defined.

            // Eg:
            const user3 = {
                name: "Shahbaz",
                greet: () => {
                    console.log("Hello, " + this.name);
                }
            } 

            user3.greet();      // Output: "Hello, undefined"
            // 🛑 Here, `this` is not bound to user3, but to the outer(global or enclosing) context.

            // To solve this above problem, we are writes a same code as below:

            // Eg:
            const user4 = {
                name: "Shahbaz",
                greet: function() {     // here we can access property name using `this` keyword
                    const sayHello = () => {    
                        // here arrow function can lexically(from surrounding scope) binds or access the `this.name`
                        console.log("Hello, " + this.name);     // works as expected
                    }
                    sayHello();     // invoke arrow function 'sayHello'
                }
            } 

            user4.greet();      // Output: "Hello, Shahbaz"


    // ✅ What are property descriptors? Explain writable, enumerable, and configurable?
        // What are Property Descriptors in Javascriptor?
            // Every property in a JavaScript object has metadata attached to it called a property descriptor. This metadata controls how the property behaves(whether it can be changed, listed or deleted).
            // We can access or define these using:
                // 1) Object.getOwnPropertyDescriptor();
                // 2) Object.defineProperty()

            // ✅ 1. writable ->>
                // Controls: Whether the property can be changed.
                // Default: `false` ->> when defined via Object.defineProperty().

                // Eg:
                const obj = {};

                Object.defineProperty(obj, "name", {
                    value: "Shahbaz",
                    // writable: true      // default value 'false' (on comment writable `false` here)
                });

                obj.name  = "Kaleem";
                console.log(obj.name);      // Shahbaz

            // ✅ 2. enumerable ->>
                // Controls: Whether the property shows up during enumeration(by using for...in or Object.keys()).
                // Default: false(with defineProperty)

                // Eg:
                const obj22 = {
                    a: 1,
                    b: 2
                };

                Object.defineProperty(obj22, 'c', {
                    value: 3,
                    // enumerable: true        // by default its `false` (on comment enumerable `false` here)
                });

                console.log(Object.keys(obj22))     // [ "a", "b" ]

                for (let key in obj22) {
                    console.log(key);           // Output: "a", "b"
                }

                console.log(obj22.propertyIsEnumerable('a'));       // Output: true
                console.log(obj22.propertyIsEnumerable('c'));       // Output: false

            // ✅ 3. configurable ->>
                // Controls: Whether the property can be deleted or redefined.
                // Default: false(with defineProperty)

                // Eg:
                const user0 = {};

                Object.defineProperty(user0, "role", {
                    value: "admin",
                    writable: true,
                    enumerable: true,
                    // configurable: true        // by default its `false` (on comment configurable `false` here)
                });

                console.log(user0.role);     // "admin"

                // Try deleting the property "role"
                delete user0.role;
                console.log(user0.role);     // "admin" → ❌ not deleted because configurable: false 

                // Try redefining the property (throws an error in strict mode)
                Object.defineProperty(user0, "role", {
                    value: "superadmin"
                })  // ❌ TypeError in strict mode
                console.log(user0.role);


    // ✅ Explain how Object.freeze(), Object.seal(), and Object.preventExtensions() differ.
        // These 3 methods(Object.freeze(), Object.seal(), and Object.preventExtensions()) are used to control how objects can be modified in JavaScript.

        // 🔐 1. Object.preventExtensions(obj) ->>
            // Prevents new properties from being added to the object
            // Existing properties can still be changed or deleted.

            // Eg: 
            const user11 = { name: "Shahbaz Patel" };

            Object.preventExtensions(user11);

            user11.age = 35;      // ❌ Fails silently or throws in strict mode
            console.log(user11);      // { name: 'Shahbaz Patel' }

            user11.name = "Kaleem Patel";
            console.log(user11);      // { name: 'Kaleem Patel' }

            delete user11.name;
            console.log(user11);      // {}

        // You want to lock structure, but still allow value updates and deletions.



        // 🔒 2. Object.seal(obj) ->>
            // Prevents new properties from being added.
            // Prevents properties from being deleted.
            // Existing properties can still be changed (if writable: true).

            // Eg:
            const user22 = { name: "Alice" };
            Object.seal(user22);

            user22.age = 25;        // ❌ Cannot add new property
            user22.name = "Bob";    // ✅ Can update
            delete user22.name;     // ❌ Cannot delete

        // You want to protect both structure and property presence, but allow value updates.



        // 🧊 3. Object.freeze(obj) ->>
            // Makes the object completely immutable:
                // ❌ No adding
                // ❌ No deleting
                // ❌ No changing existing values

            // const user = { name: "Alice" };

            // Eg:
            const user786 = { name: "Alice" };
            Object.freeze(user786);

            user786.name = "Bob";    // ❌ Fails silently or throws in strict mode
            user786.age = 25;        // ❌ Cannot add
            delete user786.name;     // ❌ Cannot delete

        // You want the object to be completely read-only.

    
    // ✅ What are the differences between Object.create() and using object literals {}?
        // Both Object.create() and object literals( {} ) are used to create an objects, but they differ significantly in terms of `how they set the prototype`, `significant` and `use cases`.

        //🔹1. Syntax and Purpose🔹//
            // ✅ Object Literal {} ->>
                // Creates a new object with `Object.prototype` as its default prototype
                // Best for quickly creates object.
                // Cannot directly set the prototype at creation.

                // Eg:
                const obj = {
                    name: "Shahbaz Patel"
                };


            // ✅ Object.create(prototype) ->>
                // Creates a new object with `proto` as its prototype.
                // Very useful when we want custom inheritance or prototype chaining.
                // Gives fine-grained control over the prototype and property descriptors.

                // Eg:
                const animal = {
                    speak() {
                        console.log("Animal speaks");
                    }
                }

                const dog = Object.create(animal);
                dog.bark = function() {
                    console.log("Woof!");
                }

                dog.speak();        // Animal speaks (inherited)
                dog.bark();         // Woof!

                // Eg: (Advanced Use: Property Descriptors)
                const obj786 = Object.create(Object.prototype, {
                    name: {
                        value: "Shahbaz",
                        writable: false,
                        enumerable: true
                    }
                });

                console.log(obj786.name);       // Shahbaz

                obj786.name = "Kaleem";     // ❌ Fails silently (not writable)

                console.log(obj786.name);       // Shahbaz

// ✅ ############## Interview Questions ############## ✅ //