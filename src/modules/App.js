import React, { Component, PropTypes } from 'react'
import { Grid } from 'react-bootstrap'
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
      </div>
    )
  }
}

export default App
