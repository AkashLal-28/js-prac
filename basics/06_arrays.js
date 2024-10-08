const myarr = [0,1,2,3,4,5]
console.log(myarr.length)

//another method of creating an array

const arr = new Array(6,7,8,9)

console.log(myarr[1])
console.log(arr[1])

//Array methods

myarr.push(8)
myarr.pop()  //removes last value
myarr.unshift(40)  //adds the value at the beginning of the array
myarr.shift()   //removes the first element// no need of parameters
console.log(myarr)

console.log(myarr.includes(9))    //shows true or false accordingly
console.log(myarr.indexOf(4))    //show -1 if element not in the array

//.join()

const newArr = myarr.join()
console.log(newArr)   
console.log(typeof(newArr))     //returns or converts the array value in strings

//Slice and Splice

console.log(myarr)

const myn1 = myarr.slice(1,3) //includes first parameter but not second while giving the results
console.log("A", myn1)
console.log(myarr) //gives the exact value of real array, no manipulation after slice because slice works on the copy

const myn2 = myarr.splice(1,3)  //includes both first and second while giving results
console.log("B", myn2)
console.log(myarr) //Manipulates the real array after splicing because splicing is done on the reference of real arr
                    //returns the rest of the real array and not the spliced one