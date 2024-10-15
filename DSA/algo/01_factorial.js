function factorial(n) {
    temp = 1
    for (let i = 1; i <= n; i++) {
        temp = temp * i
    }
    return temp;
}

console.log(factorial(6))
