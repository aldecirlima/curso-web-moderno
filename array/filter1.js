const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// minha resolução e do professor iguais
const produtoFragil = p => p.fragil
const produtoCaro = p => p.preco >= 500

console.log(produtos.filter(produtoFragil).filter(produtoCaro))

// console.log(produtoFragil)
// console.log(produtoCaro)

// minha resulução 1 array
const produtoCaroFragil = produtos.filter(
    p => (p.fragil && p.preco >= 500)
)

console.log(produtoCaroFragil)