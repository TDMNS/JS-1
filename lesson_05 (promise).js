console.log('Request data...')

// setTimeout(() => {
// console.log('Preparing data...')
//
// const backEndData = {
// server: 'avs',
// port: 2000,
// status: 'working'
// }
//
// setTimeout(() => {
// backEndData.modified = true
// console.log('Data received', backEndData)
// }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
// setTimeout(() => {
// console.log('Preparing data...')
//
// const backEndData = {
// server: 'avs',
// port: 2000,
// status: 'working'
// }
// resolve(backEndData)
// }, 2000)
// })

// p.then(data => {
// const p2 = new Promise((resolve, reject) => {
// setTimeout(() => {
// data.modified = true
// resolve(data)
// // console.log('Data received', backEndData)
// }, 2000)
// })
// p2.then(clientData => {
// console.log('Data received', clientData)
// })
// })

// p.then(data => {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// data.modified = true
// resolve(data)
// // reject(data)
// // console.log('Data received', backEndData)
// }, 2000)
// })
// // p2.then(clientData => {
// // console.log('Data received', clientData)
// // })
// }).then(clientData => {
// // console.log('Data received', clientData)
// clientData.fromPromise = true
// return clientData
// }).then(modData => {
// console.log('Modified', modData)
// }).catch(err => console.error('Error:', err))
// .finally(() => console.log('Finally'))


// .catch вызывается при reject-e, т.е. ошибке, а .then при resolve, т.е. если ошибок нет.
// .finally вызывается всегда, и не важно есть ошибка или нет.

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})