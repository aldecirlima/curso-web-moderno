// hoisting => "içar/subir, mover para o topo" indica que a variável pode ser
// declarada mesmo após utilização. Para isso tem que usar o tipo VAR. Porém
// a variavel não atribuída retorna "undefined"

console.log('a =', a)
var a = 2
console.log('a =', a)

// Para Let isso não ocorre. Somente com VAR.