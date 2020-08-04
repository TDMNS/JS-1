const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

// функцию r мы будем вызывать в случае если Timeout завершится успешно по истечению тех милисекунд которые мы
// передавали в функцию

// delay(2000).then(() => console.log('2 sec!'))
// функция отработала успешно

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchTodos().then(data => {
//         console.log('data:', data)
//     }).catch(e => console.error(e))

async function fetchAsyncTodos() {
    console.log('Fetch todo started...')

    try {
        await delay(2000)
        // ждем пока await не выполнится, и затем программа
        // выполняет код ниже
        const response = await fetch(url)
        // в const записывается то, что нужно было записать в метод then
        const data = await response.json()
        console.log('data:', data)
    } catch (e) {
        console.error(e)
    }
}

fetchAsyncTodos()

// async / await - синтаксический сахар в js

// +-ы, избавляемся от callback-ов, что делает наш код более приятным