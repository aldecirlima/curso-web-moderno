const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

// resultado do desafio
lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))

// incrementando
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n')) // quebra o resultado num array
    .then(linhas => console.log(linhas[1]))