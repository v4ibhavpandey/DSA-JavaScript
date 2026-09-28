// This function checks if the given string is palindrome or not.
// 28 Sept 2026

function isPalindrome(string) {
    let reversed = "";
    for (i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    } if (reversed === string) {
        return true;
    } else {
        return false
    }

}
console.log(isPalindrome("vaibhavpandey")) // False
console.log(isPalindrome("racecar"))       // True
