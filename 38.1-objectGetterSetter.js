// ✅ ############## Object's Getters & Setters ############## ✅ //

        // Getters and Setters are special methods of an object which controls the access of its properties(like adding logic when getting and setting a value).
        // They used for encapsulation & validation.


        // ✅ ############## Basic Syntax ############## ✅ //

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

        // ✅ ############## Basic Syntax ############## ✅ //



        // ✅ To avoid recursive setter/getter calls, store data in a "private" field (naming convention) ✅ //

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

        // ✅ To avoid recursive setter/getter calls, store data in a "private" field (naming convention) ✅ //



        // ✅ $$$$$$$$$$$$$$$$$ Using Object.defineProperty() $$$$$$$$$$$$$$$$$ ✅ //

            const man = {};

            Object.defineProperty(man, "name", {
                get() {
                    return "Anonymous";
                },
                set(value) {
                    console.log(`Trying to set name as ${value}.`)
                }
            })

            console.log(man.name);     // "Anonymous"
            man.name = "Alice";        // Logs: Trying to set name to Alice

        // ✅ $$$$$$$$$$$$$$$$$ Using Object.defineProperty() $$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$ Object's Getters & Setters $$$$$$$$$$$$$$$$$ ✅ //