// let str = "nit"
// let arr = Array.from(str)
// let revarr = arr.reverse()
// let revstr = revarr.toString()
// console.log(revstr)

// let rev = []
// function ispalin(arr){
//     for(let i=arr.length-1;i>=0;i--)
// }

let rev = ""

function pal(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i]
    }  
    if(rev==str){
        return true
    }  
    else{
        return false
    }
}
// console.log(pal("nitin"))

//array reverse

var revarray = []

function rever(myarr){
    for(i=myarr.length-1; i>=0; i--){
        revarray.push(myarr[i])
    }
    return revarray
}

console.log(rever([1,23,3,4,5]))
