import React, { PropTypes, Component } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
require('../www/stylesheets/home.sass')

class Home extends Component {
  render () {
    return (
      <div>
        <Row fluid>
          <Col className='gridItem homeContact' md={3} fluid>
            <div>
              <h1><FontAwesome name='github'/></h1>
              <h1><FontAwesome name='linkedin'/></h1>
              <h1><FontAwesome name='twitter'/></h1>
              <h1><FontAwesome name='facebook'/></h1>
            </div>
          </Col>
          <Col className='gridIntro' md={9} fluid>
            <div fluid className='homeIntro'>
              <h1>Hey, I'm Nick.</h1>
              <p>
                I am a web developer with a love and passion for UX, design, marketing and tech. I love making beautiful, intuitive products that help people and business become more efficent.
                <br/>
                <Button className='homeBut' bsStyle='primary'>Learn more</Button>
              </p>
            </div>
          </Col>
          <Col  className='gridItem tightropeBackground' sm={9} fluid>
            <div className='homeTightrope'>
              <Image src='/images/tightrope-logo.png' responsive />
            </div>
          </Col>
          <Col className='gridItem nickmaskBackground' sm={3} fluid>
            <div className='homeNickmask'>
              <Image src='/images/nickmask-logo-home.png' responsive />
            </div>
          </Col>
          <Col className='gridItem solarVBackground' sm={6} fluid>
            <div>
              <h1>Solar V</h1>
            </div>
          </Col>
          <Col className='gridItem devAcademyBackground' sm={6} fluid>
            <div className='homeDevAcademy'>
              <h1>Enspiral Dev Academy</h1>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
