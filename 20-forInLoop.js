// ✅ ############## for-in Loop ############## ✅ //

    // for-in is a special type of for loop used to sequentially access each element's key of an object.

    // Eg1:
        let student = {
            name: "Arhaan Patel",
            age: 20,
            cgpa: 9.8,
            isPass: true
        }

        for (let key in student) {
            console.log("key =", key);                // getting here keys of object "student"
            console.log("value =", student[key]);    // getting equivalent vlaue of key at each iteration level
        }


    // Eg2: (Validating form data)
        const formData = {
            username: "john_doe",
            email: "",
            password: "secret123"
        };

        for(let key in formData) {
            if(!formData[key]) {
                console.log(`❌ ${formData[key]} is required`);
            }
        }

// ✅ ############## for-in Loop ############## ✅ //