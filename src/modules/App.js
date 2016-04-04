import { Grid, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import React, { Component, PropTypes } from 'react'
import MainContent from './Main-content'

class App extends Component {

  render () {
    return (
      <Row>
        <Sidebar />
        <Grid fluid>
          <MainContent />
        </Grid>
      </Row>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
