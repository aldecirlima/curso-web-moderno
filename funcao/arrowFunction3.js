let = comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // verdadeiro this aponta para global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// com arrow o this não aponta para o global
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false. O this não permite mudar a referencia
comparaComThisArrow(module.exports) // continua true 
