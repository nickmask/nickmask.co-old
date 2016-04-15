import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Row className='show-grid'>
          <Col md={3} fluid>
            <Image src='http://fillmurray.com/300/200' responsive/>
          </Col>
          <Col md={9} fluid>
            <div fluid>
              <h3>Hi, I'm Nick.</h3>
              <p>I am a web developer with a love and passion for UX, design, marketing and tech. I love making beautiful, intuitive products that help people and business become more efficent.</p>
            </div>
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col md={3} sm={6} fluid>
            <h1>Latest projects</h1>
          </Col>
          <Col md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col md={3} sm={6} fluid>
            <h1>Latest blog posts</h1>
          </Col>
          <Col md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col md={3} sm={6} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col md={3} sm={3} fluid>
            <h1>Contact</h1>
          </Col>
          <Col md={3} sm={3} fluid>
            <Image src='http://fillmurray.com/300/200' responsive/>
          </Col>
          <Col md={3} sm={3} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
          <Col md={3} sm={3} fluid>
            <Image src='http://fillmurray.com/300/200' responsive />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
