var React = require('react')
var ReactDOM = require('react-dom')
require('./stylesheets/main.sass')

var img = document.createElement('img')
img.src = require('./images/pig.jpg')


ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('root'))
