// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log(undefined) // passando parametro undefined ele assume o valor padrão
log(null) // passando null ele assume o valor null
log() // sem parametros ele assume o valor padrão
log('Sou mais forte')

// operador rest => rest = agrupar / spread = espalhar
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))