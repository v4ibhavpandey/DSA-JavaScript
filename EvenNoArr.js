// This function finds all the even numbers of the array and their count. 
// 25 Sept 2026

function arrEven(arr) {
    let Evens = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            Evens.push(arr[i])

    }
    lenEven = Evens.length
    return Evens;
}
console.log(arrEven([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(lenEven, " elements are even.")