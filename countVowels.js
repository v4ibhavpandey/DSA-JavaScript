// This function counts total vowels in given string.
// 28 Sept 2026

function vowelCount(string) {
    var totalCount = 0
    for (i = 0; i < string.length; i++) {
        let ch = string[i].toLowerCase();
        if (ch == "a" ||
            ch == "e" ||
            ch == "i" ||
            ch == "o" ||
            ch == "u") {
            totalCount = totalCount + 1;
        }
    } return totalCount
}
console.log(vowelCount("ThisIsSampleString")) 