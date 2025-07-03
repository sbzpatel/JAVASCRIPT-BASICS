// ✅ $$$$$$$$$$$$$$$$$ JavaScript Map $$$$$$$$$$$$$$$$$ ✅ //

    // `Map` is a a built-in object used to store values in the form of key-value pairs, unlike an object keys can be of any data type.
    
    // ✅ $$$$$$$$$$$$$$$$$ Key Features of Set $$$$$$$$$$$$$$$$$ ✅ //
        // A Map is simillar to an Object, but with some powerful advantages:

        // 1) Keys can be of any data type(primitive or reference type).
        // 2) Maintains the insertion order of keys
        // 3) Has built-in methods like set(), get(), has(), etc for different operations.

    // ✅ $$$$$$$$$$$$$$$$$ Key Features of Set $$$$$$$$$$$$$$$$$ ✅ //


    // 🔧 $$$$$$$$$$$$$$$$$ Creating a Map $$$$$$$$$$$$$$$$$ 🔧 //
    
        // Eg: (Initialize empty Map)
            const myMap = new Map();

            // Eg: (Initialize with values)
            const capitals = new Map([
                ["India", "New Delhi"],
                ["USA", "Washington"],
                ["Japan", "Tokyo"],
                ["China", "Bejing"]
            ]);

    // 🔧 $$$$$$$$$$$$$$$$$ Creating a Map $$$$$$$$$$$$$$$$$ 🔧 //


    // 🧩 $$$$$$$$$$$$$$$$$ Basic Methods $$$$$$$$$$$$$$$$$ 🧩 // 

        // Eg:
            // empty Map intialized
            const map = new Map();    

            // set new value in key-value pair in Map
            map.set("name", "Shahbaz");
            console.log(map);       // Map(1) { 'India' => 'New Delhi' }

            // set new value in key-value pair in Map
            map.set("age", 35);
            console.log(map);       // Map(2) { 'name' => 'Shahbaz', 'age' => 35 }

            // set key of `number` type
            map.set(1, "one");
            console.log(map);       // Map(3) { 'name' => 'Shahbaz', 'age' => 35, 1 => 'one' }

            // set key of `boolean` type
            map.set(true, "yes");
            console.log(map);
            // Map(4) { 'name' => 'Shahbaz', 'age' => 35, 1 => 'one', true => 'yes' }

            // return the value of key `name`
            console.log(map.get("name"));       // Shahbaz

            // check whether key `1` present
            console.log(map.has(1))     // true

            // return the size of Map `map`
            console.log(map.size);      // 4

            // delete property of having key `true`
            map.delete(true);       
            console.log(map);       // Map(3) { 'name' => 'Shahbaz', 'age' => 35, 1 => 'one' } (delete property of having key `true`)

    // 🧩 $$$$$$$$$$$$$$$$$ Basic Methods $$$$$$$$$$$$$$$$$ 🧩 // 

    
    // 🔁 $$$$$$$$$$$$$$$$$ Looping through a Map $$$$$$$$$$$$$$$$$ 🔁 //
        // There are 2 types of loops used to iteratively access Map's items one by one.

        // ✅ $$$$$$$$$$$$$$$$$ Using for...of $$$$$$$$$$$$$$$$$ ✅ //

            // Eg:
                for(let [key, value] of map) {
                    console.log(`${key}: ${value}`);
                }

                // Output:
                    // name: Shahbaz
                    // age: 35
                    // 1: one

        // ✅ $$$$$$$$$$$$$$$$$ Using for...of $$$$$$$$$$$$$$$$$ ✅ //


        // ✅ $$$$$$$$$$$$$$$$$ Using forEach loop $$$$$$$$$$$$$$$$$ ✅ //

            // Eg:
                map.forEach((key, value) => {
                    console.log(`${key}: ${value}`);
                });

                // Output:
                    // name: Shahbaz
                    // age: 35
                    // 1: one

        // ✅ $$$$$$$$$$$$$$$$$ Using forEach loop $$$$$$$$$$$$$$$$$ ✅ //

    // 🔁 $$$$$$$$$$$$$$$$$ Looping through a Map $$$$$$$$$$$$$$$$$ 🔁 //


    // 🧠 $$$$$$$$$$$$$$$$$ When to Use Set? $$$$$$$$$$$$$$$$$ 🧠 //

        // 1) We need to store data in the form of key-value pairs.
        // 2) Keys can be of any type
        // 3) Maintain the insertion order
        // 4) Can frequently add/delete keys

    // 🧠 $$$$$$$$$$$$$$$$$ When to Use Set? $$$$$$$$$$$$$$$$$ 🧠 //

// ✅ $$$$$$$$$$$$$$$$$ JavaScript Map $$$$$$$$$$$$$$$$$ ✅ //