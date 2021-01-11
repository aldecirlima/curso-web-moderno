console.log(7 / 0) // retorna infinity
console.log("10" / 2) // converte a string automaticamente se possível
console.log("Show!" * 2) // não funciona retorna NaN - Not a Number
console.log(0.1 + 0.7) // Retorna 0.7999999999 imprecisão no js
// console.log(10.toString()) não funciona
console.log((10.345).toFixed(2))

// Cuidado com concatenação
console.log("3" + 2) // neste caso STRING tem preferência, vai CONCATENAR

console.log("3" - 2) // resultado é uma subtração
// como na concatenação não tem a utilização do sinal "-", ele subtrai