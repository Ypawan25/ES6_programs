


const student = {
    name: "Pawan",
    age: 24,
    projects: {
        diceGame: "Tick tac toe game using JavaScript"
    }
}

const {name, age, projects: {diceGame}} = student

console.log(`${name} is ${age} and has made ${diceGame}`  )