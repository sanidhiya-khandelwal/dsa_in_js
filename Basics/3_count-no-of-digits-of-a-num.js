/*
count no of digits of a num and num can be negative as well

12345=5
*/

function digitsCount(num) {
    var count = 0;
    num = Math.abs(num);
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num)

    return count;
}

console.log(digitsCount(-212));
