/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    sum = 0;
    for (let i = 1; i <= n; i++)
        sum += i;
}

let startTime = new Date().getTime(); //gets the milliseconds from 1970 to now
calculateTime(1000000000);
let endTime = new Date().getTime();
console.log((endTime-startTime)/1000)

//recordings 
// 100 - 0 sec
// 100000 - 0.011 sec
// 1000000000 - 91.234 sec