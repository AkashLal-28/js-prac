//de structuring

const course = {
    cousrename: "js in hindi",
    price: "999",
    courseInstructor:"Hitesh"
}

console.log(course)

//another way //de structuring

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: instruct} = course         //way change the name of key
console.log(instruct)

