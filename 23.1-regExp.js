// ✅ ############## RegExp (Regular Expression) ############## ✅ //

    // Regular Expression(Regex) is an object that defines a search pattern for text. It is used to perform pattern based searches, replacements and other operations on strings.

    // In JavaScript, we can use regex with below methods
        // 1) .match()
        // 2) .search()
        // 3) .replace()
        // 4) .split()
        // 5) .test()


    // Using Flags =>
        // 1) g => global (find all matches)
        // 2) i => case-insensitive
        // 3) m => multiline

        
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



        // ✅ ############## "match()" Method ############## ✅ //

                // const greet = "Hello World!!!";
                // console.log(greet.match(/World/));
                
                
                // const str = "Hello hello HeLLo";
                // console.log(str.match(/hello/gi));
                
                
                // const str1 = "Order numbers: 123, 456, and 789.";
                // console.log(str1.match(/\d+/g));
        
        // ✅ ############## "match()" Method ############## ✅ //


        // ✅ ############## "search()" Method ############## ✅ //

                // const str2 = "Order number: 12345";
                // console.log(str2.search(/\d+/));
                
                
                // const str3 = "Hello World!!!";
                // console.log(str3.search(/world/));
                // console.log(str3.search(/world/gi));

        // ✅ ############## "search()" Method ############## ✅ //


        // ✅ ############## "replace()" Method ############## ✅ //

                // const str = "Hello World!!!";
                // console.log(str.replace("World", "JavaScript"));
                // console.log(str.replace("world", "JS"));
                
                
                // const str = "Hello World, World!!!";
                // console.log(str.replace(/World/g, "JS"));


                // const str = "Hello world World!!!";
                // console.log(str.replace(/World/gi, "JavaScript"));


                // const str = "Order numbers: 123, 456, and 789.";
                // const result = str.replace(/\d+/g, "#");
                // console.log(result);

        // ✅ ############## "replace()" Method ############## ✅ //


        // ✅ ############## "split()" Method ############## ✅ //

                // const text = "Hello    World  from    JavaScript";
                // console.log(text.split(/\s+/)); 
                
                
                // const str = "one1two2three3four";
                // const parts = str.split(/\d/);
                // console.log(parts);
                
                
                // const text = "apple,banana,cherry,dates";
                // const parts = text.split(/,/, 2);
                // console.log(parts);

        // ✅ ############## "split()" Method ############## ✅ //


        // ✅ ############## "test()" Method ############## ✅ //

                // const regex = /World/;
                // console.log(regex.test("Hello World!!!"));
                // console.log(regex.test("Hello JavaScript!!!"));
                
                
                // const regex = /world/i;     // i => ignore case
                // console.log(regex.test("Hello World!!!"));
                // console.log(regex.test("HELLO WORLD!!!"));


                // const regex = /\d/;       // d = any digit
                // console.log(regex.test("Order123"));
                // console.log(regex.test("NoanyOrder"));


                // console.log(/^Hello/.test("Hello World"));
                // console.log(/World$/.test("Hello World"));
                // console.log(/World$/.test("World Hello"));

        // ✅ ############## "test()" Method ############## ✅ //


        // ✅ ############## Practice Examples ############## ✅ //

                // test() => test the particular pattern whether particular pattern of string present or not in a given string.

                // const regex = /!!!!/;
                // console.log(regex.test("Hello, Shahrukh Khan!!!"));


                // const str = "The rain in Spain stays mainly in the plain";
                // console.log(str.match(/ain/g));     // [ 'ain', 'ain', 'ain', 'ain' ]


                // const str = "cat is sits on the cott...";
                // const regex = /c.t/g;
                // console.log(str.match(regex));


                // const str = "Hello SRK!!!";
                // const regex = /^Hello/;
                // // const regex = new RegExp("^Hello");
                // console.log(regex.test(str));


                // const str = "Hello SRK!!!";
                // const regex = /SRK!!!$/;
                // console.log(regex.test(str));


                // const str = "What a Good shot!!!";
                // const regex = /Go+d/;
                // console.log(regex.test(str));


                // const str = "What is your age!!!";
                // console.log(/[aeiou]/.test(str));
                // console.log(str.match(/[aeiou]/g));


                // const str = "What is your age!!!";
                // console.log(/[aeiou]/.test(str));
                // console.log(str.match(/[^aeiou]/g));


                // const number = "123456789";
                // const regex = /\d/g;
                // console.log(number.match(regex));


                // const password = "SRK_786007sbz";
                // const regex = /\w/;
                // console.log(regex.test(regex));


                // const str = "Shahrukh       Khan";
                // const regex = /\s/;
                // console.log(regex.test(str));

        // ✅ ############## Practice Examples ############## ✅ //
  

// ✅ ############## RegExp (Regular Expression) ############## ✅ //