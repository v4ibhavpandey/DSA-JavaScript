// This function counts all the possible pairs in the given array.
// 26 Sept 2026

function countPairs(arr) {
    pairs = []
    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]])


        }
    } return pairs
} console.log(countPairs([1, 2, 3, 4]))