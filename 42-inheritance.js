// inheritance is passing down properties & methods from parent class to child class

class Person {
    eat() {
        console.log("eat...");
    }

    sleep() {
        console.log("sleep...");
    }
}

class Engineer extends Person {     // here all the methods of class "Person" inherits in objects of class "Engineer"
    work() {
        console.log("Solve problem, Build something...");
    }
}

class Doctor extends Person {     // here all the methods of class "Person" inherits in objects of class "Doctor"
    work() {
        console.log("Treat patients...");
    }
}




let shahbaz = new Person();

shahbaz.eat();      // Output ->> eat...
shahbaz.sleep();    // Output ->> sleep...





let sbz = new Engineer();

sbz.eat();      // Output ->> eat...        
sbz.sleep();    // Output ->> sleep...
sbz.work();     // Output ->> Solve problem, Build something...





let arhaan = new Engineer();

arhaan.eat();      // Output ->> eat...        
arhaan.sleep();    // Output ->> sleep...
arhaan.work();     // Output ->> Treat patients...