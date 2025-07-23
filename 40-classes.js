// ✅ $$$$$$$$$$$$$$$$$$$ JavaScript Classes $$$$$$$$$$$$$$$$$$$ ✅ //

    // A class is a blueprint for creating objects with shared properties and methods.
    

    //🔹$$$$$$$$$$$$$$$$$$$ Syntax of a Class(Class Creation) $$$$$$$$$$$$$$$$$$$🔹//
    
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

    //🔹$$$$$$$$$$$$$$$$$$$ Syntax of a Class(Class Creation) $$$$$$$$$$$$$$$$$$$🔹//


    //🔹$$$$$$$$$$$$$$$$$$$ Creating Object from a Class $$$$$$$$$$$$$$$$$$$🔹//

        let fortuner = new ToyotaCar();     // creates object of class fortuner

        fortuner.start();       // call start method of object fortuner

        fortuner.stop();        // call stop method of object fortuner

        fortuner.setBrand("Fortuner");      // sets the brandName property in fortuner object through "setBrand" method

        console.log(fortuner.brandName);        // Output ->> Fortuner

    //🔹$$$$$$$$$$$$$$$$$$$ Creating Object from a Class $$$$$$$$$$$$$$$$$$$🔹//


    // ✅ $$$$$$$$$$$$$$$$$$$ Another Example $$$$$$$$$$$$$$$$$$$ ✅ //

        let innova = new ToyotaCar();

        innova.start();

        innova.stop();

        innova.setBrand("Innova Crysta");

        console.log(innova.brandName);          // Output ->> Innova Crysta

    // ✅ $$$$$$$$$$$$$$$$$$$ Another Example $$$$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$$$ JavaScript Classes $$$$$$$$$$$$$$$$$$$ ✅ //