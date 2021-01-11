// console.log(global)
global.MinhaApp = Object.freeze({ // congela o objeto para não ser alterado
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Global'
})