// Criando objetos com funções
function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
// os objetos acima apontam para o mesmo objeto? => sim. True.
console.log(obj1.__proto__ === obj2.__proto__) // => true
console.log(MeuObjeto.prototype === obj1.__proto__) // => true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Célia'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
// Não tem nenhum objeto depois do Object.prototype
console.log(Object.prototype.__proto__ === null) // true