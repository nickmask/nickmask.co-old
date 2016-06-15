import React, { PropTypes, Component } from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
require('../www/stylesheets/about.sass')


class About extends Component {
  render () {
    return (
      <div className='aboutPage'>
        <Row>
          <Col sm={6} className='aboutMainCol'>
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
          <Col sm={6} className='aboutMainCol'>
            <div className='contactLinks'>
              <h1>github</h1>
              <h1>linkedin</h1>
              <h1>twitter</h1>
              <h1>facebook</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
      </div>
    )
  }
}

export default About
