import { Grid } from 'react-bootstrap'
import Sidebar from './Sidebar'
import React, { Component, PropTypes } from 'react'
import MainContent from './Main-content'

class App extends Component {

  render () {
    return (
      <div>
        <Sidebar />
        <Grid className='fluid-container'>
          <MainContent />
        </Grid>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
