const tinderUser = new Object()  //singleton object
const user = {}    //non singleton object

//insering data in object

user.car = 'bmw'
console.log(user)

tinderUser.id = 'abc123'
tinderUser.name = 'akash'
tinderUser.email = 'xyz'
tinderUser.isLoggedin = true

//deleting or removing property from object

delete tinderUser.name
delete tinderUser["isLoggedin"]

console.log(tinderUser)

//nested objects

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userfullname: {
            firstname: "akash",
            secondname: "lal",
        }
    }

}

console.log(regularUser.fullName.userfullname.firstname)

//combining different objects into one and accessing it

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3) //final
console.log(obj3[2]) //access

//Spread method

const obj4 = { ...obj1, ...obj2 }
console.log(obj4[1])  //for accessing

//getting the keys

console.log(Object.keys(tinderUser))  //gives an array of keys
console.log(Object.values(tinderUser))  //gives an array of values
console.log(Object.entries(tinderUser))  //gives key value in array inside big array
/* [
  [ 'id', 'abc123' ],
  [ 'name', 'akash' ],
  [ 'email', 'xyz' ],
  [ 'isLoggedin', true ]
] */

//to check if the property is there in the array

console.log(tinderUser.hasOwnProperty("email"))
