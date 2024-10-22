function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return `${target} is not there`;
}
var myarr = [1, 2, 5, 6, 7, 9, 10];
var tar = 3;
console.log(linearSearch(myarr, tar));
