console.log("@@@@@@@@@@@ reduce() Function @@@@@@@@@@@");

    // Performs some operations & reduces the array to a single value. it returns only single value.

    let arr = [8, 3, 4, 5, 1];

    const arrSum = arr.reduce((prev, curr) => {         // example 1, sum of array element
        return prev + curr;
    })

    console.log("Sum of array elements:", arrSum);

    const arrLargest = arr.reduce((prev, curr) => {     // example 2, greatest among array element
        return prev > curr ? prev : curr;
    });

    console.log("Largest among array elements:", arrLargest);

    const arrSmallest = arr.reduce((prev, curr) => {    // example 3, smallest among array element
        return prev < curr ? prev : curr;
    })

    console.log("Smallest among array elements:", arrSmallest);

console.log("@@@@@@@@@@@ reduce() Function @@@@@@@@@@@");