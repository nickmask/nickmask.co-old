import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')

export default class Text extends Component {
  render () {
    const { project, keys } = this.props
    console.log(project.text)
    return (
      <div>
        {keys.map((key, i) =>
          <div>
            <h2>{Object.keys(key.i)}</h2>
            <p>{Object.keys(project.i)}</p>
          </div>
        )}
      </div>
    )
  }
}
