// function declaration
// posso chamar uma function declaration antes dela ser declarada
console.log(soma(3, 4))

function soma(x, y) {
    return x + y
}

// function expression
// funções armazenadas em variável só podem ser chamadas após a declaração
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))