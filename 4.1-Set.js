// ✅ $$$$$$$$$$$$$$$$$ JavaScript Set $$$$$$$$$$$$$$$$$ ✅ //

    // In JavaScript, a `Set` is a built-in object used to store unique values of any type(whether primitive or object reference).
    
    // ✅ $$$$$$$$$$$$$$$$$ Key Features of Set $$$$$$$$$$$$$$$$$ ✅ //
        
        // Stores unique values(no duplicates)
        // Maintain insertion order (In iteration, values are returned in a same order in which they were added)
        // Can store any data type
    
    // ✅ $$$$$$$$$$$$$$$$$ Key Features of Set $$$$$$$$$$$$$$$$$ ✅ //


    // 🔧 $$$$$$$$$$$$$$$$$ Creating a Set $$$$$$$$$$$$$$$$$ 🔧 // 

        // Eg: (Initialize empty set)
            const mySet = new Set();        // Create or Initialize an empty set(with no any values)
        
        // Eg: (Initialize with values)
            const numbers = new Set([1,2,3,4,4,2]);
            console.log(numbers);       // Set(4) { 1, 2, 3, 4 }

    // 🔧 $$$$$$$$$$$$$$$$$ Creating a Set $$$$$$$$$$$$$$$$$ 🔧 // 

    
    // 🧩 $$$$$$$$$$$$$$$$$ Basic Methods $$$$$$$$$$$$$$$$$ 🧩 // 

        // Eg: 
            const items = new Set();

            // new item added
            items.add("Apple");
            console.log(items);         // Set(1) { 'Apple' }

            // new item added
            items.add("Mango");
            console.log(items);         // Set(2) { 'Apple', 'Mango' }

            // duplicate item "Apple" added
            items.add("Apple");
            console.log(items);         // Set(2) { 'Apple', 'Mango' } (duplicate not allowed)

            // returns size
            console.log(items.size);        // 2

            // check whether item present
            console.log(items.has("Apple"));        // true

            // item deleted
            items.delete("Apple")       // "Apple" item removed
            console.log(items);         // Set(1) { 'Mango' }

            // remove all items
            items.clear();
            console.log(items);         // Set(0) {}

    // 🧩 $$$$$$$$$$$$$$$$$ Basic Methods $$$$$$$$$$$$$$$$$ 🧩 // 


    // 🔁 $$$$$$$$$$$$$$$$$ Looping through a Set $$$$$$$$$$$$$$$$$ 🔁 //
        // There are 2 types of loops used to iteratively access Set's items one by one.

        // ✅ $$$$$$$$$$$$$$$$$ Using for...of $$$$$$$$$$$$$$$$$ ✅ //

            // Eg:
                const fruits = new Set(["Apple", "Mango", "Guava", "Grapes"]);

                for(let fruit of fruits) {
                    console.log(fruit);
                }

                // Output:
                    // Apple
                    // Mango
                    // Guava
                    // Grapes

        // ✅ $$$$$$$$$$$$$$$$$ Using for...of $$$$$$$$$$$$$$$$$ ✅ //

        
        // ✅ $$$$$$$$$$$$$$$$$ Using forEach loop $$$$$$$$$$$$$$$$$ ✅ //
            
            // Eg:
                const friends = new Set(["Shahbaz", "Kaleem", "Ilham", "Maghfir", "Badreaalam"]);

                friends.forEach(friend => console.log(friend));

                // Output:
                    // Shahbaz
                    // Kaleem
                    // Ilham
                    // Maghfir
                    // Badreaalam

        // ✅ $$$$$$$$$$$$$$$$$ Using forEach loop $$$$$$$$$$$$$$$$$ ✅ //

    // 🔁 $$$$$$$$$$$$$$$$$ Looping through a Set $$$$$$$$$$$$$$$$$ 🔁 //

        
    // 🧠 $$$$$$$$$$$$$$$$$ When to Use Set? $$$$$$$$$$$$$$$$$ 🧠 //
        // ✅ 1) To store a collection of unique values

        // ✅ 2) To remove duplicates from an array:

            // Eg:
                const nums = [1, 2, 2, 3, 4, 4];
                console.log(nums);      // [ 1, 2, 2, 3, 4, 4 ] (array contains even duplicate values)

                const uniqueNums = [...new Set(nums)];      // convert to Set and then further to a new array by using (...) spread operator
                console.log(uniqueNums);    // [ 1, 2, 3, 4 ]

    // 🧠 $$$$$$$$$$$$$$$$$ When to Use Set? $$$$$$$$$$$$$$$$$ 🧠 //

// ✅ $$$$$$$$$$$$$$$$$ JavaScript Set $$$$$$$$$$$$$$$$$ ✅ //