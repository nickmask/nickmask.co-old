import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')

export default class Text extends Component {

  hasImages (entry) {
    if (typeof this.props.project.text[entry].images != "undefined") {
      return true
    } else {
      return false
    }
  }
  render () {
    const text = this.props.project.text
    return (
      <div>
        {text.map((te, i) =>
          <div key={i}>
            <h2>{te.title}</h2>
            <p>{te.text}</p>
          </div>
        )}
      </div>
    )
  }
}
