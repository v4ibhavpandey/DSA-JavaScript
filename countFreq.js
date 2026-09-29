// This function counts how many times a number repeats in an array.
// 29 Sept 2026

function countFreq(arr) {
    let freq = new Map()


    for (let i = 0; i < arr.length; i++) {
        if (freq.has(arr[i])) {
            freq.set(arr[i], freq.get(arr[i]) + 1);
        } else {
            freq.set(arr[i], 1);
        }
    } return freq
}
console.log(countFreq([1, 2, 3, 2, 3, 1, 2, 1]));
