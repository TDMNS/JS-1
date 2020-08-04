// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }
// // * after function - generator
//
// const str = strGenerator()
//
// function* numberGenerator(n = 10) {
//     for (let i = 0; i < n; i++){
//         yield i
//     }
// }
//
// const num = numberGenerator(17)

// const iterator = {
//     [Symbol.iterator](n = 10){
//         let i = 0
//         return {
//             next() {
//                 if (i < n)
//                     return {value: ++i, done: false}
//                 else return {value: undefined, done: true}
//             }
//         }
//     }
// }

// const itr = iterator.gen()

function* iter(n = 10) {
    for (let i = 0; i < n; i++){
        yield i
    }
}

for (let k of iter(6)) {
    console.log(k)
}