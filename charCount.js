// This function counts how make times a character is repeated in the string.
// 28 Sept 2026

function charCount(string, target) {
    let count = 0;
    let str = string.toLowerCase()
    let tar = target.toLowerCase()
    for (i = 0; i <= string.length; i++) {

        if (str[i] == tar) {
            count += 1;
        }
    } return count
}
console.log(charCount("Hi This is a Sample string.", "i"))