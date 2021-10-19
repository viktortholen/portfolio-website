module.exports = {
    publicPath: "/portfolio/",
    css: {
        loaderOptions: {
          sass: {
            additionalData: `@import "@/styles/styles.scss";`
          }
        }
    }
}