import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'
import Lightbox from 'react-images'
require('../www/stylesheets/projects.sass')

import Images from './Project-images'

export default class Text extends Component {

  hasImages (entry) {
    if (typeof this.props.project.text[entry].images != "undefined") {
      return true
    } else {
      return false
    }
  }

  render () {
    const self = this
    this.props.project.text.map(function (te, i) {
      if (!self.hasImages(i)) {
        console.log('first')
        return (
          <div key={i}>
            <h2>{te.title}</h2>
            <p>{te.text}</p>
          </div>
        )
      } else {
        console.log('second')
        return (
          <div key={i}>
            <h2>{te.title}</h2>
            <p>{te.text}</p>
            <Images images={te.images} />
          </div>
        )
      }
    })
  }
}

// {!this.hasBuild() && <div></div>
// }
// {this.hasBuild() && <Build build={this.props.project.built.split(", ")} />
// }
