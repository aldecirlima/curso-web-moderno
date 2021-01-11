const { time } = require("console")

// set não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // não repete elementos, só adiciona uma vez.

console.log(times)
console.log(times.size) // tamanho do set: 5
console.log(times.has('vasco')) // false => case sensitive
console.log(times.has('Vasco')) // True
times.delete('Flamengo') // deleta o valor "Flamengo"
console.log(times.has('Flamengo')) // false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) // o nme 'Lucas' só é adicionado uma vez
console.log(nomesSet) // resultado: Set { 'Raquel', 'Lucas', 'Julia' }