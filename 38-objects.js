// ✅ ############## JavaScript Objects ############## ✅ //

    // An object is a non-primitive data that contains collection of values in the form of key-value pairs which is used to represent real-world entity and complex data.
    // A javascript object having state & behaviour(properties & methods).

    const student = {
        fullName: "Shahbaz Shaikh",
        age: 36,
        cgpa: 8.9,
        isPass: true
    };
    // fullName, age, cgpa & isPass ->> Object's keys
    // Shahbaz Patel, 36, 8.9, true ->> Object's values


    // ✅ ############## Key Characteristics ############## ✅ //

        // 🔹 Keys are always string
        // 🔹 Values can be of any data type(primitive or non-primitive value)
        // 🔹 Object is mutable(we can add, modify or delete properties)
        // 🔹 Object is stored and passed by reference

    // ✅ ############## Key Characteristics ############## ✅ //


    // ✅ ############## Accessing Object Properties ############## ✅ //
    
        console.log(student.fullName);       // Dot notation ->> "Shahbaz Shaikh"
        console.log(student["age"]);        // Bracket notation ->> 36
    
    // ✅ ############## Accessing Object Properties ############## ✅ //


    // ✅ ############## Modifying Object Properties ############## ✅ //

        person.age = 35;        // modify `age` property
        person.city = "Pune";   // Add new property `city`
        delete person.isPass;   // Delete property `isPass`

    // ✅ ############## Modifying Object Properties ############## ✅ //


    // ✅ ############## Object Methods ############## ✅ //
        // Object can also contain functions, called methods:

        // Eg:
            let user1 = {
                name: "Shahbaz",
                greet: function() {
                    return "Hello, " + this.name;
                }
            };

            console.log(user1.greet());      // "Hello, Shahbaz"

    // ✅ ############## Object Methods ############## ✅ //


    // ✅ ############## Several ways to create an object ############## ✅ //

        // ✅ ############## Common Way ############## ✅ //

            let person = {
                name: "Shahbaz Patel",
                age: 35,
                married: true
            }
            
            console.log(person);    // { name: 'Shahbaz Patel', age: 35, married: true }

        // ✅ ############## Common Way ############## ✅ //


        // ✅ ############## By Constructor Function ############## ✅ //

            const Person = function(name) {
                this.name = name;
            }

            const p1 = new Person("Shahbaz");
            console.log(p1);        // { name: "Shahbaz" }
            console.log(typeof Person);     // function
            console.log(p1 instanceof Object);      // true

        // ✅ ############## By Constructor Function ############## ✅ //
            

        // ✅ ############## Object.create Method ############## ✅ //

            const employee = {
                firstName: "Shahbaz",
                lastName: "Patel"
            }

            let employee1 = Object.create(employee);
            // person1.lastName = "Mujaawar";
            employee1.age = 35;

            console.log(employee);    // { firstName: 'Shahbaz', lastName: 'Patel' }
            console.log(employee1);   // { age: 35 }    
            console.log(employee1.firstName);       // Inherited property 'firstName' from employee object
            console.log(employee1.age);     // own property of 'employee1' object
            console.log(employee.age);      // (undefined) unable to access age, its property of child object 'employee1'
            // create an copied of 'employee' object, where shows only employee1 methods, but can use enhireted methods of employee 'object'.

        // ✅ ############## Object.create Method ############## ✅ //

    // ✅ ############## Several ways to create an object ############## ✅ //


    // ✅ ############## Accessing Properties ############## ✅ //

        //🔹############## Dot Notation ##############🔹//
            console.log(person.name);
        //🔹############## Dot Notation ##############🔹//


        //🔹############## Bracket Notation ##############🔹//
            console.log(person["age"]);
        //🔹############## Bracket Notation ##############🔹//

    // ✅ ############## Accessing Properties ############## ✅ //


    // ✅ ############## Modifying Properties ############## ✅ //
        
        person.age = 25;        // Updating object's property
        person.city = "Pune";       // Add new property
        delete person.city;         // delete property

    // ✅ ############## Modifying Properties ############## ✅ //


    // ✅ ############## Checking Properties ############## ✅ //

        console.log("name" in person);      // true
        console.log(person.hasOwnProperty("age"));     // true

    // ✅ ############## Checking Properties ############## ✅ //


    // ✅ ############## Looping through Properties ############## ✅ //

        //🔹############## Using for-in ##############🔹//

            for(let key in person) {
                console.log(key, person[key]);
            }

        //🔹############## Using for-of ##############🔹//

        //🔹############## Using Object method (Object.keys, Object.values, Object.entries)🔹############## //

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

        //🔹############## Using Object method (Object.keys, Object.values, Object.entries)🔹############## //

    // ✅ ############## Looping through Properties ############## ✅ //


    // ✅ ############## Nested Object ############## ✅ //

        // Eg:
        const user = {
            name: "Shahbaz",
            address: {
                city: "Mumbai",
                zip: 400001
            }
        };

        console.log(user.address.city); // Mumbai

    // ✅ ############## Nested Object ############## ✅ //


    // ✅ ############## Object Method ############## ✅ //

        const shabya = {
            name: "Shahbaz",
            greet: function() {
                console.timeLog(`Hello, ${this.name}!!!`);
            }
        }

        shabya.greet();         // Hello, Shahbaz!!!

    // ✅ ############## Object Method ############## ✅ //


    // ✅ ############## Comparison Object ############## ✅ //

        const a1 = {x:1};
        const b1 = {x:1};

        console.log(a1 === b1);        // false

    // ✅ ############## Comparison Object ############## ✅ //


    // ✅ ############## Copy Object (Object.assign) ############## ✅ //

        // Eg:
        const person1 = {
            name: "Shahbaz",
            age: 35, 
            address: {
                city: "Pune",
                country: "India"
            }
        }

        const copyPerson1 = {};

        Object.assign(copyPerson1, person1);        // Object.assign method copy the properties from one to another(deep copy) 

        console.log(copyPerson1);

    // ✅ ############## Copy Object (Object.assign) ############## ✅ //

// ✅ ############## JavaScript Objects ############## ✅ //



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


    // ✅ What is the `this` keyword inside an object method? How does it's behaviour change in arrow function?
        // The `this` keyword refers to the context in which function is executing.
        // In the context of an object, `this` typically refers to the object when it's method executes.

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
                // The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
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