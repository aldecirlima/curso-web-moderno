const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // excluindo comentários
            comments: false,
            // definindo pressets
            presets: ["env"] // "env" é a versão mais atual do JS
            // o código da versão "env" será convertido para a versão mais
            // compatível de JS na maioria dos browsers
        }))
        // mimificando o código, eliminando espaços e caracteres desnecessários
        .pipe(uglify())
        // tratando erros = exemplo
        .on('error', err => console.log(err))
        // concatenando arquivos e definindo o nome final do arquivo
        .pipe(concat('codigo.min.js'))
        // definindo a pasta destino
        .pipe(gulp.dest('build'))

    // return callback()
}

function fim(callback) {
    console.log('Fim!!!')
    return callback()
}

exports.default = series(transformacaoJS, fim)