/// Map
const obj = {
    name: 'Oleg',
    age: 20,
    job: 'ios developer'
}

const entries = [
    ['name', 'Oleg'],
    ['age', 20],
    ['job', 'ios developer']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

// console.log(map)
// console.log(map.get('job')) // запись идентична следующей
// console.log(obj.job)

map
    .set('newFiled', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??')

// console.log(map.get(NaN))
// а если мы хотим удалить из объекта поле job?
// map.delete('job')

// console.log(map.has('job'))
// console.log(map.size)
// map.clear() // полное очищение карты
// console.log(map.size)

// ==========

// of map.entries()  не обязательно вызывать, можно просто map (по умолчанию делает .entries()
// for (let entry of map.entries()) {
//     console.log(entry)
// }
//
// for (let [key, value] of map.entries()) {
//     console.log(key, value)
// }

// for (let val of map.values()) {
//     console.log(val)
// }

// for (let key of map.keys()) {
//     console.log(key)
// }

// m - map in callback func
// map.forEach((val, key, m) => {
//     console.log(key, val)
// })

// ============
// как из карты сделать быстро массивы?

// const array = [...map]
// const array = Array.from(map)
//
// const mapObj = Object.fromEntries(map.entries())
//
// console.log(mapObj)

// ============

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'},
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

// console.log(lastVisit(users[1]))

/// Set
// set - принимает в себя уникальные элементы, то есть элементы в единственном экземпляре
// следующий массив он передаст в следующем виде:

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]) // result - Set { 1, 2, 3, 4, 5, 6 }

set.add(10).add(20).add(30).add(20)

// console.log(set)
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

// values = keys if you using set
// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (let key of set) {
//     console.log(key)
// }

// ============

// function uniqValues(array) {
//     // return [...new Set(array)]
//     return Array.from(new Set(array))
// }
//
// console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6]))

/// WeakMap
// с помощью WeakMap можно избегать различных утечек данных в js

let objForWeakMap = {name: 'WeakMap'}

// const arr = [objForWeakMap]
//
// objForWeakMap = null
//
// console.log(arr[0])

const mapForWeakMap = new WeakMap([
    [objForWeakMap, 'Obj data']
])
// get, set, delete, has

objForWeakMap = null

// console.log(mapForWeakMap)

// ===================

const cache = new WeakMap()

function cacheUser(user) {
    // если в Кэше нету пользователя, то при помощи set-а добавляем новое поле
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

// console.log(cache.has(lena))
// console.log(cache.has(alex))

/// WeakSet

const visitsForWeakSet = new WeakSet()

visitsForWeakSet.add(users[0]).add(users[1])

users.splice(1, 1) // с какого элемента, и сколько

console.log(visitsForWeakSet.has(users[0]))
console.log(visitsForWeakSet.has(users[1]))
