// let e const
{
    var a = 2
    let b = 3
    console.log(b) // aqui a variavel tipo let é acessível
}

console.log(a) // variavel tipo var é acessível mesmo fora do bloco
// console.log(b) => variavel let não acessível fora do bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r' // atribui às variáveis as letras da string
console.log(l, e, tras) // resultado = C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2, 3]
console.log(x, y) // resultado = 1, 2

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome) // utilizando um "ALIAS" para idade: i