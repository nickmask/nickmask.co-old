import React, { Component, PropTypes } from 'react'
import { Row, Grid, Col } from 'react-bootstrap'
import Navbar from './Navbar'
require('../www/stylesheets/main')

import Home from './Home.js'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
          <Grid fluid className='grid'>
            <Row className='container'>
              {this.props.children}
            </Row>
          </Grid>
      </div>
    )
  }
}

export default App
