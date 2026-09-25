// This function finds largest element of the array.
// 25 Sept 2026

function arrLargest(arr) {
    let largest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }

    } return largest;

}
console.log(arrLargest([12, 5, 30, 82, 17, 23, 99]))