const requestURL = 'https://jsonplaceholder.typicode.com/users'

// обернули код в Promise, так как наш код является асинхронным
// потому что мы какие-то данные отправляем на сервер и ждем пока они придут

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//
//         xhr.open(method, url)
//
// // или можно было написать так:
// // xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')
//
//         xhr.onload = () => {
//             if(xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(JSON.parse(xhr.response))
//             }
//         }
//
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//
//         // нам нужно отправлять не объекты, а string строку, потому что возникает [object Object]
//         xhr.send(JSON.stringify(body))
//     })
// }

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// body = {
//     name: 'Oleg',
//     age: 20
// }
//
// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// метод fetch сразу возвращает нам promise

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {

        if (response.ok) {
            return response.json()
        }

        return response.json()
            .then(error => {
                const e = new Error('Что-то пошло не так')
                e.data = error
                throw e
            })

    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

body = {
    name: 'Oleg',
    age: 20
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(error => console.error(error))