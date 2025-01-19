// The super keywoard is used to call the constructor of its parent class to access the parent's properties and methods.

class Person {
    constructor(name) {
        // console.log("Person constructor calling... enter");    // 2
        this.species = "Homo sapeiens";
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