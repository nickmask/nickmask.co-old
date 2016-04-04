import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.sass'
import App from './modules/App'

let img = document.createElement('img')
img.src = require('./images/pig.jpg')

ReactDOM.render(<App />, document.getElementById('root'))
