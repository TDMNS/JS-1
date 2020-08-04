/// Деструктуризация с массивами
function calcValues(a, b) {
    return [
        a + b,
        // a - b,
        // undefined,
        a - b,
        a * b,
        a / b
    ]
}

// const [sum, sub, mult] = (calcValues(32, 10))
// const [sum, , mult, ...other] = (calcValues(32, 10))
// const [sum, sub = 'Вычитания нет', mult, ...other] = (calcValues(32, 10))
// const sum = result[0]
// const sub = result[1]

// const [sum, sub] = result

// console.log(sum, sub)
// console.log(sum, mult, other, sub)

/// Деструктуризация с объектами

const person = {
    name: 'Arnold',
    age: 26,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const name = person.name
// const {
//     name: firstName = 'Without name',
//     age,
//     car = 'Without car',
//     address: {
//         city: homeTown,
//         country
//     }
// } = person

// const {name, ...info} = person
// console.log(firstName, age, car, homeTown, country)
// console.log(name, info)

// function logPerson(per) {
//     console.log(per.name + ' ' + per.age)
// }

function logPerson({name: firstName = 'Without name', age}) {
    console.log(firstName + ' ' + age)
}

logPerson(person)