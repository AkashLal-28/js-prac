//recursion is not a good solution for fibonacci sequence...as time complexity is O(2^n)

function recursFibo(n){
    if(n<2){
        return n
    }
    return recursFibo(n-1) + recursFibo(n-2)
}

console.log(recursFibo(4))