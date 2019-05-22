module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/scrub-wrap/' : '/',
    css: {
        extract: false
    }
}
