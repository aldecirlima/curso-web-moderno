const peso1 = 1.0
const peso2 = Number('2.0') // converte a string em número

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) // flutuante ex 2.0 pode ser inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed(2) arredonda o resultado para 2 casas
console.log(media.toString()) // Converte em string
console.log(media.toString(2)) // utilizando o 2 no toString converte o resultado em binário
console.log(typeof media)