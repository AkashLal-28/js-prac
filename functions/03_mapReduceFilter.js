//filter

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dataFil = data.filter((nums) => nums > 4);

const dataf = data.filter((num) => {
    return num > 5; //if scope then use return
});
// console.log(dataf);

newNums = [];
data.forEach((nm) => {
    if (nm > 4) {
        newNums.push(nm);
    }
});

// console.log(newNums);

const books = data.filter((bk) => bk === 6);
// console.log(books);

//map

const added = data.map((add) => add + 10);
// console.log(added);

//reduce

const list = [4, 5, 6, 7, 8, 9, 10]
const l = list.reduce((acc, item) => acc + item, 0)
// console.log(l)


// findmax number using reduce

const findmax = list.reduce(function (max, curr) {
    if (curr > max) {
        max = curr
    }
    return max
}, 0)

console.log(findmax)

// another logic

const temp = []

function maxim() {
    for (let i = 0; i < list.length; i++) {
        if (temp < list[i]) {
            temp = list[i]
        }
    } return temp
}

console.log(maxim)


const user = [
    { firstName: "akash", lastName: "lal", age: 24 },
    { firstName: "ravi", lastName: "lal", age: 22 },
    { firstName: "sachin", lastName: "lal", age: 16 },
    { firstName: "khushi", lastName: "lal", age: 16 },
]

const output = user.map((iter) => {
    return `firstname: ${iter.firstName}`
})
// console.log(output)

//reduce

const out = user.reduce(function (ac, cur) {
    if (ac[cur.age]) {
        ac[cur.age] = ++ac[cur.age]
    }
    else {
        ac[cur.age] = 1
    }
    return ac
}, {})

console.log(out)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 3999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const yourTotal = shoppingCart.reduce((total, item) => total + item.price, 0);  //put 0 after operation to start 
console.log(yourTotal)                                                          //adding from 0

