// função normal
let dobro = function (a) {
    return 2 * a
}

// mesma função com arrow
dobro = (a) => {
    return 2 * a
}

// função arrow reduzida, return implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // ou
ola = _ => 'Olá' // função com um único parâmetro
console.log(ola())