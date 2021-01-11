function fizzBuzz(nrInf) {
    for (let i = 1; i < (nrInf + 1); i++) {
        if (i % 5 === 0 && i % 2 === 0) {
            console.log('FizzBuzz')
        } else if (i % 2 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(25)