// class constructor automatically created on object creation of class

// by default constructor is a function in an object's proptotype, even we can override it with our new one by creating it in an object

// When any object created, at that time only constructor invoked automatically

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new ToyotaCar Object Constructor...");

        // sets the property "brand" & "mileage" on object creation (in constructor method)
        this.brand = brand;     
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.brand} starts...`);
    } 

    stop() {
        console.log(`${this.brand} stops...`);
    }
}
 
let fortuner = new ToyotaCar("fortuner", 10);     // Output ->> Creating new ToyotaCar Object Constructor... (constructor called & sets properties brand & mileage)
console.log("Brand Name:", fortuner.brand);       // Now these properties can access from objects
console.log("Mileage:", fortuner.mileage);


let innova = new ToyotaCar("Innova Crysta", 14);       // Output ->> Creating new ToyotaCar Object Constructor... (constructor called & sets properties brand & mileage)
console.log("Brand Name:", innova.brand);              // Now these properties can access from objects
console.log("Mileage:", innova.mileage);