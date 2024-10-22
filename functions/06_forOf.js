const arr = [1, 2, 3, 4]

// for (const num of arr){
//     console.log(num)
// }

// array destructure

const map = new Map()
map.set('IN', 'India')
map.set('EN', 'England')
map.set('AU', 'Australia')

// for(const [key, value] of map){
//     console.log(key, ':-', value)
// }

//for in

const myObj = {
    js: 'javascript',
    cpp: 'c++'
}

for (const key in myObj) {
    console.log(key, '-', myObj[key])  //myObj[key] key k ander ki value k liye
}

const myarr = ["friends", "the office", "breaking bad"]

for (const k in myarr) {
    console.log(k, myarr[k])
}