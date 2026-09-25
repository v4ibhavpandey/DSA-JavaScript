// This function reverses the given array.
// 25 Sept 2026

function arrRev(arr) {
    let revArr = []
    for (i = 0; i < arr.length; i++) {
        revArr.unshift(arr[i])
    } return revArr;
}
console.log(arrRev([1, 2, 3, 4, 5, 6]))