function Pessoa() {
    this.idade = 0

    const self = this // utilizando uma variável para guardar o "this"
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // ou utilizar o bind(this)
}

new Pessoa