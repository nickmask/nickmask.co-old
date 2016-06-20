import React, { PropTypes, Component } from 'react'
import Gallery from 'react-photo-gallery';
require('../www/stylesheets/projects.sass')

export default class Images extends Component {
  formatImages () {
    const photoSet = []
    this.props.projectImages.map((im, i) => {
      photoSet[i] = {
        src: im,
        width: 100,
        height: 100,
        aspectRatio: 1,
        lightboxImage: {
          src: im
        }
      }
    })
    return photoSet
  }

  render () {
    return (
      <div>
        <Gallery photos={this.formatImages()} />
      </div>
    )
  }
}
