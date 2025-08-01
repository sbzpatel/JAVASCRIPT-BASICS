// ✅ ############## JavaScript Arrays ############## ✅ //

    // In Javascript, array is a special type of object used to store & manage ordered collection of values of any data types(string, number, another array or functions).

    // Each element in an array assigned a numerical index to access it, first element of an array assigned index 0, next element's index could be 1 and so on.

    // Arrays are dynamic, means its size can change(increase or shrink) during program execution.


    // Syntax ->>
        const fruits = ["Banana", "Orange", "Mango"];
        console.log(fruits);
        
    // Using constructor we can create array like below:
        const Fruits = new Array("Banana", "Orange", "Mango");
        console.log(Fruits); 
        
    // The literal "[]" syntax is preferred for readability and simplicity.

    // In array, each element has a numeric index, starting from 0, in "fruits" array variable contains 3 elements & "Banana" present on index 0, simillarly "Orange" element present on index 1 and "Mango" element present on index 2.
    // Index is used to access & manipulate the array's element.

    // ✅ ############## How to declare an array? ############## ✅ //

        // ✅ ############## Using square brackets[] (Most common way) ############## ✅ //

            // Eg:
                let friends = ["Shahbaz", "Kaleem", "Ilham"];

        // ✅ ############## Using square brackets[] (Most common way) ############## ✅ //

            
        // ✅ ############## Using the Array constructor ############## ✅ //

            // Eg:
                let friendsArr = new Array("Shahbaz", "Kaleem", "Ilham");

        // ✅ ############## Using the Array constructor ############## ✅ //

    // ✅ ############## How to declare an array? ############## ✅ //

            
    // ✅ ############## Accessing array element ############## ✅ //
        // We can access each array element using it's index.

        // Eg:
            console.log(friends[1]);        // Kaleem

    // ✅ ############## Accessing array element ############## ✅ //

            
    // ✅ ############## Modifying array element ############## ✅ //
        // We can modify the each array element using assignment operators(=) as below:
        
        // Eg:
            friends[2] = "Badreaalam";
            console.log(friends[2]);        // Badreaalam

    // ✅ ############## Modifying array element ############## ✅ //

            
    // ✅ ############## Looping through array ############## ✅ //
        // Genrally we are using 3 loop methods to access array elements iteratively(sequentially).

        // Eg:  (Using for loop)
            for(let i=0;i<friends.length;i++) {
                console.log(friends[i]);
            }
            
        // Eg: (Using forEach loop)
            friends.forEach(function(friend) {
                console.log(friend);
            })

        // Eg: (Using for...of loop)
            for(let friend of friends) {
                console.log(friend);
            }

    // ✅ ############## Looping through array ############## ✅ //


    // ✅ ############## Convert array like object to an array ############## ✅ //
        // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
        
        // Eg:
            objectLikeArray = {     // Array like object
                0: "Shahbaz",
                1: "Kaleem",
                2: "Ilham",
                length: 3
            }

            friends = Array.from(objectLikeArray);      // converts this type of object to an array using "Array.from"

            console.log(friends[1]);    // Kaleem

    // ✅ ############## Convert array like object to an array ############## ✅ //


    // ✅ ############## Sparse arrays ############## ✅ //
            // Sparse array is an array that don't have its elements at contiguos positions, there are some empty slots & holes.
            
            // Eg:
                const friends = [];
                friends[0] = "Shahbaz";
                friends[2] = "Ilham";

                console.log(friends);       // [ 'Shahbaz', <1 empty item>, 'Ilham' ]
                console.log(friends[1]);    // undefined

    // ✅ ############## Sparse arrays ############## ✅ //
        
// ✅ ############## JavaScript Arrays ############## ✅ //


// ✅ ############## Average of Marks ############## ✅ //

    // Eg:
        let marks = [85, 95, 84, 92, 89];

        let sum = 0;

        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }

        console.log("Obtained Marks are:", sum);
        console.log("Obtained Avg Marks are:", (sum / marks.length));

// ✅ ############## Average of Marks ############## ✅ //