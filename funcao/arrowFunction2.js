function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

// na função arrow o "this" não fica variando. 
// Ele assume o valor no escopo da função chamada
new Pessoa