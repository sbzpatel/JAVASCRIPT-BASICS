// method overriding is a phenomenon in inheritance where child class method overrides with its parent class if both method had a same name

// Generally method overriding is applicable for inherited class methods as well as constructors

// Below example describes how overriding happening in class inheritance

class Person {
    work() {
        console.log("Work...");
    }
}

class SoftwareEngineer extends Person {
    work() {
        console.log("Coding...");
    }
}

let sbz = new SoftwareEngineer();

sbz.work();         // Output ->> Coding...

// Here object sbz overrides the method "work" of class "SoftwareEngineer" over class "Person" 
// So instead of print "Work...", it prints  "Coding..."