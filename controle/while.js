function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let cont = 1
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    cont += 1
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')
console.log(`Foram gerados ${cont} números.`)