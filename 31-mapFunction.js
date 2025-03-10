console.log("@@@@@@@@@@@ map() Function @@@@@@@@@@@");

// map function getting arrow function as an argument and that function has 3 same parameters we see in as forEach function.

// map function returns array with alterations(changes) on each indexed value

let nums = [67, 89, 57];

let newArr = nums.map((val) => {
    return val * 2;
})

console.log("Alter Array using map function:", newArr);

console.log("@@@@@@@@@@@ map() Function @@@@@@@@@@@");