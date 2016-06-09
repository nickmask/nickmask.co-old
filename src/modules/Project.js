import React from 'react'
import { Col, Row, Image, Carousel, Button } from 'react-bootstrap'
import ProjectSlider from '../components/Project-slider'
import Slider from 'react-slick'
import ProjectSingle from '../components/Project-single'

require('../www/stylesheets/project-page')

class Project extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='projectPage'>
        <ProjectSingle />
      </div>
    )
  }
}

export default Project
