// This function uses linear search to find an element in the array.
// 27 Sept 2026

function linearSearch(arr, target) {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return arr[i]
        } else {
            return null
        }
    }
}
console.log(linearSearch([5, 7, 1, 4, 8, 1, 3, 9, 6, 2], 11), "\nThe index of element is ", i)