// ✅ ############## Object.freeze(), Object.seal(), and Object.preventExtensions() ############## ✅ //

    // These 3 methods(Object.freeze(), Object.seal(), and Object.preventExtensions()) are used to control how objects can be modified in JavaScript.

        // 🔐 ############## Object.preventExtensions(obj) ############## 🔐 //
        
            // Prevent new properties from being added to the object.
            // Existing properties can still be changed or deleted.

            // Eg: 
                const user11 = { name: "Shahbaz Patel" };

                Object.preventExtensions(user11);

                user11.age = 35;      // ❌ Fails silently or throws in strict mode
                console.log(user11);      // { name: 'Shahbaz Patel' }

                user11.name = "Kaleem Patel";
                console.log(user11);      // { name: 'Kaleem Patel' }

                delete user11.name;
                console.log(user11);      // {}

            // You want to lock structure, but still allow value updates and deletions.

        // 🔐 ############## Object.preventExtensions(obj) ############## 🔐 //



        // 🔐 ############## Object.seal(obj) ############## 🔐 //

            // Prevent new properties from being added.
            // Prevent existing properties from being deleted.
            // Existing properties can still be changed (if writable: true).

            // Eg:
                const user22 = { name: "Alice" };
                Object.seal(user22);

                user22.age = 25;        // ❌ Cannot add new property
                user22.name = "Bob";    // ✅ Can update
                delete user22.name;     // ❌ Cannot delete

            // You want to protect both structure and property presence, but allow value updates.

        // 🔐 ############## Object.seal(obj) ############## 🔐 //



        // 🧊 ############## Object.freeze(obj) ############## 🧊 //

            // Makes the object completely immutable:
                // ❌ No adding
                // ❌ No deleting
                // ❌ No changing existing values

            // const user = { name: "Alice" };

            // Eg:
                const user786 = { name: "Alice" };
                Object.freeze(user786);

                user786.name = "Bob";    // ❌ Fails silently or throws in strict mode
                user786.age = 25;        // ❌ Cannot add
                delete user786.name;     // ❌ Cannot delete

            // You want the object to be completely read-only.

        // 🧊 ############## Object.freeze(obj) ############## 🧊 //

// ✅ ############## Object.freeze(), Object.seal(), and Object.preventExtensions() ############## ✅ //