import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
require('../www/stylesheets/contact.sass')

class Contact extends Component {
  render () {
    return (
      <Row >
        <Col sm={12} className='contactMainCol'>
          <div className='contactMain'>
            <h1>Coming soon...</h1>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Contact
