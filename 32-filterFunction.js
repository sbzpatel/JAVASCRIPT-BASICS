// ✅ ############## filter() Function ############## ✅ //

    // filter function is return array as same as map function with filteration of their values according to the given condition
    // but here we are filtering the array elements according to given condition mentioned in a callback function

    // Eg:
        let arr = [1, 3, 6, 8, 98, 34, 45, 67, 23, 66, 76, 55];

        let EvenNumArr = arr.filter((val) => {  // returning array containing even numbers in "EvenNumArr"
            return val % 2 == 0;                  // we only mention conditions here, no any alteration allowed as map function
        });

        console.log(EvenNumArr);

// ✅ ############## filter() Function ############## ✅ //
