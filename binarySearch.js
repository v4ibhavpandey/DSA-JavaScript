// This function performs binary search of given array.
// 27 Sept 2026


function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return arr[mid];
        } if (arr[mid] < target) {

            left = mid + 1
        } else {
            right = mid - 1;
        }

    }


}
let mid = 0;
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7), "The index of target is ", mid)