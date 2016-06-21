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
                After 5 years in the marketing industry working on everything from NZ wide campaigns, design, to big data analysis and trend spotting I have made the change to become a web developer. If you think I could help you team make beautiful apps, get in touch!
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
              Design, both in terms of asthetics and UX, is so essential. You might have the most powerful application in your field, but unless it is intuitive and beautful, you are in for an uphill battle.
            </p>
          </Col>
          <Col sm={4} className='careMiddle'>
            <h2><FontAwesome name='cogs'/>Functionality</h2>
            <p>
              Ensuring applications have the right features is something I care a lot about. That often means saying no to users wanting additions and choosing to include only features that add true value to the application.
            </p>
          </Col>
          <Col sm={4} className='careRight'>
            <h2><FontAwesome name='user'/>User</h2>
            <p>
              For me, it is all about the users. Understand how a user thinks, acts and interacts is essential to building a great application. In everything I build, I try to best understand my user and what will work best for them.
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
              Technology is my life. I love building PC’s, following tech trends and coding my day away. After studying marketing, I worked at Unilever on household brands such as Streets, Continental and Dove. In marketing a few things always had my focus; design, consumer behaviour and tech. I was the go-to person for analytics, the interim IT person and always had a keen eye for design.
            </p>
          </Col>
          <Col sm={6} className='aboutMeRight'>
            <p>
              I am now a web developer and use all the knowledge I gained while a marketer in my work. I love building applications that have clean, intuitive designs that focus on user experience. I am now looking to join a team where I can share my love for coding, where I can build great apps, learn and develop my skills and have fun!
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About
