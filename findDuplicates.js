// This function finds the duplicate elements in an array.
// 26 Sept 2026

function findDupl(arr) {
    dupli = []
    for (i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !dupli.includes(arr[i])) {
            dupli.push(arr[i])
        }
    } return dupli
}
console.log(findDupl([1, 2, 3, 2, 1, 4, 3]))
