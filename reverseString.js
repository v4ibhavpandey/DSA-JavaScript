// This function reverses a string without using ".reverse()".
// 28 Sept 2026

function revString(string) {
    let reversed = "";
    for (i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    } return reversed
}
console.log(revString("This is sample string"))