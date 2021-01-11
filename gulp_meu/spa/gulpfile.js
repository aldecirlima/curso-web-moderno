const { series, parallel } = require('gulp')
const gulp = require('gulp')

// importando as funções
const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

// definindo o fluxo de trabalho das funções
module.exports.default = series(
    parallel(
        // processando dois grupos de funções em paralelo
        // porém cada grupo será processado em série
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)