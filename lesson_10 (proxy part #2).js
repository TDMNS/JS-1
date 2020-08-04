// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
        // в handler-е: метод get задан как стрелочная функция
        // (для того чтобы записать в 1-у строку)
        // который принемает в себя некоторый объект (obj) и параметр (prop)
        // если prop в obj то возвращаем obj[prop], иначе defaultValue
    })
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
)

// console.log(position)

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        // если свойство (prop), находится в самом объекте (obj)
        // то всё хорошо && если prop не начинается с префикса, возвращаем true
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)


        // ownKeys - это свойство которое говорит какие ключи действительно
        // находятся внутри объекта
        // Reflect - это некоторый объект, который позволяет более детально
        // работать с объектами (например: получить его собственные ключи)
        // receiver в get - это и есть Proxy который мы возвращаем (т.е. тот самый объект
        // с которым мы работаем
        // и если prop находится в receiver-е, то есть, не начинается с prefix-а ('_')
        // за счёт переписанного нами ownKeys. И если true, то мы возвращаем obj[prop]
        // иначе нам нужно скрыть поле, т.е. void 0 (делаем undefined).
    })
}

const data = withHiddenProps({
    name: 'Oleg',
    age: 20,
    _uid: '12321421'
})

// Optimization

// const userData = [
//     {id: 1, name: 'Oleg', job: 'ios developer', age: 20},
//     {id: 2, name: 'Dima', job: 'frontend', age: 24},
//     {id: 3, name: 'Sasha', job: 'backend', age: 26},
//     {id: 4, name: 'Kira', job: 'doctor', age: 30},
//     {id: 5, name: 'Dana', job: 'teacher', age: 27},
// ]

// создали массив, у которого каждый элемент представлен в виде объекта
// и у каждого объекта есть определенные поля (id, name и т.д.)

// userData.find(user => user.id === 3) // затратно, нужно оптимизировать

const index = {}
// userData.forEach(i => index[i.id] = i)
// вызываем цикл для массива, в котором для каждого (i-го элемента) мы будем получать элемент
// и после этого заносим в объект index по ключу i.id, значение самого элемента i

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {

        console.log([args])
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args),{
            get(arr, prop){
                switch (prop) {
                    case 'push': return  item => {
                        index[item.id] = item
                        arr[prop].call(arr, item)
                    }
                    case `findById`:
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 11, name: 'Oleg', job: 'ios developer', age: 20},
    {id: 22, name: 'Dima', job: 'frontend', age: 24},
    {id: 33, name: 'Sasha', job: 'backend', age: 26},
    {id: 44, name: 'Kira', job: 'doctor', age: 30},
    {id: 55, name: 'Dana', job: 'teacher', age: 27},
])