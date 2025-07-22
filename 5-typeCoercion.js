// ✅ ############## Type Coercion in Javascript ############## ✅ //

    // Type coercion is an automatic or implicit conversion of values from one type to another by JavaScript during arithmetic or comparison operations.

    // There are 2 types of coercions in JavaScript:
        // ✅ 1) Implicit Coercion ->> Done automatically by JavaScript    ->> 1 + "2" = "12"
        // ✅ 2) Explicit Coercion ->> Done manually using JS Function     ->> Number("123") -> 123

        // ✅ ############## Implicit Coercion ############## ✅ // 

            // Eg:
                let result = 5 + "10";
                console.log(result);    // "510" (Here number 5 coerced to a string)


                // Comparing values with == (loose equality):
                console.log(0 == false);    // true
                console.log("" == false);   // true
                console.log(null == undefined)      // true

                // ❌ Using === (strict equality) prevents coercion:
                console.log(0 === false);  // false
                console.log("5" === 5);    // false
                // No type coercion happens with ===(strict equality).

        // ✅ ############## Implicit Coercion ############## ✅ // 
                

        // ✅ ############## Explicit Coercion ############## ✅ // 

            // Eg:
                Number("123");   // 123
                String(123);     // "123"
                Boolean(0);      // false
                Boolean("hello") // true

        // ✅ ############## Explicit Coercion ############## ✅ // 


    // ✅ ############## Some Important Expressions result given below ############## ✅ //
    
        // 1) [] + []   ->> "" (Both array becomes empty strings)
        // 2) [] + {}   ->> "[object Object]"
        // 3) {} + []   ->> 0

    // ✅ ############## Some Important Expressions result given below ############## ✅ //

// ✅ ############## Type Coercion in Javascript ############## ✅ //