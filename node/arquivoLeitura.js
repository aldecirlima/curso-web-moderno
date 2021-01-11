const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... => evitar para arquivos pesados
// ele lê todo o arquivo para depois processar
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Metodo para acessar um arquivo JSON de forma mais simples
const config = require('./arquivo.json')
console.log(config.db)

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})