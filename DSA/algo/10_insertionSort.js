function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > numToInsert) {
            //swap
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = numToInsert
    }
    return arr
}

        
const arr = [3, 2, 5, 4, 8, 6, 9, 7];
const result = insertionSort(arr)

console.log(result)