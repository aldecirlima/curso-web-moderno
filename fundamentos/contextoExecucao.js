let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // true
console.log(module.exports) // retorna { c: 456, d: false, e: 'teste' }

// module.exports = { f: 456, g: false, h: 'teste' }

// criando uma variavel maluca: sem var e let
abc = 3 // não faça isso!!! Torna a variavel global
console.log(global.abc)