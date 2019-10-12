module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue/'
    : '/',

    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                prependData: `@import "@/sass/vars/index.scss";`
            }
        }
    }
}