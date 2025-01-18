// Class is a program-code template for creating objects.

// Those objects will have some state(variables) & some behaviour(functions) inside it.

class ToyotaCar {
    start() {
        console.log("starts...");
    } 

    stop() {
        console.log("stops...");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();

fortuner.start();

fortuner.stop();

fortuner.setBrand("Fortuner");      // sets the brandName property in fortuner object through "setBrand" method

console.log(fortuner.brandName);        // Output ->> Fortuner