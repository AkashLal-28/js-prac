let name = "akash"
let num = 50

console.log(`hi this is ${name}, and i have ${num} rs.`)

// Methods

//Extracting String Characters

let text = "HELLO WORLD";

let char = text.charAt(1)  //The charAt() method returns the character at a given position in a string
let char1 = text.charCodeAt(0);  //The charCodeAt() method returns the unicode of the character at a given position in a string:


console.log(char)
console.log(char1)

/*The at() method is a new addition to JavaScript. Same as charAt()

It allows the use of negative indexes while charAt() do not.*/

const naam = "akash"
const check = naam.at()   //x.at() or x.charAt()..can be empty, shows no error....returns 0 index letter
console.log(check)

const y = "toyota"
const z = y[0]      //y.[]..cannot be empty, shows error

//substring() is similar to slice().

//The difference is that start and end values less than 0 are treated as 0 in substring()
//Plus substring() me kaha se kaha tak
//whereas substr() me kaha se kitna aage
//trim()  removes white spaces


/*Rest is from the internet and projects*/