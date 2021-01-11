// Co classe, paradigma OO.
function Carro(velociadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velociadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velociadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // função
console.log(typeof ferrari) // objeto
