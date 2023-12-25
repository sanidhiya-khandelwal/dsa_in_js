/*
 sum of all natural numbers from 1 to n

 sum of 1 to 5 is 15

 */

function sumOfNaturaNums(num) {
    // sum = 0;
    // for (i = 1; i <= num; i++) {
    //     sum += i;
    // }
    // return sum;

    return num * (num + 1) / 2;
}

console.log(sumOfNaturaNums(10));
console.log(sumOfNaturaNums(6));
