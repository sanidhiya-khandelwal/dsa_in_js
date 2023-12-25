function isPalindrome(x) {

    num = x; rev = 0;
    while (num) {
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    return rev === x;
};
console.log(isPalindrome(10));

console.log(isPalindrome(11));