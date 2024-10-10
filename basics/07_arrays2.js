const friends = ["sat", "sau", "dev"]
const ssbFriends = ["aryan", "aditya", "atul"]

friends.push(ssbFriends)  //returns array inside array...operation in the same array
console.log(friends)

console.log(friends[3][2]) //to access the second array elements //not a good practice anyways

// concat() method....returns new array

const newFriends = friends.concat(ssbFriends)
console.log(newFriends)

//spread method

const allnew = [...friends, ...ssbFriends]
console.log(allnew)

//another cool method

const nums = [1, 2, 3, 4, [5, 6, 7], [55, 66, [77, 88]]]
const newnums = nums.flat(Infinity)  //merges the branched arrays into a single array...give the depth in 1,2,..Infinity
console.log(newnums)

//to array

const data = "akash123"
const newdata = Array.from(data)  //divides the strings into individual elements and makes array of it
//can take only one input
console.log(newdata)

//to check whether array

console.log(Array.isArray(newdata))

//interesting case

const obj = {
    myname: "AKASH",
    age: 24
}
console.log(Array.from(obj))  //returns empty array

let x = 100
let y = 200
let z = 300

const xyzArr = Array.of(x, y, z)  //takes data from individual variables and returns array
//can take multiple input
console.log(xyzArr)