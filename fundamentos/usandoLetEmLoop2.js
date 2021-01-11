const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

// imprime de fato usando o valor 2 e 8 por conta do "let"
funcs[2]()
funcs[8]()
