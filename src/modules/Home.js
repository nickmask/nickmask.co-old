import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
require('../www/stylesheets/home.sass')

class Home extends React.Component {
  render () {
    return (
      <div>
        <Row fluid>
          <Col className='gridItem' md={3} fluid>
            <div>
              <h1>About me</h1>
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
          <Col  className='gridItem' sm={9} fluid>
            <div className='projects'>
              <h1>Latest projects</h1>
            </div>
          </Col>
          <Col className='gridItem' sm={3} fluid>
            <div className='col2'>
            </div>
          </Col>
          <Col className='gridItem' sm={6} fluid>
            <div className='col3' >
            </div>
          </Col>
          <Col className='gridItem' sm={6} fluid>
            <div className='col1' >
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
