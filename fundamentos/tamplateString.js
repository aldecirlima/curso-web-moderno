const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// template com crase aceita quebra de linha - com interpolação
const template = ` 
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões... => com interpolação
console.log(`1 + 1 = ${1 + 1}`)

// Atribuindo uma função a uma variável 
// EX: convertendo para maiúsculas com toUpperCase()
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) // resultado: Ei... CUIDADO!