const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, índice) {
    console.log(`${índice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})

// com arrow
fabricantes.forEach(fabricante => console.log(fabricante))