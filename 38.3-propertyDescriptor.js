// ✅ ############## property descriptors (writable, enumerable, and configurable) ############## ✅ //

    // Every property in a JavaScript object has metadata attached to it called a property descriptor. This metadata controls how the property behaves(whether it can be changed, listed or deleted).
    // We can access or define these using:
        // 1) Object.getOwnPropertyDescriptor();
        // 2) Object.defineProperty()

    // ✅ ############## writable ############## ✅ //

        // Controls: Whether the property can be changed.
        // Default: `false` ->> when defined via Object.defineProperty().

        // Eg:
            const obj = {};

            Object.defineProperty(obj, "name", {
                value: "Shahbaz",
                // writable: true      // default value 'false' (on comment writable `false` here)
            });

            obj.name  = "Kaleem";
            console.log(obj.name);      // Shahbaz

    // ✅ ############## writable ############## ✅ //

    // ✅ ############## enumerable ############## ✅ //

        // Controls: Whether the property shows up during enumeration(by using for...in or Object.keys()).
        // Default: false(with defineProperty)

        // Eg:
            const obj22 = {
                a: 1,
                b: 2
            };

            Object.defineProperty(obj22, 'c', {
                value: 3,
                // enumerable: true        // by default its `false` (on comment enumerable `false` here)
            });

            console.log(Object.keys(obj22))     // [ "a", "b" ]

            for (let key in obj22) {
                console.log(key);           // Output: "a", "b"
            }

            console.log(obj22.propertyIsEnumerable('a'));       // Output: true
            console.log(obj22.propertyIsEnumerable('c'));       // Output: false

    // ✅ ############## enumerable ############## ✅ //

    // ✅ ############## configurable ############## ✅ //

        // Controls: Whether the property can be deleted or redefined.
        // Default: false(with defineProperty)

        // Eg:
            const user0 = {};

            Object.defineProperty(user0, "role", {
                value: "admin",
                writable: true,
                enumerable: true,
                // configurable: true        // by default its `false` (on comment configurable `false` here)
            });

            console.log(user0.role);     // "admin"

            // Try deleting the property "role"
            delete user0.role;
            console.log(user0.role);     // "admin" → ❌ not deleted because configurable: false 

            // Try redefining the property (throws an error in strict mode)
            Object.defineProperty(user0, "role", {
                value: "superadmin"
            })  // ❌ TypeError in strict mode
            console.log(user0.role);

    // ✅ ############## configurable ############## ✅ //

// ✅ ############## property descriptors (writable, enumerable, and configurable) ############## ✅ //