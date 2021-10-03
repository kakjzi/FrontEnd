module.exports = {
    devServer: {
    overlay: false,
    publicPath : '/vue_project2/',
    },
    pwa : {
        name: "jiwoo' vueGram",
        themeColore: '#4DBA87',
        msTileColor : '#000000',

        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, 'index.html']
        }
    }
}