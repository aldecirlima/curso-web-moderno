console.log(module.exports)
console.log(module.exports === this) // true
console.log(module.exports === exports) // true

// três formas tornar as variaveis visíveis fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) // resultado: { a: 1, b: 2, c: 3 }

exports = {
    nome: 'Teste'
}

console.log(module.exports) // resultado: { a: 1, b: 2, c: 3 }
console.log(exports) // resultado: { nome: 'Teste' }

module.exports = { publico: true }