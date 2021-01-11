function teste1(num) {
    if (num > 7)
        console.log(num) // js só considera a primeira sentença sem as chaves
    console.log('Final') // esta sentença está fora do bloco if
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // CUIDADO! não usar ";" no if desta forma.
        console.log(num)
    }
}

teste2(6)
teste2(8)