function fibonacci(n) {
    let fib = [0, 1]
    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

// console.log(fibonacci(6))

//another way

var first = 0
var second = 1

for(i = 0; i < 10; i++){
    var temp = first
    first = second
    second = second + temp
    console.log(temp)
}