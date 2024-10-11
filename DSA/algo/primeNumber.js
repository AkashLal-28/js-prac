function prime(n) {
    if (n < 2) {
        return false
    }
    else{
        for (let i = 2; i < n; i++) {   //not i<=n because if suppose n=5, it will be divided by i and will fall in the condition
            if(n%i === 0){
                return false
            }
        }
    return true
    }
}

console.log(prime(5))