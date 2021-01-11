const a = 1
const b = 2
const c = 3

// metodo anterior
const obj1 = { a: a, b: b, c: c }
// novo metodo => criação literal
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

// definindo funções dentro do objeto
const obj5 = {
    funcao1: function () {
        // ... forma completa
    },
    funcao2() {
        // ... forma reduzida para as novas versões JS.
    }
}

console.log(obj5)