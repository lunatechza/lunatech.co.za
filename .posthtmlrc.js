module.exports = {
  plugins: [
    require('posthtml-include')({
      root: './src/templates'
    })
  ],
  input: 'src/pages/*.html',
  output: './'
}
