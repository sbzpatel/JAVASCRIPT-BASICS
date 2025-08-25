// ✅ ############## RegExp (Regular Expression) ############## ✅ //

    // Regular Expression(Regex) is an object that defines a search pattern for text. It is used to perform pattern based searches, replacements and other operations on strings.

    // In JavaScript, we can use regex with below methods
        // 1) .match()
        // 2) .search()
        // 3) .replace()
        // 4) .split()
        // 5) .test()
        
    // Creating a Regex =>
        // 1) Literal Syntax =>
        
            // Eg:
                let name = "Shahrukh Khan";
                let text = "Apple and Banana";
                
                console.log(name.match(/s/g));    // null
                console.log(name.match(/a/g));    // [ 'a', 'a' ]
                
                
                
                console.log(text.match(/a/g));  // [ 'a', 'a', 'a', 'a' ]
                console.log(text.match(/a/ig));  // [ 'A', 'a', 'a', 'a', 'a' ]
                
                console.log(text.match(/[ap]/ig));
                // O/P => // [
                        //   'A', 'p', 'p',
                        //   'a', 'a', 'a',
                        //   'a'
                        // ]
                
                
        // 2) Constructor Syntax =>
        
            // Eg:
                
                const reg1 = new RegExp("s", "g");
                const reg2 = new RegExp("a", "g");
                
                console.log(name.match(reg1));    // null
                console.log(name.match(reg2));    // [ 'a', 'a' ]
                
                
                
                
                const reg3 = new RegExp("a", "g");
                const reg4 = new RegExp("a", "ig");
                const reg5 = new RegExp("[ap]", "ig");
                
                console.log(text.match(reg3));  // [ 'a', 'a', 'a', 'a' ]
                console.log(text.match(reg4));  // [ 'A', 'a', 'a', 'a', 'a' ]
                
                console.log(text.match(reg5));
                // O/P => // [
                        //   'A', 'p', 'p',
                        //   'a', 'a', 'a',
                        //   'a'
                        // ]
                      
// ✅ ############## RegExp (Regular Expression) ############## ✅ //