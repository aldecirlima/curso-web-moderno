const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // não gera erro, retorna "vazio"

console.log(escola.charCodeAt(3)) // pega o valor na tabela ASC UNicode = 51

// procura o valor "3" na string e retorna o índice do valor na string=>
console.log(escola.indexOf('3'))

// SUBSTRINGS
// imprimir a partir de um determinado índice
console.log(escola.substring(1)) // => "od3r"
// imprimir um intervalo da string
console.log(escola.substring(0, 3)) // do índice 0 ao índice 3 SEM O 3

// concatenação
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!') // sem espaços automaticos

// Replace
console.log(escola.replace(3, 'e')) // substitui o "3" pelo "e"

// quebrando uma string separada por "," em um array(lista) com "split()"
console.log('Ana,Maria,Pedro'.split(','))


