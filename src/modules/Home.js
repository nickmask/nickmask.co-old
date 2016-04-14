import React from 'react'
import { Col, Row } from 'react-bootstrap'

class Home extends React.Component {
  render () {
    return (
      <Row>
        <Col sm={6}>
          <img src='http://fillmurray.com/500/200'/>
        </Col>
        <Col sm={6}>
          <img src='http://fillmurray.com/500/200'/>
        </Col>
      </Row>
    )
  }
}

export default Home
