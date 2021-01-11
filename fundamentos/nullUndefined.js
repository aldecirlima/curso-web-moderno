let valor // não inicializada
console.log(valor) // resultado = undefined

valor = null // null indica ausência de valor, não aponta endereço de memória
console.log(valor) // resultado = null
// console.log(valor.toString()) => Erro!

const produto = {}
console.log(produto.preco) // retorna undefined
// console.log(produto.preco.a) Erro! A propriedade "a" não está definida
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // retorna false
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto) // preço nulo