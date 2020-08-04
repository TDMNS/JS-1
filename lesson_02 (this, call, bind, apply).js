function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Oleg',
    age: 20,
    sayHello: hello,
    // sayHelloWindow: hello.bind(window)
    // sayHelloWindow: hello.bind(this)
    sayHelloWindow: hello.bind(document),
    // передаем контекст который привязан к функции hello через bind
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 25
}

// объяснение функции bind
// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Frontend', '8-999-838-13-34')
// person.logInfo.bind(lena, 'Frontend', '8-999-838-13-34')()
// метод coll вызывает функцию сразу
// person.logInfo.call(lena, 'Frontend', '8-999-838-13-34')
person.logInfo.apply(lena, ['Frontend', '8-999-838-13-34'])


/// ========
const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }
// console.log(multBy(array, 5))

Array.prototype.multBy = function(n){
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(2))
