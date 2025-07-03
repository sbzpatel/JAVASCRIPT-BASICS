// ✅ ############## Variable Hoisting ############## ✅ //

    // Hoisting is JavaScript's default behavior of moving variable and function declaration to the top of their scope before starts code execution.

    // ✅ ############## What is Variable Hoisting? ############## ✅ //
        // When we declare a variable(using var, let or const), the declaration is `hoisted` to the top of the scope, but only `var` is initialized with `undefined`, while let and const are not initialized.

        // 🔸 ############## var Hoisting ############## 🔸 //

            // Eg:
                console.log(a); // undefined
                var a = 5;

            // Behind the scenes:
                var a;      // variable declaration hoisted(pulled up to the scope)
                console.log(a);     // undefined, Above value sets to undefined
                a = 5;

            // Declaration is hoisted, but assignment stays in place.

        // 🔸 ############## var Hoisting ############## 🔸 //

        
        // 🔸 ############## let and const Hoisting (with Temporal Dead Zone) ############## 🔸 //
        
            // Eg:
                console.log(b);     // ❌ ReferenceError
                let b = 10;

                console.log(c);     // ❌ ReferenceError
                let c = 15;

                // ❌ They are hoisted, but not initialized, so accessing them before initialization cause a ReferenceError.

        // 🔸 ############## let and const Hoisting (with Temporal Dead Zone) ############## 🔸 //

        
        // 🧠 ############## Temporal Dead Zone (TDZ) ############## 🧠 //
            
            // The time between entering the scope and the line where the variable is declared is called the `Temporal Dead Zone` for `let` and `const`.
        
        // 🧠 ############## Temporal Dead Zone (TDZ) ############## 🧠 //


        // ✅ ############## Best Practice ############## ✅ //

            // Always use let and const to avoid unexpected behavior caused by hoisting with var.

        // ✅ ############## Best Practice ############## ✅ //

    // ✅ ############## What is Variable Hoisting? ############## ✅ //

// ✅ ############## Variable Hoisting ############## ✅ //