// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // resultado => NaN (Not a Number)
imprimirSoma(2, 3, 4, 6, 7, 8) // soma os dois primeiros e ignora o restante
imprimirSoma() // resultado => NaN (Not a Number)

// Função com retorno (com parametros nomeados)
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // retorna NaN