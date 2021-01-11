let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// transformar número em boolean
isAtivo = 1
// o "!" (exclamação), simboliza negação, negação 2x volta a origem => true
console.log(!!isAtivo) // resultado true com 1  e false com 0
console.log(!isAtivo) // resultado false

// não falso, não verdadeiro com "!"
console.log(!false) // resultado true

// Usando "!!" convertendo em VERDADEIROS
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Usando "!!" convertendo em FALSOS
console.log('os falsos...')
console.log(!!0)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // "||" = "ou"

// Utilizando ou => "||"
let nome = ''
// Imprimir a variavel nome ou em caso de falso, imprimir "Desconhecido"
console.log(nome || 'Desconhecido') // nome retorna false

nome = 'Lucas'
console.log(nome || 'Desconhecido') // imprime "Lucas"