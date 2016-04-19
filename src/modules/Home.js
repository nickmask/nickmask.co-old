import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
require('../www/stylesheets/home.sass')

class Home extends React.Component {
  render () {
    return (
      <div>
        <Row className='show-grid row1' fluid>
          <Col className='gridItem' md={6} fluid>
            <div className='col1'>
            </div>
          </Col>
          <Col className='gridItem' md={6} fluid>
            <div fluid>
              <h3>Hi, I'm Nick.</h3>
              <p>I am a web developer with a love and passion for UX, design, marketing and tech. I love making beautiful, intuitive products that help people and business become more efficent.</p> <br/>
              <Button className='homeBut' bsStyle='primary'>Learn more</Button>
            </div>
          </Col>
        </Row>
        <div className='homeGrid'>
          <Row className='show-grid row2'>
            <Col  className='gridItem' md={3} sm={6} fluid>
              <div className='projects'>
                <h1>Latest projects</h1>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={6} fluid>
              <div className='col2'>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={6} fluid>
              <div className='col3' >
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={6} fluid>
              <div className='col1' >
              </div>
            </Col>
          </Row>
          <Row className='show-grid row3'>
            <Col className='gridItem' md={3} sm={6} fluid>
              <div className='blog'>
                <h1>Latest blog posts</h1>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={6} fluid>
              <div className='col1'>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={6} fluid>
              <div className='col2'>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={6} fluid>
              <div className='col3'>
              </div>
            </Col>
          </Row>
          <Row className='show-grid row4'>
            <Col className='gridItem' md={3} sm={3} fluid>
              <div className='contact'>
                <h1>Contact</h1>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={3} fluid>
              <div className='col2'>
                <Image src='/images/gb-logo.png'/>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={3} fluid>
              <div className='col1'>
              </div>
            </Col>
            <Col className='gridItem' md={3} sm={3} fluid>
              <div className='col3'>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Home
