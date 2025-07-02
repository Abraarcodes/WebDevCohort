function test(a, b, c) {
    console.log(a, b, c);
}

test(1);             // Output: 1 undefined undefined
test(1, 2);          // Output: 1 2 undefined
test(1, 2, 3, 4, 5); // Output: 1 2 3



//js doesnt care about how many arguments you pass