import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')

export default class Text extends Component {

  displayText () {
    const project = this.props.project.text
    const projectText = []
    for(var i = 0; i < project.length; i++) {
      console.log('Project', project[i])
      return (
        <div>
          <h2>{project[i].text}</h2>
          <p>{project[i].title}</p>
        </div>
      )
    }
  }

  render () {
    const { project, keys } = this.props
    console.log('running')
    return (
      <div>
        {this.displayText()}
      </div>
    )
  }
}
