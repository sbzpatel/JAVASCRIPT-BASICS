// ✅ ############## JavaScript Objects ############## ✅ //

    // A javascript object is much like real time entity having state & behaviour(properties & methods).

    const student = {
        firstName: "Shahbaz",
        lastName: "Patel",
        age: 35,
        printFullName: function() {         // way1 to define function in object
            return this.firstName + " " + this.lastName;
        },
        printAge() {                        // way2 to define function in object
            return this.age;
        }
    }

    console.log("Student First Name:", student.firstName);

    console.log("Student Last Name:", student.lastName);

    console.log("Student Full Name:", student.printFullName());

    console.log("Student Full Name:", student.printAge());


    // ✅ ############## Several ways to create an object ############## ✅ //

        // 1) Common way ->>
            let person = {
                name: "Shahbaz Patel",
                age: 35,
                married: true
            }
            
            console.log(person);    // { name: 'Shahbaz Patel', age: 35, married: true }



        // 2) By Constructor function ->>
            const Person = function(name) {
                this.name = name;
            }

            const p1 = new Person("Shahbaz");
            console.log(p1);        // { name: "Shahbaz" }
            console.log(typeof Person);     // function
            console.log(p1 instanceof Object);      // true

            

        // 3) Object.create method ->>
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

        //🔹############## Using for-of ##############🔹//

            for(let key of person) {
                console.log(key, person[key]);
            }

        //🔹############## Using for-of ##############🔹//

        //🔹############## Using Object method (Object.keys, Object.values, Object.entries)🔹############## //

            console.log(Object.keys(person));         // [name, age, married]
            console.log(Object.values(person));       // ["Shahbaz Patel", 35, true]
            console.log(Object.entries(person));     // [ [ 'name', 'Shahbaz' ], [ 'age', 35 ], [ 'married', true ] ]

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

        const a = {x:1};
        const b = {x:1};

        console.log(a === b);        // false

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


    // ✅ ############## Object.seal() ############## ✅ //

        // Eg:
        const person2 = {
            name: "Shahbaz",
            age: 35, 
            address: {
                city: "Pune",
                country: "India"
            }
        }

        Object.seal(person2);
        // Object restricts to add and delete properties, but can update existing properties

        person2.name = "Kaleem";
        person2.age = 25;

        console.log(person2);

        // Output ->>
            // {
            //   name: 'Kaleem',
            //   age: 25,
            //   address: { city: 'Pune', country: 'India' }
            // }

    // ✅ ############## Object.seal() ############## ✅ //


    // ✅ ############## Object.freeze() ############## ✅ //

        // Eg:
        const person3 = {
            name: "Shahbaz",
            age: 35, 
            address: {
                city: "Pune",
                country: "India"
            }
        }

        Object.freeze(person3);
        // freeze method makes object completely `immutable` (cannot update, delete existing or add new property)

        person3.name = "Kaleem";
        person3.age = 25;

        console.log(person3);

        // Output ->>
            // {
            //   name: 'Shahbaz',
            //   age: 35,
            //   address: { city: 'Pune', country: 'India' }
            // }

    // ✅ ############## Object.freeze() ############## ✅ //

// ✅ ############## JavaScript Objects ############## ✅ //