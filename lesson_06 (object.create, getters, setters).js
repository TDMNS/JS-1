const person = Object.create({
    calculateAge() {
        console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Oleg',
        // enumerable - это параметр который позволяет
        // циклу for видеть ключ нашего объекта
        enumerable: true,
        // writable - это параметр для изменения
        // объекта (т.к. по умолчанию объект
        // не является изменямым)
        writable: true,
        // configurable - это параметр для
        // удаления ключей объекта
        configurable: true
    },
    birthYear: {
        value: 2000,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'Green'
            console.log('Set age', value)
        }
    }
})

// const person = {
//     name: 'Oleg',
//     birthYear: 2000
// }

person.name = 'Maxim'

// проверка по методу hasOwnProperty требуется
// для того, чтобы цикл for, не пробегался по
// прототипам объекта, рекомендуется использовать
// всегда, чтобы не допускать ошибок.
for (let key in person) {
    if (person.hasOwnProperty(key)){
        console.log('Key:', key, person[key])
    }
}
