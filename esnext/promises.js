function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // resolve
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))

function falarDepoisDe2(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase) // reject
        }, segundos * 1000)
    })
}

falarDepoisDe2(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))