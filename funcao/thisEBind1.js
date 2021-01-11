const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
// Abaixo retorna undefined
falar() // conflito entre paradigmas: funcional e Orientação a objetos

// O bind define o objeto passado como parametro 
// como o "this" na chamada da função, como abaixo
const falarDePessoa = pessoa.falar.bind(pessoa) // não altera função original
falarDePessoa()