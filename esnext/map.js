const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined => não funciona
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // 123 está em chavesVariadas? = true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // agora o resultado é false
console.log(chavesVariadas.size) // resultado: 2 elementos

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) // resultado: chave 123 e 456 tem valor "b".