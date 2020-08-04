const person = {
    name: 'Oleg',
    age: 20,
    job: 'ios developer'
}

const op = new Proxy(person, {
    get(target, prop) {
        //console.log('Target', target)
        //console.log('Prop', prop)
        // возвращает нам наши запросы, пример:
        // op.age
        // результат: 20
        console.log(`Getting prop: ${prop}`)

        if (!(prop in target)){
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')

            // .split() возвращает новый массив
            // Строка бьется по separator, при разбивании separator пропадает:
            // arr = "a,b,c".split(',')  // массив ["a", "b", "c"]
            // .map() позволяет вызвать переданную функцию один раз для каждого элемента массива,
            // формируя новый массив из результатов вызова этой функции.
            // .join() соединяет элементы массива, например:
            // var arr = [ 1, 2 , 3 ]
            // arr.join('+')  // "1+2+3"
            // arr.join()  // "1,2,3"

        }
        return target[prop]
    },
    set(target, prop, value) {
        // для того чтобы задать объекту какое либо значение, и обработать случай ошибки
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        // для того чтобы проверить, если ли это поле в объекте (проверяет поля из метода)
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting... ', prop)
        delete target[prop]
        return true
    }
})

// functions

// const log = text => `Log: ${text}`
//
// const fp = new Proxy(log, {
//     apply(target, thisArg, argArray) {
//         // console.log(target)
//         // console.log(thisArg)
//         // console.log(argArray)
//         console.log('Calling fn...')
//
//         return target.apply(thisArg, argArray).toUpperCase()
//         // .toUpperCase() - метод который позволяет привести всё к верхнему регистру
//     }
// })

// Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray) {
        console.log('Construct...')

        return new Proxy(new target(...argArray),{
            get(t, prop) {
                console.log(`Getting prop "${prop}"`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 12)