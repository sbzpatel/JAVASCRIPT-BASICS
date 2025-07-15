// In JavaScript, Garbage Collection & Memory Leak both concepts are related to memory management during program execution.

// 🗑️ ############ Garbage Collection ############ 🗑️ //

    // Garbage Collection is the process by which the JavaScript Engine automatically frees up memory that is no longer in use, so we don't need to manually allocate or deallocate memory like in other languages such as C and C++.
    
    // ✅ How It Works =>
        // JavaScript uses reference counting and mark-and-sweep algorithms.
        
        // 1) Reference Counting =>
            // Keeps track of how many references point to an object. If its zero, then remove that object.
            
        // 2) Mark-and-Sweep =>
            // Periodically, the GC "marks" all objects reachable from the root (global object, local variables in functions, etc), then "sweeps" and removes those not marked.
            
    // Eg: (Example1)
        let person = { name: "John" };
        person = null; // Object {name: "John"} is now unreachable -> eligible for GC


    // Eg: (Example2 clearly shows how mark-sweep happens)
        class algo {
            constructor() {
                this.objects = [];
            }   
            
            createObject(name) {
                const obj = { name: name, refCount: 1 };
                this.objects.push(obj);
                return obj;
            }
            
            mark() {
                this.objects.forEach(obj => {
                    if(obj.refCount > 0) {
                        obj.marked = true;
                    }
                })
            }
            
            sweep() {
                this.objects = this.objects.filter(obj => obj.marked);
            }
            
            collectGarbage() {
                this.mark();
                this.sweep();
            }
            
            print() {
                return this.objects;
            }
        }


        const gc = new algo();

        const obj1 = gc.createObject("Object1");
        const obj2 = gc.createObject("Object2");

        obj2.refCount = 0;

        gc.collectGarbage();
        console.log(gc.print());

// 🗑️ ############ Garbage Collection ############ 🗑️ //



// 🧠 ############ Memory Leak ############ 🧠 //

    // A memory leak happens when memory that is no longer needed is not released, because something is still referencing it unintentionally.
    
    // 💣 ############ Common Causes of Memory Leaks ############ 💣 //
        // 1) Global variables(never go out of scope) =>
        
        // Eg:
            leakedVar = "I am global";  // No 'var', 'let' or 'const' -> global
            
           
            
        // 2) Closures that hold references =>
    
        // Eg:
            function outer() {
              let bigData = new Array(1000000).fill("leak");
              return function inner() {
                console.log(bigData[0]);
              };
            }
            
            const leaky = outer(); // `bigData` never gets cleaned up
            
            
            
        // 3) Detached DOM elements =>
        
        // Eg:
            let element = document.getElementById("myDiv");
            document.body.removeChild(element); // visually gone
            // Still in memory if a reference exists:
            let ref = element;  // should remove that line if exists
          
          
            
        // 4) Uncleared Timers & Intervals =>
        
        // Eg:  // to avoid this issue use always clearInterval(), clearTimeout() methods after set Intervals properlly
            setInterval(() => {
                console.log("leaking memory if not cleared");
            }, 1000);

    // 💣 ############ Common Causes of Memory Leaks ############ 💣 //            
            
            
            
    // 🧰 ############ How to Avoid Memory Leaks ############ 🧰 //
    
        // 1) Use let, const & to avoid polluting the global variables which cause memory leaks
        // 2) Clear intervals/timeouts with clearInterval(), clearTimeout() methods
        // 3) Nullify references when related work done; eg: obj = null;
        // 4) Use browser tools like Chrome DevTools Memory Tab to analyze memory usage and detect leaks.

    // 🧰 ############ How to Avoid Memory Leaks ############ 🧰 //

// 🧠 ############ Memory Leak ############ 🧠 //