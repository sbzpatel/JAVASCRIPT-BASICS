// ✅ $$$$$$$$$$$$$$$$$$$ Method Overriding $$$$$$$$$$$$$$$$$$$ ✅ //

    // Method overriding is a phenomenon in inheritance, where child class method overrides with its parent class method if they both method had a same name.

    // Generally method overriding is applicable for inherited class methods & it's constructor.


    // Eg:
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
        // So instead of print "Work...", it prints "Coding..."

// ✅ $$$$$$$$$$$$$$$$$$$ Method Overriding $$$$$$$$$$$$$$$$$$$ ✅ //