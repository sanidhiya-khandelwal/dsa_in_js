/*
sum of digits of a number

123=>1+2+3=>6

rem=>123%10=>3
sum=>sum+rem;0+3
n=>n/10;
*/

function sumOfDigits(num) {
    var sum = 0;
    var rem;
    var num = num;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(2123));