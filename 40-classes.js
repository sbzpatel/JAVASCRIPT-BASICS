// Class is a program-code template for creating objects.

// Those objects will have some state(variables) & some behaviour(functions) inside it.

class ToyotaCar {
    start() {
        console.log("starts...");
    } 

    stop() {
        console.log("stops...");
    }

    setBrand(brand) {       // method setBrand used to set "brandName" property of object 
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();     // creates objects of class fortuner

fortuner.start();       // call start method of object fortuner

fortuner.stop();        // call stop method of object fortuner

fortuner.setBrand("Fortuner");      // sets the brandName property in fortuner object through "setBrand" method

console.log(fortuner.brandName);        // Output ->> Fortuner

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Another Example $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    let innova = new ToyotaCar();

    innova.start();

    innova.stop();

    innova.setBrand("Innova Crysta");

    console.log(innova.brandName);          // Output ->> Innova Crysta

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Another Example $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$