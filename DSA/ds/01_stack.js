//the stack data structure is a sequential collection of elements that follows the LIFO
//the last element inserted into the stack is first element to be removed
//stack is an abstract data type
//Examples...Browser history tracking...undo operation when typing
//Call stack in Javascript runtime

let arr = []
let current = arr.length
let max = 5
function push(element){
   if(current>=max){
        return `limit exceed`
   }
   arr[current] = element
   current = current + 1
   return arr
}

console.log(push(20))
console.log(push(21))
console.log(push(22))
console.log(push(23))
console.log(push(24))
console.log(push(25))   //limit exceed