import React from 'react'
import { Col, Row } from 'react-bootstrap'

class Home extends React.Component {
  render () {
    return (
      <Row fluid>
        <Col md={4} fluid>
          <img src='http://fillmurray.com/600/200'/>
        </Col>
        <Col md={8} fluid>
          <div>
            <h3>Hi, I'm Nick.</h3>
            <p>I am a web developer with a love and passion for UX, design, tech and marketing. </p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Home
