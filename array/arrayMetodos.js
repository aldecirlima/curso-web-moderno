const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remova o último elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no fim da lista
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona o elemento no inicio da lista
console.log(pilotos)

// splice pode adicionar e remover elementos da lista

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // a partir do indice 3 remove um elemento
console.log(pilotos)

// slice => tradução = pedaço
// slice => gera um novo array a partir do índice informado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// slice intervalo ex: slice(1, 4) pega do um até o 4, exceto o 4
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)