// A javascript object is much like real time entity having state & behaviour(properties & methods).

const student = {
    firstName: "Shahbaz",
    lastName: "Patel",
    age: 35,
    printFullName: function () {         // way1 to define function in object
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


// Several ways to create an object //

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

// Several ways to create an object //



// $$$$$$$$$$$$$$$$$ Getters & Setters $$$$$$$$$$$$$$$$$ //

        // Getters and Setters are special methods of an object which controls the access of its properties(like adding logic when getting and setting a value).
        // They used for encapsulation & validation.

        // Basic Syntax //

        const user = {
            firstName: "Shahbaz",
            lastName: "Patel",
            
            // setter
            set setFullName(name) {
                [this.firstName, this.lastName] = name.split(" ");
            },
            
            // getter
            get getFullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        console.log(user.getFullName);      // Shahbaz Patel

        user.setFullName = "Kaleem Shaikh";
        console.log(user.firstName);
        console.log(user.lastName);



        // To avoid recursive setter/getter calls, store data in a "private" field (naming convention) //

        const account = {
            _balance: 52000,
            set balance(value) {
                if(value < 0) {
                    throw new Error("Balance can't be negative!!!");
                } else {
                    this._balance = value;
                }
                
            },
            get balance() {
                return this._balance;
            }
        }

        console.log("Initial Balance: "+account.balance);
        account.balance = -45000;
        console.log(account.balance);



        // Using Object.defineProperty() //

        const man = {};

        Object.defineProperty(man, "name", {
            get() {
                return "Anonymous";
            },
            set(value) {
                console.log(`Trying to set name to ${value}.`)
            }
        })

        console.log(man.name);     // "Anonymous"
        man.name = "Alice";        // Logs: Trying to set name to Alice

// $$$$$$$$$$$$$$$$$ Getters & Setters $$$$$$$$$$$$$$$$$ //
    

