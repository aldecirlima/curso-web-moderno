console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


// Criando métodos direto no prototype de String
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

// Criando método direto no prototype de Array

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Substituindo uma função já existente no prototype => não recomendado
String.prototype.toString = function () {
    return 'Lascou tudo'
}
// isso gera o problema abaixo:
console.log('Escola Cod3r'.reverse()) // resultado: 'odut uocsaL'