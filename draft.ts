let arr = [1, 3, 2, 5, 8, 4, 99, 87, 66]
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr

    let left = [], right = [], index = Math.floor(arr.length / 2), middle = arr.splice(index, 1)[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middle) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }


    return quickSort(left).concat([middle], quickSort(right))
}


console.log(quickSort(arr))