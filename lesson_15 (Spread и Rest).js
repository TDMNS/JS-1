const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}


/// Spread
// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope]
// раньше было так:
// const allCities = citiesEurope.concat(citiesRussia)
// console.log(allCities)

// console.log({...citiesRussiaWithPopulation})
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})// Москва будет с населением в 26кк
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})// Москва будет с населением в 20кк

// Practice
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers)) // метод который использовался раньше

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))

/// Rest
function sum(a, b, ...rest) {
    // console.log(rest) // 3, 4, 5
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5]

// Spread!
// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...other] = numbers
//
// console.log(a, b, other)

const person = {
    name: 'Oleg',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...address} = person

console.log(name, age, address)