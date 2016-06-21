import React, { PropTypes, Component } from 'react'
import Lightbox from 'react-images'
require('../www/stylesheets/projects.sass')

import Images from './Project-images'

export default class Text extends Component {

  hasImages () {
    return (
      this.props.project.text.map((te, i) => {
        if (typeof this.props.project.text[i].images != 'undefined') {
          return (
            <div key={i}>
              <h2>{te.title}</h2>
              <p>{te.text}</p>
              <Images projectImages={this.props.project.text[i].images} />
            </div>
          )
        } else {
          return (
          <div key={i}>
            <h2>{te.title}</h2>
            <p>{te.text}</p>
          </div>
          )
        }
      })
    )
  }

  render () {
    console.log()
    return (
      <div>
        {this.hasImages()}
      </div>
    )
  }
}
