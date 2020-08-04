const myNumber = 42

// window.localStorage

// localStorage.removeItem('number') // удаляет по ключу
// console.log(localStorage.getItem('number')) // берет значение по ключу
// localStorage.setItem('number', myNumber.toString()) // устанавливаем значение по ключу
// console.log(localStorage.getItem('number'))
// localStorage.clear() // очищает

const object = {
    name: 'Max',
    age: 28
}

// localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)

person.name = 'Oleg'

// console.log(person)

/// ===============
// window.onstorage = () => {}

window.addEventListener('storage', event => {
    console.log(event)
})

// отличие Cookie от localStorage?
// 1. localStorage больше по объему чем Cookie.
// Размер localStorage примерно 5 мб.
// то есть, 5 мб. данных вы можете хранить локально в браузере
// 2. Cookie улетают с запросами на сервер, и это не безопасно потому что
// то что у вас храниться в Cookie, сервер может прочитать и распарсить в своих нуждах (целях).
// localStorage не улетает на сервер, это ваше личное локальное хранилище к которому вы имеете доступ.