import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import Navbar from './Navbar'
import { fetchProjects } from '../actions/index.js'
require('../www/stylesheets/main')
import Home from './Home'
import Update from '../components/Update-projects.js'

class App extends Component {

  render () {
    return (
      <div>
        <Navbar/>
        <Grid className='main'>
          {this.props.children || <Home/>}
        </Grid>
        <footer className='footer' fluid>
          <p> Copyright 2016 - Nick Maskell </p>
        </footer>
      </div>
    )
  }
}

export default App
