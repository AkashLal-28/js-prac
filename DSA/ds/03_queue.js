//FIFO
//two main operations: Enqueue(adds an element to the rear/tail of the collection)
                  // Dequeue(removes an element from the front/head of the collection)

//usage: Printers, CPU task Scheduling, Callback queue in JS runtime

// algorithm
//first create a class name queue
//then inside it make a constructor to initialize a new list/array
//first create an enqueue method to add element from one end
//then dequeue method to remove from first end
//then isempty to return true/false
//then peek to return first element or null
//then size to return length or no. of elements
//in the end print to return the items 


class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isempty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isempty()){
            return this.items[0]
        }                     //returns element from front of the queue without removing it
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()

console.log(queue.isempty())
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.size())
queue.print()
queue.dequeue()
queue.dequeue()
queue.print()

console.log(queue.peek())