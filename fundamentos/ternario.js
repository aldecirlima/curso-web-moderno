const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

const comprar = dinheiro => {
    return dinheiro >= 100 ? 'Compra' : 'Não compra'
}

console.log(comprar(110))