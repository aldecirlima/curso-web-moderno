require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // não altera porque a variavel foi congelada
console.log(MinhaApp.nome)