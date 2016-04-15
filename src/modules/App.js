import React, { Component, PropTypes } from 'react'
import { Grid, Row, Footer } from 'react-bootstrap'
import Navbar from './Navbar'
require('../www/stylesheets/main')

import Home from './Home.js'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Grid className='main'>
          {this.props.children}
        </Grid>
        <footer className='footer' fluid>
          <p> Copywrite 2016 - Nick Maskell </p>
        </footer>
      </div>
    )
  }
}

export default App
