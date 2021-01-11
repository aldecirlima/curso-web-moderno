const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtratcPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    // mode: 'production' mimifica os arquivos js
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        // gerando o arquivo de saida que substitui o arquivo main.js
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization:
    {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        // new TerserPlugin({
        //     parallel: true,
        //     terserOptions: {
        //         ecma: 6,
        //     },
        // }),

        // o plugin mini-css-extrat-pluguin extrai o css para um arquivo externo
        new MiniCssExtratcPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        // rules = regras
        rules: [
            {
                // definindo o tipo de arquivo para a regra = .css
                // expressão regex s=opcional [ac]= a ou c, ss =obrigatorio
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtratcPlugin.loader,

                    // Adicionando CSS à DOM injetando a tag <style>
                    // 'style-loader', => incompatível com o Mini-CSS

                    // css-loader interpreta @import, url()...
                    'css-loader',
                    'sass-loader',
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}