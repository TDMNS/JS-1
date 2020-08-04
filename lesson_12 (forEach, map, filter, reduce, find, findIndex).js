const people = [
    {name: 'Oleg', age: 20, budget: 490000},
    {name: 'Elena', age: 24, budget: 59000},
    {name: 'Maksim', age: 21, budget: 80000},
    {name: 'Vladislav', age: 25, budget: 100000},
    {name: 'Anton', age: 15, budget: 149000},
]

// for(let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

// АorEach - метод для массивов, чтобы не использовать стандартные циклы и сократить нашу запись до лакончичного вида
// people.forEach(function (person, index, pArr){
//     console.log(person)
//     console.log(index)
//     console.log(pArr)
// })

// people.forEach(person => console.log(person))

// Map - метод с помощью которого мы можем создавать новые массивы, занося их в какую-либо переменную

// const newPeople = people.map(person => `${person.name} (${person.age * 3})`)
// console.log(newPeople)

// Filter - для того чтобы фильтровать по какому-либо условию исходный массив

// const adults = []
//
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18){
//         adults.push(people[i])
//     }
// }

// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// Reduce - метод для получения финального значения совершив итерацию по какому-либо массиву
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// Find - метод для того чтобы по условия найти какой-либо элемент
// const Maksim = people.find(person => person.name === 'Maksim')
// console.log(Maksim)

// const maksimIndex = people.findIndex(person => person.name === 'Maksim')
// console.log(maksimIndex)

// ===========

const amount = people
    .filter(person => person.budget >= 100000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: Math.sqrt(person.budget)
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(amount)