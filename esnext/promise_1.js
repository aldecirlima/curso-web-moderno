let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3) // promisse só aceita UM valor.
})

p.then(function (valor) {
    console.log(valor)
})

// Promisse retornando mais de um valor => retornar um objeto
let pro = new Promise(function (cumprirPromessa) {
    cumprirPromessa({ // pode ser um objeto, array...
        x: 3,
        y: 4
    })
})

pro.then(valor => console.log(valor)) // resultado {x: 3, y: 4}
pro.then(valor => console.log(valor.x)) // resultado 3


const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

let pro2 = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

pro2
    .then(primeiroElemento) // posição 0 do array
    .then(primeiroElemento) // posição 0 do retorno da última chamada
    .then(letraMinuscula) // converte a letra para minúsculo
    .then(console.log) // imprime => resultado: a