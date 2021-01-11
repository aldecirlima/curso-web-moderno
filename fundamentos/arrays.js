const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // retorna "undefined"

valores[4] = 10 // adiciona o valor 10 no índice 4
console.log(valores)
console.log(valores.length) // tamanho do array
valores[10] = 10 // adiciona o valor 10 no índice de e retorna:
console.log(valores) // res => [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 10 ]
console.log(valores.length) // ele considera os índices vazios... retorna 

// inserindo valores no array - array é heterogêneo
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

// retirando e imprimindo o último elemento do array com pop
console.log(valores.pop())
// deletando por índice
delete valores[0]
console.log(valores)
console.log(valores[0]) // retorna undefined
// tipo de dado array = object
console.log(typeof valores)