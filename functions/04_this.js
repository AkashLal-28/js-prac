//this...is used to access current context

const user = {
    username:"akash",
    age:24,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome!`)
    }
}

user.welcomeMessage()   //akash, welcome!
user.username = "ravi"
user.welcomeMessage()   //ravi, welcome!

function chai(){
    let username = "dada"
    console.log(this.username)   //not possible
}

// chai()


//arrow functions

const arrow = () => {
    let name = 'ere'
    console.log(this.name)       //not possible
}

// arrow()


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(1,2))

/*implicit return //another way //we dont use {
                                        return
                                    }*/

const a = (nm1,nm2) => (nm1*nm2)
console.log(a(3,4))

