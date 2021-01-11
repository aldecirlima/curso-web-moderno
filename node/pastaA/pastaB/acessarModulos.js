const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// importanto de uma pasta dentro de node_modules
// dentro da pasta saudacao, por padrão, busca o arquivo index.js
const saudacao = require('saudacao') // o node importa o arquivo index.js
console.log(saudacao.ola) // Objeto "ola" está dentro do arquivo index.js

const c = require('./pastaC/index')
console.log(c.ola2) // busca o arquivo index.js

const http = require('http') // http é um módulo interno do node
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) // deixa rodando e abre o browser em localhost:8080