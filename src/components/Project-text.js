import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')

export default class Text extends Component {
  render () {
    return (
      <div>
        {keys.map((key, i) =>
          <div>
            <h2>{key}</h2>
            <p>{project.text.key}</p>
          </div>
        )}
      </div>
    )
  }
}
