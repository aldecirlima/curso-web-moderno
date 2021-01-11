console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'BOla2' => faz o mesmo que na linha acima
console.log(obj1.nome)

// A notação "this" torna a variável pública fora do escopo da função
function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // notação ponto para acessar os atributos
console.log(obj3.nome)
obj3.exec()