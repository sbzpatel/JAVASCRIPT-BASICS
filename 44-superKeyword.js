// ✅ $$$$$$$$$$$$$$$$$$$ Super Keyword $$$$$$$$$$$$$$$$$$$ ✅ //

    // The super keyword is used to call the constructor of its parent class as well as access the parent's class methods.


    // Eg:
        class Person {
            constructor(name) {
                // console.log("Person constructor calling... enter");    // 2
                this.species = "Homo sapiens";
                this.name = name;
                // console.log("Person constructor calling... exit");     // 3
            }

            eat() {
                console.log("Eat...");
            }
        }

        class Engineer extends Person {
            constructor(name, branch) {
                // console.log("Engineer constructor calling... enter");   // 1
                super(name);
                this.branch = branch;
                // console.log("Engineer constructor calling... exit");    // 4
            }

            work() {
                super.eat();
                console.log("Solve problems, Build something...");
            }
        }

        let sbz = new Engineer("Shahbaz", "Civil Engineering");

        console.log(sbz);

        sbz.work();

// ✅ $$$$$$$$$$$$$$$$$$$ Super Keyword $$$$$$$$$$$$$$$$$$$ ✅ //