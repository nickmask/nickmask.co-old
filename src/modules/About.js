import React, { PropTypes, Component } from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
require('../www/stylesheets/about.sass')

class About extends Component {
  render () {
    return (
      <div className='aboutPage'>
        <Row>
          <Col sm={8} className='aboutMainCol'>
            <div className='aboutMain'>
              <h1 className='intro'>
                Hey, I'm Nick.
              </h1>
              <h1 className='intro'>
                I am a web developer
              </h1>
              <h1 className='introBottom'>
                from New Zealand.
              </h1>
              <p className='introParagraph'>
                After 5 years in the marketing industry working on everything from NZ wide huge campaigns, startups, to big data analysis and trend spotting I have made the change to become a web developer.
              </p>
            </div>
          </Col>
          <Col sm={4} className='aboutMainCol'>
            <div className='contactLinks'>
              <h1><FontAwesome name='github'/> github</h1>
              <h1><FontAwesome name='linkedin'/> linkedin</h1>
              <h1><FontAwesome name='twitter'/> twitter</h1>
              <h1><FontAwesome name='facebook'/> facebook</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='care'>
          <hr/>
            <h1>
              What I care about
            </h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About
