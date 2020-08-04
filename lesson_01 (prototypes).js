// const person = {
//     name: 'Oleg',
//     age: 20,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

const person = new Object({
        name: 'Oleg',
        age: 20,
        greet: function () {
            console.log('Greet!')
        }
    }
)

// прототип - это тот же самый объект который присутствует у какой-то родительской сущности

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'
lena.age = 29

// const str = 'I am string'

const str = new String('I am string')
