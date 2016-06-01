import React from 'react'
import { Col, Row, Image, Carousel, Button } from 'react-bootstrap'
import ProjectSlider from '../components/Project-slider'
import Slider from 'react-slick'
require('../www/stylesheets/project-page')

class Project extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='projectPage'>
        <Row>
          <Col sm={12} className='projectTitleCol'>
            <div className='projectTitle'>
              <h1>{this.props.projectName}</h1>
              <i>30th March 2016</i>
              <Button bsSize='xsmall'>github</Button>
              <Button bsSize='xsmall'>live site</Button>
              <hr/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} className='projectMainCol'>
            <div className='projectMain'>
              <h2>Summary</h2>
              <p>Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. </p>
              <h2>Development process</h2>
              <p>Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. </p>
            </div>
          </Col>
          <Col md={4} className='projectSideCol'>
            <div className='projectSide'>
              <h2>Built with</h2>
              <div className='build'>
                <Image src='/images/node.png' alt='Node.js' responsive/>
                <Image src='/images/webpack.png' alt='Webpack' responsive/>
                <Image src='/images/eslint.png' alt='eslint' responsive/>
                <Image src='/images/babel.png' alt='Babel' responsive/>
                <Image src='/images/sass.png' alt='Sass' responsive/>
                <Image src='/images/react-router.png' alt='React router' responsive/>
              </div>
              <h2>Testing</h2>
              <div className='testing'>
                <Image src='/images/mocha.png' alt='Mocha' responsive/>
                <Image src='/images/chai.png' alt='Chai' responsive/>
                <Image src='/images/enzyme.png' alt='Enzyme' responsive/>
                <Image src='/images/nightwatch.png' alt='Nightwatch' responsive/>
              </div>
              </div>
          </Col>
        </Row>
        <Row >
          <Col sm={12} className='projectImageCol'>
            <div className='projectImage'>
              <div>
                <ProjectSlider/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Project
