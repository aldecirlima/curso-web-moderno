var funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

// vai imprimir para todas o valor de 10
funcs[2]()
funcs[8]()
