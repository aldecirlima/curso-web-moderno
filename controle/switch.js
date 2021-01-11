const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // floor arredonda a nota para baixo
        case 10: // se para 10 e 9 for o mesmo resultado, não precisa repetir
        case 9: // basta colocar o próximo case logo abaixo do primeiro.
            console.log('Quadro de Honra')
            break // para sair do switch sem executar os demais cases
        case 8: case 7:
            console.log('Aprovado')
            break // break é obrigatório em switch
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default: // equivalente ao "else"
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)