import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
require('../www/stylesheets/home.sass')

class Home extends React.Component {
  render () {
    return (
      <div>
        <Row className='show-grid row1'>
          <Col className='col1' md={6} fluid>
            <Image src='http://fillmurray.com/600/200' responsive/>
          </Col>
          <Col md={6} fluid>
            <div fluid>
              <h3>Hi, I'm Nick.</h3>
              <p>I am a web developer with a love and passion for UX, design, marketing and tech. I love making beautiful, intuitive products that help people and business become more efficent.</p>
            </div>
          </Col>
        </Row>
        <Row className='show-grid row2'>
          <Col className='projects' md={3} sm={6} fluid>
            <h1>Latest projects</h1>
          </Col>
          <Col className='col2' md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col className='col3' md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col className='col1' md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
        </Row>
        <Row className='show-grid row3'>
          <Col className='blog' md={3} sm={6} fluid>
            <h1>Latest blog posts</h1>
          </Col>
          <Col className='col1' md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col className='col2' md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col className='col3' md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
        </Row>
        <Row className='show-grid row4'>
          <Col className='contact' md={3} sm={3} fluid>
              <h1>Contact</h1>
          </Col>
          <Col className='col2' md={3} sm={3} fluid>
            <Image src='http://fillmurray.com/300/200' responsive/>
          </Col>
          <Col className='col1' md={3} sm={3} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col className='col3' md={3} sm={3} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
