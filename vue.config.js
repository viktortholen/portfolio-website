module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/portfolio-website' + process.env.CI_PROJECT_NAME + '/'
      : '/'
  }