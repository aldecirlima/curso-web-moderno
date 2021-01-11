const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = callBack => {
    console.log('Tarefa Antes 1!')
    return callBack()
}

const antes2 = callBack => {
    console.log('Tarefa Antes 2!')
    return callBack()
}

const fim = callBack => {
    console.log('Tarefa Fim!')
    return callBack()
}

function copiar(callBack) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    // copiando qualuqer arquivo da pastaA com a extensão .txt
    gulp.src(['pastaA/**/*.txt'])
        // .pipe(imagemPelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
    return callBack()
}

// exportando função copiar 
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)