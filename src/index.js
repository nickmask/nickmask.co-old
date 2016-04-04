var React = require('react')
var ReactDOM = require('react-dom')
require('./src/stylesheets/bootstrap.css')
require('./src/stylesheets/main.sass')

var img = document.createElement('img')
img.src = require('./glyph.png')


ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('root'))
