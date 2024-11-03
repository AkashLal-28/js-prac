function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        minvalue = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minvalue]) {
                minvalue = j
            }
        }
        [arr[i], arr[minvalue]] = [arr[minvalue], arr[i]]
    }
    return arr
}

const myarr = [1, 4, 5, 3, 7, 9, 8]
const result = selectionSort(myarr)
console.log(result)