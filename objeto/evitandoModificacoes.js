// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal => permite manipular o objeto, mas não permite
// alterar a estrutura do objeto.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não permite adicionar atributos e parâmetros
delete pessoa.nome // não permite deletar atributos e parâmetros
pessoa.idade = 29 // mas permite alterar valores dos parâmetros
console.log(pessoa)

// Object.freeze = selado + valores constantes