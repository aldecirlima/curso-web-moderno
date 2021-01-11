const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')


function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(callback) {
    // se o arquivo mudar o watch chama uma tarefa/função
    // função/tarefa "app.HTML" está no app.js 

    // watch apresenta erro, por isso desativar

    // watch('src/**/*.html', () => gulp.series('appHTML')())
    // watch('src/**/*.scss', () => gulp.series('appCSS')())
    // watch('src/**/*.js', () => gulp.series('appJS')())
    // watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}