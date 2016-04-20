import React from 'react'
import Slider from 'react-slick'
import { Image } from 'react-bootstrap'



class ProjectSlider extends React.Component {
  render () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    }

    return (
      <Slider {...settings}>
        <div><Image src='/images/sample.jpg'/></div>
        <div><Image src='/images/sample.jpg'/></div>
        <div><Image src='/images/sample.jpg'/></div>
        <div><Image src='/images/sample.jpg'/></div>
        <div><Image src='/images/sample.jpg'/></div>
      </Slider>
    )
  }
}
export default ProjectSlider
