function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) // resultado NaN
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

// utilizando call e apply
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Passagem de parâmetros da função call => call(contexto, **parametros)
// passa o contexto de carro, ou seja a função vai trabalhar DENTRO DE CARRO
// depois de carro, passa os parametros normais da função(imposto, moeda)
console.log(getPreco.call(carro, 0.17, '$'))

// passagem de parametro na função apply é apply(contexto, array)
// Ex: passa o contexto carro, seguido de um array com os parametros
console.log(getPreco.apply(carro, [0.17, '$']))

// contexto global
console.log(getPreco.apply(global, [0.17, '$']))