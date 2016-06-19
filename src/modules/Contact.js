import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
require('../www/stylesheets/contact.sass')

class Contact extends Component {
  render () {
    return (
      <Row className='contact'>
        <Col sm={12} className='contactMainColLeft'>
          <div className='contactMain'>
            <h1>Wanna get in touch?</h1>
            <h2>Send me an email or hit me up on social media.</h2>
            <div className='contactSocial'>
              <a href='mailto:nrmaskell@gmail.com'><FontAwesome name='envelope'/></a>
              <a href='https://github.com/nickmask'><FontAwesome name='github'/></a>
              <a href='https://nz.linkedin.com/in/nickmask'><FontAwesome name='linkedin'/></a>
              <a href='https://twitter.com/nickmask'><FontAwesome name='twitter'/></a>
              <a href='https://www.facebook.com/nrmaskell'><FontAwesome name='facebook'/></a>
            </div>

          </div>
        </Col>
      </Row>
    )
  }
}

export default Contact
