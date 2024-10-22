function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target == arr[mid]) {
            return mid;
        }
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

const myarr = [1, 3, 4, 5, 6, 7, 9];
const tar = 6;

console.log(binarySearch(myarr, tar));

//time complexity--O(logn)
