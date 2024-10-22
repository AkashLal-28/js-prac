const myarr = ['ravi', 'rubi', 'bunty', 'sachin']

myarr.forEach(function (names) { console.log(names) })  //this is what we call callback function

//or

myarr.forEach((items) => { console.log(items) })  //this is what we call callback function

//or

function print(item) {
    console.log(item)
}

myarr.forEach(print) //only reference is given and not whole print()

//or 

myarr.forEach((item, i, arr) => {
    console.log(item, i, arr)
})


//forEach on objects inside array
//[{},{},{}] form

const obj = [
    {
        a: 'red',
        b: 'warm'
    },
    {
        a: 'red',
        b: 'warm'
    },
    {
        a: 'red',
        b: 'warm'
    },

]

obj.forEach((it) => {
    console.log(it.a);
})