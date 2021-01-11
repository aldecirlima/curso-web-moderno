Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caderno", "preco": 7.50}'
]

// Retornar um array apenas com os preços

// Minha resolução
const soPrecos = carrinho.map2(function (c) {
    pObjeto = JSON.parse(c)
    return pObjeto.preco
})
console.log(soPrecos)

// Resolução do professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)