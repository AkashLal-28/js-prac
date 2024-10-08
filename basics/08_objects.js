//it is a general practice to declare objects using const

const msym = Symbol("key1")

const user = {
    nam:"akash",
    age:24,
    "full name":"Akash Lal",
    [msym]:"mykey1"
}

//methods to access objects' elements
console.log(user.nam)
console.log(user["nam"])    //keys are nothing but strings, use quotes in square brackets
console.log(user["nam"])   //since key is also string
// console.log(user.full name)  //cant be accessed through dot method because declared as strings already
console.log(user[msym])
console.log(type)
//therefore

console.log(user["full name"])
