function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFAlo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFAlo()
seForVerdadeEuFAlo(null)
seForVerdadeEuFAlo(undefined)
seForVerdadeEuFAlo(NaN)
seForVerdadeEuFAlo('')
seForVerdadeEuFAlo(0)
seForVerdadeEuFAlo(-1)
seForVerdadeEuFAlo(' ')
seForVerdadeEuFAlo('?')
seForVerdadeEuFAlo([])
seForVerdadeEuFAlo([1, 2])
seForVerdadeEuFAlo({})
