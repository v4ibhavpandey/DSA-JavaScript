// This function gives the sum of all elements of array 
// 26 Sept 2026

function sumAllArr(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(sumAllArr([3, 5, 7, 9]))