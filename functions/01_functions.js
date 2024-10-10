function myfunction() {
    console.log("hi")
}

myfunction   //just reference
myfunction()   //execution

function test(num1, num2) {

    return num1 + num2
    //nothing can be included after return function
}

const result = test(2, 4)
console.log(result)

// multiple arguments single parameter

function test2(...prices){
    return prices
}

console.log(test2(200, 300, 400))

//stores starting data in val1, val2 returns rest of the data in prices

function test3(val1, val2, ...prices){
    return prices
}

console.log(test3(200, 400, 500, 600, 700))
//output== [500, 600, 700]


//passing objects in function

const user = {
    username : "sachin", 
    price : 199,
}

function userObject(myobj){
    return `user is ${myobj.username}, and price is ${myobj.price}`
}

console.log(userObject(user))

//passing array in function 

const Arr = [1,2,3,4,5]

function arrFunction(myArr){
    return myArr[2]   //or return myArr...for whole array
}

console.log(arrFunction(Arr))