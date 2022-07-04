let resContainer = document.getElementById('ResultContainer')

resContainer.innerHTML = 'Setting up the Environment!'

//Functions

function sumInputs(...inputs) {
    let result = 0
    for(let i of inputs){
        result += 1
    }
    return result
}

resContainer.innerHTML = sumInputs(5, 10, 5, 5)

function sum(input1, input2, ...remInputs) {
    let result = input1 + input2
    for(let i of remInputs) {
        result += 1
    }
    return result
}

setTimeout(()=>{
    resContainer.innerHTML = sum(5, 10, 5, 5)
}, 2000)

//Array Destructuring

let fruits = ['Apple', 'Watermelon', 'Grapes']
let [fruit1, fruit2, fruit3] = fruits

setTimeout(()=>{
    resContainer.innerHTML = fruit2
}, 3000)

let [fruita1, , fruitb1] = fruits

setTimeout(() => {
    resContainer.innerHTML = fruitb1
}, 4000);

fruits = ['Apple', 'Watermelon', 'Grapes', 'Guava']
let [fruitA, ...OtherFruits] = fruits

setTimeout(()=>{
    resContainer.innerHTML = OtherFruits
}, 5000)

//Object Destructuring
let Fruits = {
    Fruit1: 'Apple',
    Fruit2: 'Watermelon',
}

let {Fruit1, Fruit2} = Fruits

setTimeout(()=>{
    resContainer.innerHTML = Fruit1
}, 6000)

function sum2(a, b, c) {
    return a + b + c
}

let input = [5,9,6]

setTimeout(()=>{
    resContainer.innerHTML = sum2(...input)
}, 7000)

//Control Statements/Loops

