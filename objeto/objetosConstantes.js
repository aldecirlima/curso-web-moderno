// pessoa -> 123(endereço de memória) - {...}
const pessoa = { nome: 'João' }
// pessoa aponta para um objeto na memória
pessoa.nome = 'Pedro'
// o objeto pessoa continua apontando para o mesmo endereço
console.log(pessoa) // resultado "nome: 'Pedro'"

// pessoa <- 456(endereço de memória) -> {...} => objeto diferente
// pessoa = { nome: 'Ana' } => dá erro, não pode mudar a referencia da memória

// Congelando um objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria' // não gera erro, mas não substitui os dados do objeto
console.log(pessoa.nome) // continua 'Pedro'
pessoa.end = 'Rua ABC'
console.log(pessoa) // endereço não adicionado

// Definir, atribuir e congelar objeto
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)