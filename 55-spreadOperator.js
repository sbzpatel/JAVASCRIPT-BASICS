// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spread(...) Operator $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // Spread operator allow to expand iterables (like arrays, objects & strings) into individual element or property.

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spread in Arrays $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Copying Arrays $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

            const nums = [1, 2, 3];
            const copy = [...nums];
            
            console.log(copy); // [1, 2, 3]

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Copying Arrays $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
        
        
        
        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Merging Arrays $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

            const a = [1, 2];
            const b = [3, 4];
            const merged = [...a, ...b];
            
            console.log(merged); // [1, 2, 3, 4]

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Merging Arrays $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
        
        
        
        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spreading in Function Arguments $$$$$$$$$$$$$$$$$$$$$$$$ ✅ // 

            function sum(x,y,z) {
                return x+y+z;
            }
            
            const nums1 = [1,2,3];
            
            console.log(sum(nums1));     // 1,2,3undefinedundefined (Unexpected Output)
            console.log(sum(...nums1));     // 6

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spreading in Function Arguments $$$$$$$$$$$$$$$$$$$$$$$$ ✅ // 
        
        
        
        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ String to Characters $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

            const chars = [..."Shahbaz"];
            console.log(chars);     // ['S', 'h', 'a','h', 'b', 'a', 'z']

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ String to Characters $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spread in Arrays $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        
        
    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spread in Objects $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Copying Objects $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

            const user = { name: "Alice", age: 30 };
            const cloneUser = { ...user };
            
            console.log(cloneUser);     // { name: 'Alice', age: 30 }

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Copying Objects $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
            
        
        
        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Merging Objects $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

            const obj1 = {a:1};
            const obj2 = {b:2};
            
            const obj3 = {...obj1, ...obj2}
            console.log(obj3);      // { a: 1, b: 2 }

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Merging Objects $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
            
            
            
        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Overriding Properties $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

            const base = { name: "John", age: 25 };
            const updated = {...base, age: 35 };
            
            console.log(updated);       // { name: 'John', age: 35 }

        // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Overriding Properties $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spread in Objects $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
            
            
            
    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Rest vs Spread(Key Difference) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
    
        // ->> Spread(...) expands values.
        // ->> Rest(...) collects remaining values.
        
        const nums3 = [1,2,3];
        const copy3 = [...nums3];
        
        const [first, ...rest] = nums3;
        
        console.log(first);     // 1
        console.log(rest);      // [ 2, 3 ]

    // ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Rest vs Spread(Key Difference) $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //
    
// ✅ $$$$$$$$$$$$$$$$$$$$$$$$ Spread(...) Operator $$$$$$$$$$$$$$$$$$$$$$$$ ✅ //