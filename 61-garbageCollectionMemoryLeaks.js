// In JavaScript, Garbage Collection(GC) and Memory Leaks are the crucial concepts related to how memory is managed during program execution.

// ############ 🗑️ Garbage Collection 🗑️ ############ //

    // Garbage Collection is the process by which the JavaScript engine automatically frees up memory that is no longer in use, so we don't want to manually allocate or deallocate memory like in languages such as C or C++.
    
    // ✅ How It Works:
        // JavaScript uses reference counting and mark-and-sweep algorithms.
        
        // 1) Reference Counting:
            // Keeps track of how many references point to an object. if its zero, then remove that object.
            
        // 2) Mark-and-Sweep:
            // Periodically, the GC "marks" all objects reachable from the root (global object, local variables in functions, etc), then "sweeps" and removes those not marked.
            
    // Eg:
        let person = { name: "John" };
        person = null; // Object {name: "John"} is now unreachable -> eligible for GC

// ############ 🗑️ Garbage Collection 🗑️ ############ //



// ############ 🧠 Memory Leak 🧠 ############ //

    // A memory leak happens when memory that is no longer needed is not released, because something is still referencing it unintentionally.
    
    // 💣 Common Causes of Memory Leaks 💣 //
        // 1) Global variables(never go out of scope) ->>
        
        // Eg:
            leakedVar = "I am global";  // No 'var', 'let' or 'const' -> global
            
           
            
        // 2) Closures that hold references ->>
    
        // Eg:
            function outer() {
              let bigData = new Array(1000000).fill("leak");
              return function inner() {
                console.log(bigData[0]);
              };
            }
            
            const leaky = outer(); // `bigData` never gets cleaned up
            
            
            
        // 3) Detached DOM elements ->>
        
        // Eg:
            let element = document.getElementById("myDiv");
            document.body.removeChild(element); // visually gone
            // Still in memory if a reference exists:
            let ref = element;  // should remove that line if exists
          
          
            
        // 4) Timers or intervals not cleared ->>
        
        // Eg:  // to avoid this issue use always clearInterval(), clearTimeout() methods after set Intervals properlly
            setInterval(() => {
              console.log("leaking memory if not cleared");
            }, 1000);
            
            
            
            
    // 🧰 How to Avoid Memory Leaks 🧰 //
    
        // 1) Use let, const & to avoid polluting the global variables which causes memory leaks
        // 2) Clear intervals/timeouts with clearInterval(), clearTimeout() methods
        // 3) Nullify references when related work done; eg: obj = null;
        // 4) Use browser tools like Chrome DevTools Memory Tab to analyze memory usage and detect leaks.

// ############ 🧠 Memory Leak 🧠 ############ //