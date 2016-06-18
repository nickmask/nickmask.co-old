import React, { PropTypes, Component } from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
require('../www/stylesheets/about.sass')

class About extends Component {
  render () {
    return (
      <div className='aboutMain'>
        <Row className='introRow'>
          <Col md={8} className='introCol'>
            <div>
              <h1>
                Hey, I'm Nick.
              </h1>
              <h1>
                I am a web developer
              </h1>
              <h1>
                from New Zealand.
              </h1>
              <p>
                After 5 years in the marketing industry working on everything from NZ wide huge campaigns, startups, to big data analysis and trend spotting I have made the change to become a web developer.
              </p>
            </div>
          </Col>
          <Col md={4} className='profileImageCol'>
            <div className='profileImage'>
              <Image src='/images/nick-about.jpg' responsive/>
            </div>
          </Col>
        </Row>
        <Row className='careRowTitle'>
          <Col sm={12}>
            <h1 className='aboutTitle'>
              What I care about
            </h1>
          </Col>
        </Row>
        <Row className='careRowContent'>
          <Col sm={4} className='careLeft'>
            <h2><FontAwesome name='eye'/>Design</h2>
            <p>
              Design, both in terms of asthetics and UX is so essential. You might have the most powerful application in your field, but unless if it isn't attractive and easy to use people will not use it.
            </p>
          </Col>
          <Col sm={4} className='careMiddle'>
            <h2><FontAwesome name='cogs'/>Functionality</h2>
            <p>
              Design, both in terms of asthetics and UX is so essential. You might have the most powerful application in your field, but unless if it isn't attractive and easy to use people will not use it.
            </p>
          </Col>
          <Col sm={4} className='careRight'>
            <h2><FontAwesome name='user'/>User</h2>
            <p>
              Design, both in terms of asthetics and UX is so essential. You might have the most powerful application in your field, but unless if it isn't attractive and easy to use people will not use it.
            </p>
          </Col>
          <Col sm={12} className='careBottomCol'>
          </Col>
        </Row>
        <Row className='aboutRowTitle'>
          <Col sm={12} >
            <h1 className='aboutTitle'>
              About me
            </h1>
          </Col>
        </Row>
        <Row className='aboutRowContent'>
          <Col sm={6} className='aboutMeLeft'>
            <p>
              Design, both in terms of asthetics and UX is so essential. You might have the most powerful application in your field, but unless if it isn't attractive and easy to use people will not use it.
              Design, both in terms of asthetics and UX is so essential. You might have the most powerful application in your field, but unless if it isn't attractive and easy to use people will not use it.
            </p>
          </Col>
          <Col sm={6} className='aboutMeRight'>
            <p>
              Design, both in terms of asthetics and UX is so essential. You might have the most powerful application in your field, but unless if it isn't attractive and easy to use people will not use it.
              Design, both in terms of asthetics and UX is so essential. You might have the most powerful application in your field, but unless if it isn't attractive and easy to use people will not use it.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About
