import React, { PropTypes, Component } from 'react'
import { Image } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')

export default class Images extends Component {

  constructor () {
    super()
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }

  openLightbox (index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
  	})
  }

  gotoPrevious () {
  	this.setState({
  		currentImage: this.state.currentImage - 1
  	})
  }

  gotoNext () {
  	this.setState({
  		currentImage: this.state.currentImage + 1
  	})
  }

  handleClickImage () {
  	if (this.state.currentImage === this.props.images.length - 1)
    return
  	 this.gotoNext()
  }

  renderGallery () {
  	if (!this.props.images) return
  	const gallery = this.props.images.map((obj, i) => {
  		return (
  			<a
  				href={obj.src}
  				key={i}
  				onClick={(e) => this.openLightbox(i, e)}
  				style={styles.thumbnail}
  				>
  				<img
  					height={styles.thumbnail.size}
  					src={obj.thumbnail}
  					style={styles.thumbnailImage}
  					width={styles.thumbnail.size}
  				/>
  			</a>
  		)
  	})
  	return (
  		<div style={styles.gallery}>
  			{gallery}
  		</div>
  	)
  }

  render () {
    return (
      <div>
        <h2>Built with</h2>
        <div className='sideImages'>
          {this.props.build.map((bu, i) =>
            <Image key={i} src={`/images/${bu}.png`} alt={bu}/>
          )}
        </div>
      </div>
    )
  }
}
