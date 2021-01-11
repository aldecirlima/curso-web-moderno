const contadorA = require('./instanciaUnica') // exportado o mesmo objeto
const contadorB = require('./instanciaUnica') // exportado o mesmo objeto

const contadorC = require('./instanciaNova')() // criado uma nova instancia
const contadorD = require('./instanciaNova')() // criado uma nova instancia

// contadoA e contadorB compartilham o mesmo cache
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // resultado 3, porque foi incrementado acima

// contadorC e contadorD são criadas novas instancias com caches diferentes
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // resultado 1, porque apenas C foi incrementado
console.log(contadorC.valor) // resultado 3.