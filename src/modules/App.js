import React, { Component, PropTypes } from 'react'
import { Row, Grid } from 'react-bootstrap'
import Navbar from './Navbar'
require('../www/stylesheets/main')

class App extends Component {
  render () {
    return (
      <Row className='body'>
        <Navbar/>
        <div>
          {this.props.children}
        </div>
      </Row>
    )
  }
}

export default App
