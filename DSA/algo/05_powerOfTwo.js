//my way

function powerOfTwo(n) {
    while (n > 1) {
        n = n / 2
        if (n == 1) {
            return true
        }
    }
    return false
}


console.log(powerOfTwo(32))

//another way

function p2(n) {
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(p2(24))